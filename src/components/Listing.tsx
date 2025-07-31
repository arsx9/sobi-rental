import { useEffect, useState } from 'react';

import type { Hotel } from '../types/Hotel';
import { HotelCard } from './HotelCard';
import Spinner from './Spinner';

function Listing() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const fetchHotels = async () => {
    try {
      const response = await fetch('/data/hotels.json');
      if (!response.ok) {
          throw new Error('Failed to load users');
      }
      const data: Hotel[] = await response.json();
      setHotels(data);
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchHotels();
  }, []);

  if (loading) return <Spinner/>;
  if (error) return <p>Error: {error}</p>;
  return (
    <section className="text-black flex justify-center items-center text-center pb-10 md:pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center px-10">
        {hotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </section>
  );
}

export default Listing;
