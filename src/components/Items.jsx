import { DeleteButton, TaskContainer, TaskText } from "./Style";

const Items = ({ work, onDoneToggle, onDelete }) => {
  return (
    <>
      <TaskContainer key={work.title}>
        <input type="checkbox" checked={work.done} onChange={onDoneToggle} />
        <TaskText done={work.done}>{work.title}</TaskText>

        <DeleteButton onClick={onDelete}>Del</DeleteButton>
      </TaskContainer>
    </>
  );
};

export default Items;
