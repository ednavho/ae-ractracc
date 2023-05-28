import Menu from './Menu';
import Webcam from 'react-webcam';

import '../styles/Post.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  
  const navigate = useNavigate();

  const [id, setId] = useState(null);
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem('jwt_token');
    if (token) {
      const fetchData = async () => {
        try {
          const fetchUser = await axios.get('http://localhost:9000/api/users/whoami', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`
            }
          });
          setId(fetchUser.data._id);
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
  }, [navigate]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleLocationChange = (e) => {
    
    setLocation(e.target.value);
  };
  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('userId', id);
    formData.append('imagepath', image['name']);
    formData.append('caption', caption);
    formData.append('location', location);
    formData.append('image', image);
      
        
    axios.post('http://localhost:9000/api/uploads/createUpload', formData)
      .then((response) => {
        console.log(response.data); // Image uploaded successfully
        // Handle any additional logic or UI updates
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  const webRef = useRef(null);
  const videoConstraints = {
      facingMode: {exact:"enviroment"}
  };
  
  const showImage = () => {
    setImage(webRef.current.getScreenshot());
    console.log(webRef.current.getScreenshot());
  };

  return (
    <div className='upload-cont'>
      Post
      <div className="camera">
          React Webcam
          <Webcam ref={webRef} screenshotQuality={0.8} screenshotFormat="image/jpeg" videoConstraints={videoConstraints}/>
          <button onClick={showImage}>Show Image</button>
          <br />
          <img src={image} />
      </div>
      <form className='upload-form' onSubmit={handleFormSubmit}>
        <input type="file" onChange={handleImageChange} />
        <input placeholder='location' type='text' onChange={handleLocationChange} />
        <input placeholder='caption' type='text' onChange={handleCaptionChange}/>
        <button type="submit">Upload Image</button>
      </form>

      <Menu/>
    </div>
  );
}

export default Home