import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import moment from "moment";

const Home = () => {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(UserContext);
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

  const likePost = (id) => {
    fetch("/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unlikePost = (id) => {
    fetch("/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const makeComment = (text, postId) => {
    fetch("/comment", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId,
        text,
      }),            
    }).then(res=>res.json())
    .then(result=>{
      console.log(result)
      const newData = data.map((item) => {
        if (item._id === result._id) {
          return result;
        } else {
          return item;
        }
      })
      setData(newData)
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <div className="home container">
      <div className="row">
        {/* <div className="col s3"></div> */}
        <div className="col s9">
          {data.map((item) => {
            return (
              <div className="card home-card" key={item._id}>
                <h5 className="home-card-username"><Link to={item.postedBy._id !== state._id?"/profile/" + item.postedBy._id : "/profile/"}>{item.postedBy.username}</Link></h5>
                <div className="card-image">
                  <img src={item.photo} alt="post-img" />
                </div>
                <div className="card-content">
                  {item.likes.includes(state._id)
                  ? 
                  <AiFillHeart
                  className="heart-icon-red"
                  onClick={() => {
                  unlikePost(item._id);
                  }}/>
                  :
                  <AiOutlineHeart
                  className="heart-icon"
                  onClick={() => {
                    likePost(item._id);
                  }}
                  />
                  }

                  <h6>{item.likes.length} Likes</h6>
                  <div className="row">
                    <h6 className="col m9">{item.title}</h6>
                    <h6 className="col m3 card-post-date">
                      {moment(item.created).format("MMMM D, YYYY")}
                    </h6>
                  </div>
                  <p className="post-desc">{item.body}</p>
                  {
                    item.comments.map(record=>{
                      return (
                        <p key={record._id}><span className="comment-owner">{record.postedBy.name}</span> {record.text}</p>
                      )
                    })
                  }
                  <form onSubmit={(e)=> {
                    e.preventDefault()
                    makeComment(e.target[0].value, item._id)
                  }}>
                    <input type="text" placeholder="add a comment" />
                  </form>
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
                src={state ? state.pic : "loading"}
                alt="gallery-img"
              />
            </div>
            <div>
              <p>{state ? state.name : "loading"}</p>
              <Link to="/profile">{state ? state.username : "loading"}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
