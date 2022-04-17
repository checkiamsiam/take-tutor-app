import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Checkout from './components/Checkout/Checkout';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import ProtectedPage from './components/ProtectPage/ProtectedPage';
import Review from './components/Review/Review';
import Services from './components/Services/Services';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={[
          <Banner></Banner>,
          <Services></Services>,
          <Review></Review>
        ]}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/services/:servicesId' element={<ProtectedPage>
          <Checkout></Checkout>
        </ProtectedPage>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
