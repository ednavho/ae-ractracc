import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import '../styles/Verify.css';

export default function Verify() {
  const navigate = useNavigate();
  const params = useParams();
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const validateUser = async () => {
      try {
        console.log(params);
        const validate = await axios.post('http://localhost:9000/api/users/verify', { id: params.id, token: params.token });
        setVerified(true);
      } catch (err) {
        alert('Invalid link, navigating to login page.');
        console.log(err);
        navigate('/');
      }
    }
    validateUser();
  }, [navigate]);

  if (!verified) {
    return(
      <div>
        <div>
          Loading...
        </div>
      </div>
    )
  }

  return (
    <div>
      <div >
        <div>
          <h1>You have successfully verified your email! Click below to return to the login screen:</h1>
        </div>
        <h3 onClick={() => navigate('/')}>Return to login page</h3>
      </div>
    </div>
  )
}
