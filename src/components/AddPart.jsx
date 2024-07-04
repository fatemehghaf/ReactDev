import { useState } from "react";
import { AddButton, Input } from "./Style";

export default function AddPart({ onAdd }) {
  const [newWorkTitle, setNewWorkTitle] = useState("");

  const handleAddClick = () => {
    setNewWorkTitle("");
    onAdd(newWorkTitle);
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Freaking ToDo"
        value={newWorkTitle}
        onChange={(e) => setNewWorkTitle(e.target.value)}
      />

      <AddButton onClick={handleAddClick}>+ Add Todo</AddButton>
    </div>
  );
}
