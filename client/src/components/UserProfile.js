
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const PostDetails = ({ post, onClose }) => {
    return (
        <div className="post-details">
            <div className="post-image-container">
                <img src={post.image} alt={post.caption} className="post-image"/>
                <button className="close-button" onClick={onClose}>X</button>
            </div>
            <div className="post-info">
                <div className="post-header">
                    <img src={post.user.profilePicture} alt={post.user.name} className="profile-picture"/>
                    <div className="post-user-info">
                        <div className="post-user-name">{post.user.name}</div>
                        <div className="post-location">{post.location}</div>
                    </div>
                </div>
                <div className="post-caption">{post.caption}</div>
                <div className="post-time">{post.time}</div>
            </div>
        </div>
    );
};

export default function UserProfile() {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:9000/api/users/${userId}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }, [userId]);

    useEffect(() => {
        fetch(`http://localhost:9000/api/users/${userId}/posts`)
            .then(response => response.json())
            .then(data => setPosts(data));
    }, [userId]);

    if (!user) {
        return <div> Loading ...</div>;
    }

    const handlePostClick = (post) => {
        setSelectedPost(post);
    }

    const handleClosePostDetails = () => {
        setSelectedPost(null);
    }

    return (
        <div className="user-profile">
            <div className="profile-header">
                <div className="profile-picture-container">
                    <img src={user.profilePicture} alt={user.name} className="profile-picture"/>
                </div>

                <div className="profile-info">
                    <div className="profile-stats">
                        <strong>{user.postCount}</strong>
                    </div>
                </div>
            </div>

            <div className="post-grid">
                {posts.map(post => (
                    <div key={post.id} className="post" onClick={() => handlePostClick(post)}>
                        <img src={post.image} alt={post.caption} />
                    </div>
                ))}
            </div>
            {selectedPost && <PostDetails post={selectedPost} onClose={handleClosePostDetails} />}
        </div>

        
    )
}

