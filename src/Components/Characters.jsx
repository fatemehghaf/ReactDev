// UserList.js
import React from 'react';

const Characters = ({ users }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {users && users.map((user) => (
        <div
          key={user.id}
          style={{
            flexDirection: "column",
              display:"inline-flex",
              alignItems: "center",
              marginBottom: 10,
              margin:10,
              gap: 10,
              border: "3px solid cyan",
              padding: 10,
              width: 200,
          }}
        >
          <img src={user.image} alt={user.name} width={150} />
          <span>{user.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Characters;
