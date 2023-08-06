import "./Header.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Cookies from 'js-cookie';

export default function Header() {
    const navigate = useNavigate();
    const handleLogout = () => {
        Cookies.remove('token');
        navigate('/login');
    }
    return (
        <>
           <div className="Header">
      <div className="container">
        <div>
          <Link to="/">FlashCard</Link>
        </div>

        <div>
          <Link to="/">Decks</Link>
        </div>

        <div>
          <button onClick={handleLogout}>logout</button>
        </div>
      </div>
    </div>
        </>
    )   
        
    }