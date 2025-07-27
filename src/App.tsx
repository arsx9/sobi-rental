import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import About from './pages/about';
import ContactUs from './pages/contactus';

function App(){
  return(
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactUs' element={<ContactUs />} />
      </Routes>
    </main>
  );
}
export default App;
