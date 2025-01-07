import './WipPage.css';
import { Link } from 'react-router';
import PageProps from '@/models/PageProps';

function WipPage({pageProps} : {pageProps: PageProps}) {

    pageProps.setTitle("WIP");

    return (
      <div>
        <h1>Hi!</h1>
        <p>
          We're still working on this page. <br/>
          Why don't you play some games while you wait?
        </p>
        <ul>
          <li>
            <Link to="/games/tictactoe">Tic-Tac-Toe</Link>
          </li>
        </ul>
      </div>
    );
  }
    
export default WipPage;