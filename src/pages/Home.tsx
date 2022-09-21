import axios from "axios";
import { useEffect, useState } from "react";
import Wilder from "../components/Wilder";
import WilderForm from "../components/WilderForm";
import IWilder from "../interfaces/IWilder";

const Home = () => {
  const [wilders, setWilders] = useState<IWilder[]>([]);

  useEffect(() => {
    const fetchWilders = async () => {
      const response = await axios.get<IWilder[]>(
        "http://localhost:5001/api/wilders"
      );
      console.log(response.data);

      setWilders(response.data);
    };

    fetchWilders();
  }, []);

  const save = async (name: string) => {
    const response = await axios.post("http://localhost:5001/api/wilders", {
      name,
    });
    setWilders([...wilders, response.data]);
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
        <WilderForm onSave={save} />
        <section className="card-row">
          {wilders.map((wilder: IWilder) => (
            <Wilder
              key={wilder.id}
              wilderInfos={wilder}
              // onDeleteButtonClicked={() => {
              //   deleteWilder(wilder);
              // }}
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
