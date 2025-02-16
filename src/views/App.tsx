import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router';
import PageProps from '@/models/PageProps';
import useIsScreenPortrait from '@/util/ScreenUtil';

function LandscapeMode() {
  return (
    <>
      <div className='body-margin'/>
      <div className='body-main'>
        <Outlet />
      </div>
      <div className='body-margin'/>
    </>
  );
}

function PortraitMode() {
  return (
    <>
      <div className='body-margin portrait'/>
      <div className='body-main portrait'>
        <Outlet />
      </div>
      <div className='body-margin portrait'/>
    </>
  );
}

function App({pageProps} : {pageProps: PageProps}) {

  useEffect(() => {
    document.title = "JudgyKnowitall";
  }, []);

  const isPortrait = useIsScreenPortrait();

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
        { isPortrait ? <PortraitMode/> : <LandscapeMode/> }
      </div>
      <Footer/>
    </div>
  );
}

export default App;
