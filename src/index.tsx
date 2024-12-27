import ReactDOM from 'react-dom/client';
import './index.css';
import App from './views/App';
import { BrowserRouter, Route, Routes } from "react-router";
import reportWebVitals from './reportWebVitals';
import WelcomePage from './views/pages/WelcomePage';
import NotFoundPage from './views/pages/NotFoundPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <App/> }>
        <Route index element={ <WelcomePage/> }/>
        <Route path="welcome" element={ <WelcomePage/> }/>

        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
