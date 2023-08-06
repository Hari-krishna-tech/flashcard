import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./Signup.css";
import {createUser} from './api/createUser'
import Cookies from 'js-cookie'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        try {
          const response = await createUser(email, password);
          if(!response.token) {
            throw new Error('Create user failed');
          }
          Cookies.set('token', response.token, { expires: 1 });
          navigate('/');
        } catch (error) {
            console.error(error);
        }
        
    }
    
    return (
        <div className='signup-containter'>
      <h2 className='signup-heading'>Signup</h2>
      <form className='signup-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email' className='form-label'>Email:</label>
          <input type="email" id='email' className='form-input' value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </div>
        <div className='form-group'>
          <label htmlFor='password' className='form-label'>Password:</label>
          <input type="password" id="password" className='form-input' value={password} onChange={(e)=>setPassword(e.target.value)} required />
        </div>
        <div>
          <button className='signup-button' type="submit">Sign Up</button>
          <button className='login-button-real' onClick={()=>navigate('/login')}>Login</button>
        </div>
      </form>
    </div>
    )

}