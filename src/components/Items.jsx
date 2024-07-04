import { useDispatch } from "react-redux";
import { DeleteButton, TaskContainer, TaskText } from "./Style";
import { del, toggleDone } from "../store/slices/todoList";

export default function Item({index,work}){
const dispatch = useDispatch();

  return (
    <>
      <TaskContainer >
        <input type="checkbox" checked={work.done}
        onChange={() => dispatch(toggleDone(index))} />
        <TaskText done={work.done}>{work.title}</TaskText>

        <DeleteButton onClick={() => dispatch(del(index))}>Del</DeleteButton>
      </TaskContainer>
    </>
  );
};
