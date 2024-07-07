import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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


export const Content = styled(({ ...props }) => {
  const { textColor, borderColor } = useSelector((state) => state.colors);
  return <Link {...props} style={{ color: textColor, border: `2px solid ${borderColor}` }} />;
})`
  flex: 1;
  padding: 5%;
`;

/*export const Links = styled(Link)`
  text-decoration: none;
  color: #333;
  padding: 8px 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  border: 2px solid cyan;

  &:hover {
    background-color: #ddd;
  }
`;*/

export const Links = styled(({ ...props }) => {
  const { textColor, borderColor } = useSelector((state) => state.colors);
  return <Link {...props} style={{ color: textColor, border: `1px solid ${borderColor}` }} />;
})`
text-decoration: none;
  padding: 8px 16px;
  border-radius: 5px;
  &:hover {
    background-color: #ddd;
  }`;

export const UserContainer = styled(({ ...props }) => {
  const { textColor, borderColor } = useSelector((state) => state.colors);
  return <Link {...props} style={{ color: textColor, border: `3px solid ${borderColor}` }} />;
})`
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

export const ColorBtn = styled.button`
  padding:10px;
  margin:10px; 
  border:0.25px solid #A7AFAF;
  box-shadow: inset 0 0 0 3px white;
  
  cursor:pointer;
   width: 45px;
   

   
`;
