import { useParams } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';

function HotelDetailPage() {
    const { id } = useParams(); // this will fetch the id from URL
    console.log(`Hotel ID: ${id}`); // You can use this ID to fetch hotel details if needed
    const hotel = {
        id: 1,
        name: "Serena Hotel",
        imageUrl: "/assets/images/properties/img1.png",
        tagValue: "Top Rated",
        rating: 4.8,
        stayDays: 3,
        stayPrice: 450,
        gallery: [
            "/assets/images/properties/img1.png",
            "/assets/images/properties/img2.png",
            "/assets/images/properties/img3.png",
        ],
    }
    return (
        <>
            <ImageGallery images={hotel.gallery}/>
        </>
    );
}

export default HotelDetailPage;