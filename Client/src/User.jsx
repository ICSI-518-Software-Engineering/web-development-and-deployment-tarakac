import React from 'react';

const User = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h2>User Details</h2>
      <div>
        <strong>First Name:</strong> {user?.firstName}
      </div>
      <div>
        <strong>Last Name:</strong> {user?.lastName}
      </div>
      <div>
        <strong>Username:</strong> {user?.username}
      </div>
    </div>
  );
};

export default User;
