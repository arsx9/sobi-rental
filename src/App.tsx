import './App.css'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Listing from './components/Listing';
function App(){
  return(
    <div>
      <Header/>
      <HeroSection/>
      <SearchBar/>
      <Listing/>
      <Footer/>
    </div>
  );
}
export default App;
