import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [userProfile, setProfile] = useState(null);
  const { userid } = useParams();

  useEffect(() => {
    fetch(`/user/${userid}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        //console.log(result)
        setProfile(result);
      });
  }, []);

  return (
    <>
      {userProfile ? (
        <div className="container profile-container">
          <div className="card profile-top">
            <div>
              <img
                className="profile-image"
                src={userProfile.user.pic}
                alt="profile-pic"
              />
            </div>
            <div className="profile-user-details">
              <h6>{userProfile.user.name}</h6>
              <h6 className="profile-user-data">{userProfile.user.username}</h6>
              <h6 className="profile-user-data">{userProfile.user.email}</h6>
              <div className="profile-counts">
                <h6>{userProfile.posts.length} Posts</h6>
              </div>
            </div>
          </div>
          <div className="gallery">
            {userProfile.posts.map((item) => {
              return (
                <img
                  key={item._id}
                  className="gallery-image"
                  src={item.photo}
                  alt={item.title}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="preloader-align">
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
