import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";

const Profile = () => {
  const [mypics, setPics] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch("/mypost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setPics(result.mypost);
      });
  }, []);

  useEffect(() => {
    if (image) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "social-media-site");
      data.append("cloud_name", "daifioz2b");
      fetch("https://api.cloudinary.com/v1_1/daifioz2b/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          fetch("/updatepic", {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
              pic: data.url,
            }),
          })
            .then((res) => res.json())
            .then((result) => {
              localStorage.setItem(
                "user",
                JSON.stringify({ ...state, pic: result.pic })
              );
              dispatch({ type: "UPDATEPIC", payload: result.pic });
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [image]);

  const updatePhoto = (file) => {
    setImage(file);
  };

  return (
    <div className="container profile-container">
      <div className="card profile-top">
        <div>
          <img
            className="profile-image"
            src={state ? state.pic : "loading"}
            alt="profile-pic"
          />
          <br></br>
          <div
            className="file-field input-field fileupload-section"
            style={{ marginTop: "0", marginBottom: "0" }}
          >
            <div
              className="btn file-input-btn"
              style={{ float: "none", marginBottom: "0" }}
            >
              <span>Update Image</span>
              <input
                type="file"
                onChange={(e) => updatePhoto(e.target.files[0])}
              />
            </div>
          </div>
        </div>
        <div className="profile-user-details">
          <h5>{state ? state.name : "loading"}</h5>
          <h6 className="profile-user-data">
            {state ? state.username : "loading"}
          </h6>
          <h6 className="profile-user-data">
            {state ? state.email : "loading"}
          </h6>
          <div className="profile-counts">
            <h6 className="profile-user-data">40 Posts</h6>
          </div>
        </div>
      </div>
      <div className="gallery">
        {mypics.map((item) => {
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
  );
};

export default Profile;
