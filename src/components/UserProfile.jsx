import React from "react";
import ProfilePicture from "./ProfilePicture";
import ProfileDetails from "./ProfileDetails";

const UserProfile = ({ name, email, pictureSrc }) => {
  return (
    <div>
      <ProfilePicture src={pictureSrc} />
      <ProfileDetails name={name} email={email} />
    </div>
  );
};

export default UserProfile;
