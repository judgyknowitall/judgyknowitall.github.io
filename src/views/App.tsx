import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router';

function App() {

  useEffect(() => {
    document.title = "JudgyKnowitall";
  }, []);

  return (
    <div className="App">
      <Header/>
      <div className='App-body'>
        <div className='body-margin'/>
        <div className='body-main'>
          <Outlet />
        </div>
        <div className='body-margin'/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
