import { Star, Flame } from 'lucide-react';
import hotelImg from '../assets/images/property/img1.png';
function Listing() {
    return (
        <section className="text-black flex justify-center items-center text-center px-4 md:py-20 py-10">
      <div className="w-full">
        <p className="text-base md:text-lg max-w-4xl mx-auto font-medium text-[color:var(--color-primary)]">
          Our Listing
        </p>
        <h1 className="text-xl md:text-4xl max-w-6xl mx-auto font-medium font-poppins mb-8">
          Choose Your Stay
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center px-10">
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
        </div>
      </div>
    </section>
    );
}

export default Listing;

function HotelCard() {
  return (
    <a href="/hotel-details" className="block w-64 overflow-hidden rounded-xl">
      <div className="relative">
        <img
          src={hotelImg}
          alt="Hotel Room"
          className="w-full h-70 object-cover rounded-xl"
        />
        <span className="absolute top-2 left-2 bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
          <Flame size={14} className="text-red-500" />
          Hot Deals
        </span>
      </div>
      <div className="py-4 px-1">
        <div className="flex items-center text-sm mb-1 text-gray-700">
          <div className="flex items-center mr-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" className="mr-1" />
            ))}
            4.2
          </div>
        </div>
        <h3 className="text-base text-left font-semibold text-gray-900 hover:underline">
          Hotale Arc New York City
        </h3>
        <p className="text-sm text-left text-gray-500 mt-1">
          2 Nights For{' '}
          <span className="font-semibold text-gray-800">$243.00</span>
        </p>
      </div>
    </a>
  );
}
