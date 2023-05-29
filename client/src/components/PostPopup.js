import '../styles/PostPopup.css';
import exitImg from '../media/exit.png';

const PostPopup = ({ post, onClose }) => {
  return (
    <div className='popup-cont'> 
      <div className='popup-bg'>
      </div>

      <div className="post-popup">

        <div className='popup-card'>
          <div className='location'>{post.location}</div>
          
          <div className='image-container'>
            <img src={'https://racctracc.herokuapp.com/images/' + post.imagepath} alt="Post" />
          </div>

          <div className='caption'>{post.caption}</div>
        </div>

        <div className="close-icon" onClick={onClose}><img src={exitImg} alt="X" onClick={onClose}/></div>
      
      </div>
    </div>
    );
  };
  
export default PostPopup;