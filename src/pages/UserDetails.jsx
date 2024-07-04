import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserDetails() {
  const { userId } = useParams();

  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setUser(null);
    setError(false);
    axios
      .get(`https://api.github.com/users/${userId}`)
      .then((res) => {
        setUser(res.data);
      }).catch(() => {
        alert("Connection error");
        setError(true);
      });
  }, [userId]);

  if (error) return <>Error happend</>;
  if (user === null) return <>Loading...</>;

  return (
    <div>
      <div>
      <h1>{user.name}</h1>
      <img src={user.avatar_url} alt={user.name} width="150" />
      <p>Username: {user.login}</p>
      <p>Bio: {user.bio ? user.bio : "No bio available"}</p>
      <p>Location: {user.location ? user.location : "No location"}</p>
      <p>Profile URL: <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a></p>
    </div>
    </div>
  );
}
