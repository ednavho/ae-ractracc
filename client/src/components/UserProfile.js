import '../styles/UserProfile.css';
import Menu from './Menu';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import PostPopup from './PostPopup'


function UserProfile() {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);



    useEffect(() => {
        const getUser = async () => {
            const token = localStorage.getItem('jwt_token');
            if (token) {
                try {
                    const fetchUser = await axios.get('https://racctracc.herokuapp.com/api/users/whoami', {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`
                        }
                    });
                    setUser(fetchUser.data);
                    await axios.get('https://racctracc.herokuapp.com/api/uploads/getUploads', {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`
                        }
                    })
                    .then((response) => {
                        setPosts(response.data);
                        // Handle any additional logic or UI updates
                    })
                    .catch((error) => {
                        console.error(error);
                        // Handle error
                    });
                } catch (err) {
                    localStorage.removeItem('jwt_token');
                    alert('Invalid session, navigating to login page.');
                    console.log(err);
                    navigate('/');
                }
            }
            else {
                navigate('/');
            }
            
        }
        getUser();
    }, [navigate]);

    const [selectedPost, setSelectedPost] = useState(null);

    const openPostPopup = (post) => {
        setSelectedPost(post);
      };
    
      const closePostPopup = () => {
        setSelectedPost(null);
      };
    
    

    return (
        <div className='profile-cont'>
            <div className='profile'>
                <div className='info'>
                    <div className='name'>
                        {user ? user.name : 'loading name...'}
                    </div>
                    <div className='username'>
                        {false ? user.username : 'username'}
                    </div>
                    <div className='post-count'>
                        <div>{posts ? posts.length : 'loading post count...'} Sightings</div>
                        
                    </div>
                </div>
                
                <div className='post-sect'>    
                    {posts.map((post) => (
                        <div className="post-block" key={post.id}>
                            <img
                            src={'https://racctracc.herokuapp.com/images/' + post.imagepath}
                            alt="Post"
                            onClick={() => openPostPopup(post)} // Add click event to open the post pop-up
                            />
                        </div>
                    ))}
                </div>
                {selectedPost && (
                    <PostPopup post={selectedPost} onClose={closePostPopup} />
                )}
            </div>
            
            <Menu/>
        </div>
    );
};

export default UserProfile;

