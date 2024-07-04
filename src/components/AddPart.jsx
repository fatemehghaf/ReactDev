import { useState } from "react";
import { AddButton, Input } from"./Style"
import { add } from "../store/slices/todoList";
import { useDispatch } from "react-redux";

export default function AddPart({ onAdd }) {
  const [newWorkTitle, setNewWorkTitle] = useState("");
  const dispatch=useDispatch();

  const handleAddClick = () => {
    setNewWorkTitle("");
    dispatch(add(newWorkTitle));
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
