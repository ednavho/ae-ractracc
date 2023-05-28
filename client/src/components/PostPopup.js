import '../styles/PostPopup.css';

const PostPopup = ({ post, onClose }) => {
  return (
    <div className='popup-cont'> 
      <div className='popup-bg'>
      </div>
      <div className="post-popup">
        <div className="post-popup-content">
          <div className="image-container">
            <img src={'http://localhost:9000/images/' + post.imagepath} alt="Post" />
          </div>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      </div>
      
    </div>
    );
  };
  
  export default PostPopup;