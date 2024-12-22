import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='App-body'>
        <div className='body-margin'/>
        <div className='body-main'>
          Still a work in progress!
        </div>
        <div className='body-margin'/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
