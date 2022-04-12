import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import CoinDetails from './components/CoinDetails/CoinDetails';
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import BdAddress from './components/Contact/BdAddress';
import UsAddress from './components/Contact/UsAddress';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import SingUp from './components/SingUp/SingUp';
function App() {
  return (
    <div>

      <Header></Header>
      <div className='bg-gray-100'>
      <Routes>
       <Route path='/' element= {<Homepage></Homepage>}> </Route>
       <Route path='/coins' element={<Coins></Coins>}></Route>
       <Route path='/coin-details/:id' element={<CoinDetails></CoinDetails>}></Route>
       <Route path='/contact' element={<Contact></Contact>}> 
        <Route path='bd-address' element={<BdAddress></BdAddress>}></Route>
        <Route path='us-address' element={<UsAddress></UsAddress>}></Route>
       </Route>
       <Route path='/about' element={<About></About>}> </Route>
       <Route path='/login' element={<Login></Login>}> </Route>
       <Route path='/singup' element={<SingUp></SingUp>}> </Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
      
     </Routes>
      <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
