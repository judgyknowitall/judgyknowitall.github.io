import { Link, NavLink } from 'react-router';
import './Header.css'
import logo from '@/assets/react-logo.svg';

function Header() {
    return (
      <div className="Header">
        <Link to="/">
          <div className="menu-circle">
              <img src={logo} className="menu-logo" alt="logo" />
          </div>
        </Link>
        <div className="title">
            Home
        </div>
        <div className="spacer"/>
      </div>
    );
  }
    
  export default Header;