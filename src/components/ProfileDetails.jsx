import React from "react";

const ProfileDetails = ({ name, email }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>
    </div>
  );
};

export default ProfileDetails;
