import '../styles/Login.css';

import { useState } from 'react';
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
                <h1>Welcome, Tracker</h1>

                <div className="input-field-log">
                    {/* <h3 className="field-label-log">Email</h3> */}
                    <input placeholder='Email' type="text" id="email" className="form-field-log" value={email}
                        onChange={(event) => setEmail(event.target.value)}></input>
                </div>

                <div className="input-field-log">
                    {/* <h3 className="field-label-log">Password</h3> */}
                    <input placeholder='Password' type="password" id="password" className="form-field-log" value={password}
                        onChange={(event) => setPassword(event.target.value)}></input>
                </div>

                <button className="btn-log" type="submit" onClick={handleLogin}>Login</button>

                <h3 className="footer-log" onClick={() => navigate('/register')}>Don't have an account?</h3>

            </div>
        </div>
    )
}