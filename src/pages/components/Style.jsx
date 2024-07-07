import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.bgColor};
    border-color: ${({ theme }) => theme.borderColor};
    margin:0;
  }
`;

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
  const { textColor, borderColor,bgColor } = useSelector((state) => state.colors);
  return <Link {...props} style={{ color: textColor, border: `2px solid ${borderColor}`,backgroundColor:bgColor }} />;
})`
  flex: 1;
  padding: 5%;
  background-color: ${({ theme }) => theme.bgColor};
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
  const { textColor, borderColor,bgColor } = useSelector((state) => state.colors);
  return <Link {...props} style={{ color: textColor, backgroundColor:bgColor, border: `1px solid ${borderColor}`, }} />;
})`
text-decoration: none;
  padding: 8px 16px;
  border-radius: 5px;
  &:hover {
  }`;

export const UserContainer = styled(({ ...props }) => {
  const { textColor, borderColor,bgColor } = useSelector((state) => state.colors);
  return <Link {...props} style={{ color: textColor, border: `3px solid ${borderColor}` ,backgroundColor:bgColor }} />;
})`
  flex-Direction: column;
   display:inline-flex;
   align-items: center;
   margin-Bottom: 10;
   margin:10px;
   gap: 10px;
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
