import { useState } from "react";
import IWilder from "../interfaces/IWilder";

const WilderForm = ({ onSave }: { onSave: any }) => {
  const [name, setName] = useState<IWilder["name"]>("");

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
