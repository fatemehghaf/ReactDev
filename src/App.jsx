import { useState } from "react";
import { AddButton, Container, Input, Title } from "./components/Style";
import TaskList from "./components/TaskList";

function App() {
  const [todoList, setTodoList] = useState("");
  const [newTask, setNewTask] = useState([
    { title: "Wake Up", done: false },
    { title: "Drink Coffee", done: false },
  ]);

  const handleAddClick = () => {
    setTodoList("");
    const newWorkObj = { title: todoList, done: false };
    setNewTask([...newTask, newWorkObj]);
  };

  return (
    <Container>
      <div>
      <Title>
          ToDo App in ReactJs
        </Title>

        <hr style={{width: "100%",
            border: "2px solid cyan",
            margin: "20px 0",
            }}  />

        <Input
          type="text"
          placeholder="Freaking ToDo"
          value={todoList}
          onChange={(e) => setTodoList(e.target.value)}
        />

        <AddButton onClick={handleAddClick}>+ Add Todo</AddButton>

        <TaskList newTask={newTask} setNewTask={setNewTask} />
      </div>
    </Container>
  );
}

export default App;
