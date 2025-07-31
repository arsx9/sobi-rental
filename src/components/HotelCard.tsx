import type { Hotel } from '../types/Hotel';
import StarRating from './StarRating';
import { Link } from 'react-router-dom';

export const HotelCard : React.FC<{hotel : Hotel}> = ({ hotel }) => 
{
    return (
        <Link to={`/hotel/${hotel.id}`} className="block w-70 overflow-hidden rounded-xl">
            <div className="relative">
                <img
                src={hotel.imageUrl}
                alt={hotel.name}
                className="w-full h-70 object-cover rounded-xl"
                />
                <span className="absolute top-2 left-2 bg-white text-red-600 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                    <img
                        src="/assets/icons/flame.png"
                        alt="flame"
                        className='w-4 h-5'
                    />
                    {hotel.tagValue}
                </span>
            </div>
            <div className="py-4 px-1">
                <div className="flex items-center text-sm mb-1 text-gray-700">
                <div className="flex items-center mr-1">
                    <StarRating rating={hotel.rating}/>
                    {hotel.rating}
                </div>
                </div>
                <h3 className="text-base text-left font-semibold text-gray-900 hover:underline">
                    {hotel.name}
                </h3>
                <p className="text-sm text-left text-gray-500 mt-1">
                    {hotel.stayDays} Nights For{' '}
                    <span className="font-semibold text-gray-800">${hotel.stayPrice}.00</span>
                </p>
            </div>
        </Link>
    );
}