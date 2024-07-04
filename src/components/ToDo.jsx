import { Container, Title } from "./Style";
import Items from "./Items";
import AddPart from "./AddPart";
import { useSelector } from "react-redux";



export default function ToDo() {
  const works = useSelector((store) => store.todoList.works);

  return (
    <Container>
      <div>
        <Title>ToDo App in ReactJs</Title>

        <hr
          style={{ width: "100%", border: "2px solid cyan", margin: "20px 0" }}
        />

        <AddPart/>
        {works.length === 0 ? (
          <div
            style={{
              backgroundColor: "#ffb3b3",
              padding: 10,
            }}
          >
            Nothing to do
          </div>
        ) : (
          works.map((work, index) => (
            <Items
              work={work}
              key={work.title}
              index={index}
            />
          ))
        )}
      </div>
    </Container>
  );
}


