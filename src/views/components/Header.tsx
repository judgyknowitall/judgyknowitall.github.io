import { Link } from 'react-router';
import './Header.css'
import logo from '@/assets/react-logo.svg';

// Renders the App header
function Header({title, menuExpanded, onMenuExpanded}: HeaderProps) {

  function handleExpandMenu() {
    onMenuExpanded(true);
  }
  function handleCollapseMenu() {
    onMenuExpanded(false);
  }

  return (
    <div>
      <div className="Header" onClick={handleCollapseMenu}>
        <div className="menu-circle">
          <img src={logo} className="menu-logo" alt="logo" />
        </div>
        <div className="title">
          {title}
        </div>
        <div id='headerSpacer' className="spacer"/>
      </div>

      <div className={'menu' + (menuExpanded ? ' expand' : '')}>
          <div 
            className='menu-circle menu-item first' 
            onClick={handleExpandMenu}
          />
          <Link to="/">
            <div className='menu-item'>Home</div>
          </Link>
          <Link to="/games/tictactoe">
            <div className='menu-item'>TicTacToe</div>
          </Link>
          <Link to="/uxdesign/familyscheduler">
            <div className='menu-item'> Family Scheduler</div>
          </Link>
      </div>
    </div>
  );
}

// Page Props
interface HeaderProps {
  title: string, 
  menuExpanded: boolean,
  onMenuExpanded: (menuExpanded: boolean) => void
}

export default Header;