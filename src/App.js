import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import CoinDetails from './components/CoinDetails/CoinDetails';
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div>

                  {/* 1.30 mimins */}


      <Header></Header>
      <div className='bg-gray-100'>
      <Routes>
       <Route path='/' element= {<Homepage></Homepage>}> </Route>
       <Route path='/coins' element={<Coins></Coins>}></Route>
       <Route path='/coin-details/:id' element={<CoinDetails></CoinDetails>}></Route>
       <Route path='/contact' element={<Contact></Contact>}> </Route>
       <Route path='/about' element={<About></About>}> </Route>
      
     </Routes>
      <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
