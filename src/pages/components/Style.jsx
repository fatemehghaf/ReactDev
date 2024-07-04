import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 200px;
  padding: 10px;
`;

export const Content = styled.div`
  flex: 1;
  padding: 5%;
  border: 2px solid cyan;
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: #333;
  padding: 8px 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  border: 2px solid cyan;

  &:hover {
    background-color: #ddd;
  }
`;
export const UserContainer = styled.div`
  flex-Direction: column;
   display:inline-flex;
   align-items: center;
   margin-Bottom: 10;
   margin:10px;
   gap: 10px;
  border: 3px solid cyan;
  padding: 10px;
  width: 200px;
`;
