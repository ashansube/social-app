import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import M from "materialize-css";

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (url) {
      fetch("/createpost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          title,
          body,
          pic: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            M.toast({ html: data.error, classes: "waring-toast" });
          } else {
            M.toast({ html: "Posted successfully", classes: "success-toast" });
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [url]);

  const postDetails = () => {
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
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mycard">
      <div className="createpost-card">
        <div className="card auth-card">
          <h4 className="cardheader-createpost">Create Post</h4>
          <div className="createpostcard-inputs">
            <input
              className="createpost-input"
              type="text"
              placeholder="Post Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="createpost-input"
              type="text"
              placeholder="Post Description"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />

            <div className="file-field input-field fileupload-section">
              <div className="btn file-input-btn">
                <span>Upload Image</span>
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
              </div>
            </div>

            <button
              className="btn primary-button"
              onClick={() => postDetails()}
            >
              Submit Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
