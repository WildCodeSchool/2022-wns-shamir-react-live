import { gql, useQuery } from "@apollo/client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Wilder from "../components/Wilder";
import WilderForm from "../components/WilderForm";
import IWilder from "../interfaces/IWilder";

export const GET_ALL_WILDERS = gql`
  query {
    getAllWilders {
      name
      grades {
        votes
        skill {
          name
        }
      }
    }
  }
`;

const Home = () => {
  const [wilders, setWilders] = useState<IWilder[]>([]);
  const [editWilder, setEditWilder] = useState<IWilder | null>(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });

  const { loading, error } = useQuery(GET_ALL_WILDERS, {
    onCompleted: (data) => {
      setWilders(data.getAllWilders);
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const save = async (name: string) => {
    if (editWilder !== null) {
      const response = await axios.put(
        `http://localhost:5001/api/wilders/${editWilder.id}`,
        {
          name,
        }
      );
      const updatedWilderIndex = wilders.findIndex(
        (w) => w.id === editWilder.id
      );
      setWilders([
        ...wilders.slice(0, updatedWilderIndex),
        response.data,
        ...wilders.slice(updatedWilderIndex + 1),
      ]);
    } else {
      const response = await axios.post("http://localhost:5001/api/wilders", {
        name,
      });
      setWilders([...wilders, response.data]);
    }
  };

  const deleteWilder = async (wilder: IWilder) => {
    await axios.delete(`http://localhost:5001/api/wilders/${wilder.id}`);
    setWilders(wilders.filter((w) => w.id !== wilder.id));
  };

  const selectWilder = async (wilder: IWilder) => {
    setEditWilder(wilder);
  };

  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <WilderForm wilder={editWilder} onSave={save} />
        <section className="card-row">
          {wilders.map((wilder: IWilder) => (
            <Wilder
              key={wilder.id}
              wilderInfos={wilder}
              onDeleteButtonClicked={() => {
                deleteWilder(wilder);
              }}
              onEditButtonClicked={() => {
                selectWilder(wilder);
              }}
            />
          ))}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
