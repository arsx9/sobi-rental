import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import type { Hotel } from '../types/Hotel';
import Spinner from '../components/Spinner';

function HotelDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [hotel, setHotel] = useState<Hotel | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch one user from JSON file based on id param
    const fetchHotelById = async (hotelId: number) => {
        try {
        const res = await fetch('/data/hotels.json');
        if (!res.ok) {
            throw new Error('Failed to load user data');
        }
        const hotels: Hotel[] = await res.json();
        const foundHotel = hotels.find((hotel) => hotel.id === hotelId);
        if (!foundHotel) {
            throw new Error('Hotel not found');
        }
        setHotel(foundHotel);
        } catch (err: any) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (id) {
            const hotelId = parseInt(id);
            if (!isNaN(hotelId)) {
                fetchHotelById(hotelId);
            } else {
                setError('Invalid user ID');
                setLoading(false);
            }
        }
    }, [id]);
    if (loading) return <Spinner/>;
    if (error) return <p>Error: {error}</p>;
    if (!hotel) return <p>No user data available.</p>;
    return (
        <>
            <ImageGallery images={hotel.imageList} videoThumbnail={hotel.videoThumbnailUrl} videoUrl={hotel.videoUrl}/>
        </>
    );
}

export default HotelDetailPage;