import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


export default function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registering, setRegistering] = useState(false);


    const handleRegister = async (event) => {
        event.preventDefault();
        if (!name || !email || !password) {
            return;
        }
        setRegistering(true);

        const emailRegex = /\S+@\S+\.\S+/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{8,}$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            setRegistering(false);
            return;
        }
        if (!passwordRegex.test(password)) {
            alert('Please enter a password that is at least 8 characters long, containing at least one uppercase letter, lowercase letter, digit. and special symbol.');
            setRegistering(false);
            return;
        }

        console.log(`Registering user with name: ${name}, with email: ${email} and password: ${password}`);

        try {
            const registerResponse = await axios.post("https://localhost:9000/api/users/register", {name, email, password});
            alert('User created! Check your email for an email verification link to activate your account.');
            setRegistering(false);
            console.log(registerResponse);
        } catch (err) {
            alert('User with this email already exists. Please enter another email to create an account.');
            setRegistering(false);
            console.log(err);
        }

    }

    


    return (
        <div>
            <h1>Register</h1>
            
            <div>
                <h3>Name</h3>
                <input type="text" id="name" className="form-field" value={name} onChange={(event) => setName(event.target.value)}></input>
            </div>

            <div>
                <h3>Email</h3>
                <input type="text" id="email" className="form-field" value={email} onChange={(event) => setEmail(event.target.value)}></input>
            </div>

            <div>
                <h3>Password</h3>
                <input type="text" id="password" className="form-field" value={password} onChange={(event) => setPassword(event.target.value)}></input>
            </div>

            <button className="btn" type="submit" onClick={handleRegister}>Register</button>
            <h3 className="footer" onClick={() => navigate('/')}>Login with existing account</h3>

        </div>
    )
};