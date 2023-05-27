import '../styles/UserProfile.css';
import Menu from './Menu';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function UserProfile() {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    const getUserPosts = () => {
        axios.get('http://localhost:9000/api/uploads/getUploads', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`
            }
        })
        .then((response) => {
            console.log(response.data); // Image uploaded successfully
            setPosts(response.data);
            console.log(posts);
            // Handle any additional logic or UI updates
        })
        .catch((error) => {
            console.error(error);
            // Handle error
        });
    }

    const loadContent = () => {
        const token = localStorage.getItem('jwt_token');
        if (token) {
          const fetchData = async () => {
            try {
                const fetchUser = await axios.get('http://localhost:9000/api/users/whoami', {
                    headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`
                    }
                });
                setUser(fetchUser.data);
                getUserPosts();
            } catch (err) {
              localStorage.removeItem('jwt_token');
              alert('Invalid session, navigating to login page.');
              console.log(err);
              navigate('/');
            }
          }
          fetchData();
        }
        else {
          navigate('/');
        }
    }

    useEffect(loadContent, [navigate]);

    
    

    return (
        <div className='profile'>
            <div className='username'>
                {user ? user.name : 'loading name...'}
            </div>
            <div className='post-count'>
                <div>{posts ? posts.length : 'loading post count...'}</div>
                <div>Posts</div>
                
            </div>
            <div className='post-sect'>
                
                {posts.map((post) => {
                    return (
                        <div className='post-block'>
                            < img src={'http://localhost:9000/images/' + post.imagepath} />
                        </div>
                    )
                }
                )}
            </div>
            

            <Menu/>
        
        
        </div>
    );
};

export default UserProfile;

