import {MouseEventHandler, useState} from 'react';
import "./Login.css"
import {login} from './api/login'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // const handleSignup = (event: MouseEventHandler<HTMLButtonElement>) => {
    
  //   navigate('/signup');
 
  // }
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //console.log("login page")
    console.log(email, password)
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
    return null;
  };

  return (
    <div className='signup-containter'>
      <h2 className='signup-heading'>Login</h2>
      <form className='signup-form' onSubmit={handleLogin}>
        <div className='form-group'>
          <label htmlFor='email' className='form-label'>Email:</label>
          <input type="email" id='email' className='form-input' value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </div>
        <div className='form-group'>
          <label htmlFor='password' className='form-label'>Password:</label>
          <input type="password" id="password" className='form-input' value={password} onChange={(e)=>setPassword(e.target.value)} required />
        </div>
        <div>
          <button className='signup-button' type="submit" >Login</button>
          <button className='signup-button-real' onClick={()=>navigate('/signup')}>Signup</button>

        </div>
      </form>
    </div>
  );

}

export default Login;