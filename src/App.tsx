import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import About from './pages/About';
import ContactUs from './pages/ContactUs';
function App(){
  return(
    <div className='app-container'>
      <Header/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactUs' element={<ContactUs />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}
export default App;
