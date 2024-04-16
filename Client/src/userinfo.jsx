import React from 'react';

const UserInfo = ({ username }) => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <p>Username: {username}</p>
    </div>
  );
};

export default UserInfo;
