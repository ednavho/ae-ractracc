import '../styles/Login.css';

import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import TitleImg from '../media/logintitle.png';


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
            const loginResponse = await axios.post('https://racctracc.herokuapp.com/api/users/login', {email, password});
            localStorage.setItem('jwt_token', loginResponse.data.token);
            setLoggingIn(false);
            navigate('/userprofile');

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


// # 545050 # D9D9D9 # 5DA3D3 # 9A8F8F

    return (
        <div className="bg-container-log">
            <div className='login-container-log'>
                <img src={TitleImg} alt="Welcom Tracker" />

                <div className="input-field-log">
                    <input placeholder='Email' type="text" id="email" value={email}
                        onChange={(event) => setEmail(event.target.value)}></input>
                </div>

                <div className="input-field-log">
                    <input placeholder='Password' type="password" id="password" value={password}
                        onChange={(event) => setPassword(event.target.value)}></input>
                </div>

                <div className='options-log'>
                    <div className="footer-log" onClick={() => navigate('/register')}>Don't have an account?</div>
                    <div className="footer-log" onClick={() => navigate('/login')}>Forgot Password?</div>
                </div>

                <button className="btn-log" type="submit" onClick={handleLogin}>Login</button>


            </div>
        </div>
    )
}