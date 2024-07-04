import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";
import UserDetails from "./pages/UserDetails";
import NotFound from "./pages/NotFound";
import { Container, Content, Links, Nav  } from "./pages/components/Style";

export default function App() {
  return (
    <BrowserRouter>
    <Container>
        <Nav>
          <Links to="/">Home</Links>
          <Links to="/my-settings">About</Links>
          <Links to="/my-users">Users</Links>
        </Nav>
        <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-settings" element={<About />} />
          <Route path="/my-users" element={<Users />} />
          <Route path="/my-users/:userId" element={<UserDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Content>
      </Container>
    </BrowserRouter>
  );
}
