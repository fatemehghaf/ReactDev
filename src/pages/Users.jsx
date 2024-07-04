import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageNum from "./components/PageNum";
import { UserContainer } from "./components/Style";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage]=useState(2);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users?since=${currentPage}`)
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("error fetching the users!", error);
        setError(error);
        setLoading(false);
      });
  }, [currentPage]);

  return (
    <div>
      <h1>Users</h1>
      <PageNum currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {users.map((user) => (
        <UserContainer key={user.id}>
          <img src={user.avatar_url} alt={user.name} width="150" />
          <Link to={'/my-users/' + user.id}>{user.name ? user.name : user.login}</Link>
          </UserContainer>
      ))}
    </div>
  );
}
