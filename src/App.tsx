import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import HotelDetailPage from './pages/HotelDetailPage';
function App(){
  return(
    <div className='app-container font-[Poppins] bg-gradient-to-t from-[#fff] to-[#fbeff0]'>
      <Header/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path="/hotel/:id" element={<HotelDetailPage />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}
export default App;
