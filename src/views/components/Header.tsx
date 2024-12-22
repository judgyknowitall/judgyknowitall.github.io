import './Header.css'
import logo from '@/assets/react-logo.svg';

function Header() {
    return (
      <div className="Header">
        <div className="menu-circle">
            <img src={logo} className="menu-logo" alt="logo" />
        </div>
        <div className="title">
            Home
        </div>
      </div>
    );
  }
    
  export default Header;