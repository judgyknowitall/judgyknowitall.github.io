import ReactDOM from 'react-dom/client';
import './index.css';
import App from './views/App';
import { BrowserRouter, Route, Routes } from "react-router";
import reportWebVitals from './reportWebVitals';
import WipPage from './views/pages/WipPage';
import NotFoundPage from './views/pages/NotFoundPage';
import FamilySchedulerPage from './views/pages/uxdesign/FamilySchedulerPage';
import TicTacToePage from './views/pages/games/TicTacToePage';
import { InitPageProps } from './models/PageProps';

function Router() {
  const pageProps = InitPageProps();

  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App pageProps={pageProps}/> }>
          <Route index element={ <WipPage pageProps={pageProps}/> }/>
          <Route path="welcome" element={ <WipPage pageProps={pageProps}/> }/>

          <Route path="uxdesign">
            <Route index element={ <WipPage pageProps={pageProps}/> }/>
            <Route path="familyscheduler" element={ <FamilySchedulerPage pageProps={pageProps}/> }/>
          </Route>

          <Route path="games">
            <Route index element={ <WipPage pageProps={pageProps}/> }/>
            <Route path="tictactoe" element={ <TicTacToePage pageProps={pageProps}/> }/>
          </Route>

          <Route path="*" element={<NotFoundPage pageProps={pageProps}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Router/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
