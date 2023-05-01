


export default function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registering, setRegistering] = useState(false);

    
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
            <input type="text" id="password" className="form-field" value={email} onChange={(event) => setPassword(event.target.value)}></input>
        </div>

        <button className="btn" type="submit" onClick={handleRegister}>Register</button>

    </div>
)