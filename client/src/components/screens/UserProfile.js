import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [userProfile, setProfile] = useState(null);
  const { state, dispatch } = useContext(UserContext);
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
        <div className="container">
          <div className="profile-top">
            <div>
              <img
                className="profile-image"
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpYyUyMDElM0ExfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="profile-pic"
              />
            </div>
            <div className="profile-user-details">
              <h5>{userProfile.user.name}</h5>
              <h5>{userProfile.user.username}</h5>
              <h5>{userProfile.user.email}</h5>
              <div className="profile-counts">
                <h6>{userProfile.posts.length}</h6>
                <h6>40 Followers</h6>
                <h6>40 Following</h6>
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
