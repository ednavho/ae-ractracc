const PostPopup = ({ post, onClose }) => {
    return (
      <div className="post-popup">
        <div className="post-popup-content">
          <img src={'http://localhost:9000/images/' + post.imagepath} alt="Post" />
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };

  export default PostPopup;