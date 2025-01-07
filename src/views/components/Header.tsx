import { Link } from 'react-router';
import './Header.css'
import logo from '@/assets/react-logo.svg';

function Header({title}: {title: string}) {
    return (
      <div className="Header">
        <Link to="/">
          <div className="menu-circle">
              <img src={logo} className="menu-logo" alt="logo" />
          </div>
        </Link>
        <div className="title">
            {title}
        </div>
        <div className="spacer"/>
      </div>
    );
  }
    
  export default Header;