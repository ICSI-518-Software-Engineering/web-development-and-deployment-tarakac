import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

function UserCard() {
  const [userSnapshot, setUserSnapshot] = useState({
    displayName: "",
    story: "",
    chosenAvatar: null,
  });
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleDisplayNameChange = (e) => {
    setUserSnapshot((prevData) => ({ ...prevData, displayName: e.target.value }));
  };

  const handleStoryChange = (e) => {
    setUserSnapshot((prevData) => ({ ...prevData, story: e.target.value }));
  };

  const handleAvatarChange = (e) => {
    const avatarFile = e.target.files[0];
    setUserSnapshot((prevData) => ({ ...prevData, chosenAvatar: avatarFile }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="main-container">
      <h2 className="profile-header">Tell Your Story</h2>
      <div className="profile-visual-section">
        <div onClick={handleAvatarClick}>
          {userSnapshot.chosenAvatar && (
            <img
              src={URL.createObjectURL(userSnapshot.chosenAvatar)}
              alt="Profile"
              className="profile-portrait img-fluid"
            />
          )}
          {!userSnapshot.chosenAvatar && (
            <div className="image-placeholder">
              <span>Your Avatar, click here!</span>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={handleAvatarChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div className="profile-story-section mt-4">
        <h5>
          {isEditing ? (
            <input
              placeholder="Enter Your Name"
              type="text"
              className="form-control"
              value={userSnapshot.displayName}
              onChange={handleDisplayNameChange}
            />
          ) : (
            <span className="profile-name">{userSnapshot.displayName}</span>
          )}
        </h5>
        <h5 className="profile-bio-label"></h5>
        <p>
          {isEditing ? (
            <textarea
              className="form-control "
              placeholder="Share a bit about yourself"
              value={userSnapshot.story}
              onChange={handleStoryChange}
            />
          ) : (
            <p className="profile-bio">{userSnapshot.story}</p>
          )}
        </p>
        <br />
        {isEditing ? (
          <button className="btn btn-primary mb-4" onClick={handleSaveClick}>
            Save Story
          </button>
        ) : (
          <button className="btn btn-primary mb-4" onClick={handleEditClick}>
            Your Story?
          </button>
        )}
      </div>
    </div>
  );
}

export default UserCard;
