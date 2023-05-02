import '../styles/Login.css';

import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggingIn, setLoggingIn] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        if (!email || !password) {
            return;
        }
        console.log(`Logging in with email: ${email} and password: ${password}`);
        setLoggingIn(true);

        try {
            const loginResponse = await axios.post('https://localhost:9000/api/users/login', {email, password});
            localStorage.setItem('jwt_token', loginResponse.data.token);
            setLoggingIn(false);
            navigate('/home');
        } catch (err) {
            if (err.response.status === 403) {
                alert('User has not verified their email. Please check your email to complete verification.');
            }
            else if (err.response.status === 404) {
                alert('Login failed. Please double check your email and password.');
            }
            setLoggingIn(false);
            console.log(err);
        }
    }




    return (
        <div className='login-cont'>
            <h1>Login</h1>

            <div>
                <h3>Email</h3>
                <input type="text" id="email" className="form-field" value={email}
                    onChange={(event) => setEmail(event.target.value)}></input>
            </div>

            <div>
                <h3>Password</h3>
                <input type="text" id="password" className="form-field" value={password}
                    onChange={(event) => setPassword(event.target.value)}></input>
            </div>

            <button className="btn" type="submit" onClick={handleLogin}>Login</button>

            <h3 className="footer" onClick={() => navigate('/register')}>Don't have an account?</h3>

        </div>
    )
}