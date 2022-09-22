import { useEffect, useState } from "react";
import IWilder from "../interfaces/IWilder";

type WilderFormProps = {
  wilder: IWilder | null;
  onSave: (name: string) => void;
};

const WilderForm = ({ wilder, onSave }: WilderFormProps) => {
  const [name, setName] = useState<IWilder["name"]>("");

  useEffect(() => {
    if (wilder !== null) {
      setName(wilder.name);
    } else {
      setName("");
    }
  }, [wilder]);

  const handleNameChanged = (e: any) => {
    setName(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(name);
      }}
    >
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={handleNameChanged} />
      <br />
      <button>Save</button>
    </form>
  );
};

export default WilderForm;
