import React from "react";
import "./profile.css";

const Profile = () => {
  return (
    <header className="container">
      <div className="share-icon">
        <img src="img/share_av_icon.svg" alt="share-icon" className="share" />
        <img src="img/dotted-Icon.svg" alt="menu icon" className="menu" />
      </div>

      <div className="user_pics">
        <img
          id="Profile_img"
          src="img/mypics.jpg"
          alt="myimage"
          className="my_img"
        ></img>
      </div>
      <div className="User_Name">
        <h1 className="my_name" id="twitter">
          Mikaheel Azeez Babatunde
        </h1>
        <h3 id="slack" className="hide">
          Azeez Babatunde
        </h3>
      </div>
    </header>
  );
};

export default Profile;
