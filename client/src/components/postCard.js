import { useEffect } from 'react';
import '../styles/PostCard.css';
import axios from 'axios';
import { useState } from 'react';

const PostCard = ({ post }) => {

   const [username, setUsername] = useState('User');


   useEffect(() => {
      const getUser = async () => {
         await axios.get(`https://racctracc.herokuapp.com/api/users/getUsername/${post.userId}`)
            .then((response) => {
               setUsername(response.data.username);
            })
            .catch((error) => {
               console.error(error);
            });
      }
      getUser();
   }, [post.userId]);

   return (
      <div className="post-card">

         <div className='post-top'>
            <div className='user'>{username}</div>
            <div className='location'>{post.location}</div>
         </div>

         <img src={'https://racctracc.herokuapp.com/images/' + post.imagepath} alt='img' />

         <div className='caption'>{ post.caption }</div>
      </div>
   );
};
export default PostCard;
