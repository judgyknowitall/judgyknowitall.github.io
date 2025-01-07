import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router';
import PageProps from '@/models/PageProps';

function App({pageProps} : {pageProps: PageProps}) {

  useEffect(() => {
    document.title = "JudgyKnowitall";
  }, []);

  return (
    <div className="app">
      <Header title={pageProps.title}/>
      <div className='app-body'>
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
