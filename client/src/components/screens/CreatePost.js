import React from "react";

const CreatePost = () => {
    return (
        <div className="mycard">
        <div className="createpost-card">
        <div className="card auth-card">
            <h4 className="cardheader-createpost">Create Post</h4>
            <div className="createpostcard-inputs">
            <input className="createpost-input" type="text" placeholder="Post Title" />
            <input className="createpost-input" type="text" placeholder="Post Description" />
            
            <div className="file-field input-field fileupload-section">
                <div className="btn file-input-btn">
                    <span>Upload Image</span>
                    <input type="file" />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            
            <button className="btn primary-button">
            Submit Post
            </button>
            </div>
        </div>
        </div>
        </div>
    )
};

export default CreatePost;
