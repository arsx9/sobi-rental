import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import Listing from '../components/Listing';
import ListingHeader from '../components/ListingHeader';
function Home(){
    return (
        <>
            <HeroSection/>
            <SearchBar/>
            <ListingHeader/>
            <Listing/>
        </>
    );
}
export default Home;