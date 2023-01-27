import React, { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import moment from "moment";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/allpost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        setData(result.posts);
      });
  }, []);

  return (
    <div className="home container">
      <div className="row">
        {/* <div className="col s3"></div> */}
        <div className="col s9">
          {data.map((item) => {
            return (
              <div className="card home-card" key={item._id}>
                <h5 className="home-card-username">{item.postedBy.username}</h5>
                <div className="card-image">
                  <img
                    src={item.photo}
                    alt="post-img"
                  />
                </div>
                <div className="card-content">
                  <AiOutlineHeart className="heart-icon" />
                  <div className="row">
                    <h6 className="col m9">{item.title}</h6>
                    <h6 className="col m3 card-post-date">{moment(item.created).format("MMMM D, YYYY")}</h6>
                  </div>
                  <p>{item.body}</p>
                  <input type="text" placeholder="add a comment" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="col s3">
          <div className="card home-profile-card">
            <div>
              <img
                className="home-profile-image"
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpYyUyMDElM0ExfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="gallery-img"
              />
            </div>
            <div>
              <p>Ashan Subawickrama</p>
              <p>ashan_sube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
