import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router';
import PageProps from '@/models/PageProps';

function App({pageProps} : {pageProps: PageProps}) {

  useEffect(() => {
    document.title = "JudgyKnowitall";
  }, []);

  const [menuExpanded, setMenuExpanded] = useState(false);
  function handleCollapseMenu() {
    setMenuExpanded(false);
  }

  return (
    <div className='app'>
      <Header 
        title={pageProps.title} 
        menuExpanded={menuExpanded} 
        onMenuExpanded={setMenuExpanded}
      />
        <div className='app-body' onClick={handleCollapseMenu}>
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
