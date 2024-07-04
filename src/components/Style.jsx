import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.h2`
  color: darkgreen;
  margin-left: 25%;
  fontFamily:serif;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid lightgreen;
  border-radius: 5px;
  margin-right:5px;
`;

export const AddButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: green;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }
`;

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid lightgreen;
  padding: 10px;
  width: 100%;
`;


export const TaskText = styled.span`
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
  flex-grow: 1;
`;

export const DeleteButton = styled.button`
  margin-left: auto;
  padding: 5px 10px;
  border: none;
  background-color: red;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;
