import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import WatchHistory from './pages/WatchHistory';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/WatchHistory' element={<WatchHistory/>} />
      
      
      
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
