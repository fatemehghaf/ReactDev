import { useReducer } from "react";
import { Container, Title } from "./Style";
import Items from "./Items";
import AddPart from "./AddPart";
import { type } from "@testing-library/user-event/dist/type";
import { initialState, reducer } from "./reducer";

function ToDo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <div>
        <Title>ToDo App in ReactJs</Title>

        <hr
          style={{ width: "100%", border: "2px solid cyan", margin: "20px 0" }}
        />

        <AddPart onAdd={(value) => dispatch({ type: "add", payload: value })} />
        {state.newTask.length === 0 ? (
          <div
            style={{
              backgroundColor: "#ffb3b3",
              padding: 10,
            }}
          >
            Nothing to do
          </div>
        ) : (
          state.newTask.map((work, index) => (
            <Items
              work={work}
              onDoneToggle={() => dispatch({ type: "check", payload: index })}
              onDelete={() => dispatch({ type: "del", payload: index })}
            />
          ))
        )}
      </div>
    </Container>
  );
}

export default ToDo;
