import {useState} from 'react';
import "./Login.css"
import {login} from './api/login'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("login page")
    try {
        const token = await login(email, password);
        console.log("hello world " ,token);
        if(!token.token) {
            throw new Error('Login failed');
        }
        await Cookies.set('token', token.token, { expires: 1 });

        navigate('/');
        

    } catch (error) {
      console.error(error);
      navigate('/login');
    }
  };

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );

}

export default Login;