import { Link } from 'react-router';
import './Header.css'
import logo from '@/assets/react-logo.svg';

// Menu Item Component
function MenuItem({ link, title, index }: MenuItemProps) {
  // Set a custom property for the index
  return (
    <Link to={link}>
      <div
        className="menu-item"
        style={{ '--menu-item-index': index } as React.CSSProperties}
      >
        {title}
      </div>
    </Link>
  );
}

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
      </div>

      <div className={'menu' + (menuExpanded ? ' expand' : '')}>
          <div 
            className='menu-circle menu-item first'
            onClick={handleExpandMenu}
          />
          <MenuItem link="/" title="Home" index={0} />
          <MenuItem link="/games/tictactoe" title="TicTacToe" index={1} />
          <MenuItem link="/uxdesign/familyscheduler" title="Family Scheduler" index={2} />
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

interface MenuItemProps {
  title: string,
  link: string,
  index: number
}

export default Header;