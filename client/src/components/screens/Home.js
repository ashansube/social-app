import React from "react";
import { AiOutlineHeart } from 'react-icons/ai';

const Home = () => {
    return (
      <div className="home container">
        <div className="row">
          {/* <div className="col s3"></div> */}
          <div className="col s9">
            <div className="card home-card">
              <h5 className="home-card-username">ashan_sube</h5>
              <div className="card-image">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="post-img"/>
              </div>
              <div className="card-content">
              <AiOutlineHeart className="heart-icon" />
                <div className="row">
                    <h6 className="col m9">Title</h6>
                    <h6 className="col m3 card-post-date">2 Days</h6>
                </div>
                <p>This is amazing post</p>
                <input type="text" placeholder="add a comment" />
              </div>
            </div>
            <div className="card home-card">
              <h5 className="home-card-username">ashan_sube</h5>
              <div className="card-image">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="post-img"/>
              </div>
              <div className="card-content">
              <AiOutlineHeart className="heart-icon" />
                <div className="row">
                    <h6 className="col m9">Title</h6>
                    <h6 className="col m3 card-post-date">2 Days</h6>
                </div>
                <p>This is amazing post</p>
                <input type="text" placeholder="add a comment" />
              </div>
            </div>
            <div className="card home-card">
              <h5 className="home-card-username">ashan_sube</h5>
              <div className="card-image">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="post-img"/>
              </div>
              <div className="card-content">
              <AiOutlineHeart className="heart-icon" />
                <div className="row">
                    <h6 className="col m9">Title</h6>
                    <h6 className="col m3 card-post-date">2 Days</h6>
                </div>
                <p>This is amazing post</p>
                <input type="text" placeholder="add a comment" />
              </div>
            </div>
          </div>
          <div className="col s3">
            <div className="card home-profile-card">
                <div>
                    <img className="home-profile-image" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpYyUyMDElM0ExfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="gallery-img"/>
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
