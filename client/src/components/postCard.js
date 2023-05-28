import '../styles/PostCard.css';

const PostCard = ({ post }) => {
   return (
      <div className="post-card">
         <div className='post-top'>
            <div className='user'>{post._id}</div>
            <div className='location'>{post.location}</div>
         </div>

         <img src={'http://localhost:9000/images/' + post.imagepath} alt='temp user' />
         <div className='caption'>{ post.caption }</div>
      </div>
   );
};
export default PostCard;
