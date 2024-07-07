import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";
import UserDetails from "./pages/UserDetails";
import NotFound from "./pages/NotFound";
import Options from "./pages/Options";
import { Container, Content, GlobalStyle, Links, Nav  } from "./pages/components/Style";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";



export default function App() {
  const { currentTheme, themes } = useSelector(state => state.theme);
  const theme = themes[currentTheme];
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
    <BrowserRouter>
    <Container>
        <Nav>
          <Links to="/">Home</Links>
          <Links to="/my-about">About</Links>
          <Links to="/my-users">Users</Links>
          <Links to="/my-options">Options</Links>
        </Nav>
        <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-about" element={<About />} />
          <Route path="/my-users" element={<Users />} />
          <Route path="/my-users/:userId" element={<UserDetails />} />
          <Route path="/my-options" element={<Options/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Content>
      </Container>
    </BrowserRouter>
    </ThemeProvider>
  );
}
