import { useState } from "react";
import { Phone } from "lucide-react";
import type { Hotel } from "../types/Hotel";
import RatingOverview from "./RatingOverview";
import ReviewList from "./ReviewList";
import ShowMap from "./ShowMap";
const HotelOverview : React.FC<{hotel : Hotel}> = ({hotel}) => {
  const tabs = ["Overview", "Amenities", "Policies"];
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <>
    <div className="flex flex-col md:flex-row w-full px-5 md:px-10">
      {/* Left Part */}
      <div className="w-full md:w-1/2 flex items-start justify-start">
        <div className="w-full">
          {/* Tabs */}
          <div className="w-full border-b border-gray-300">
            <div className="flex justify-between text-md font-medium">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-1/3 text-center pb-2 transition-colors duration-200 ${
              activeTab === tab
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-700 border-b-2 border-transparent hover:text-red-600"
            }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          {/* Details */}
          <div className="my-10">
            <h2 className="text-2xl font-semibold">{hotel.name}</h2>
            <p className="text-gray-600">4 guests · 2 bedrooms · 2 beds · 1 bathroom</p>
            <div className="flex items-center gap-1 text-sm text-gray-800 mt-1">
              <img src="/assets/icons/starfilled.png" className="text-red-500 w-2 h-2 fill-red-500" />
              <span className="font-medium">4.78</span>
              <span className="underline text-gray-500 ml-1">· 218 reviews</span>
            </div>
          </div>
          {/* Hosted By */}
          <div className="flex items-center justify-between py-6 border-b border-t border-gray-300">
              <div className="flex items-center gap-4">
                <div className="rounded-full overflow-hidden w-13 h-13">
                  <img src="/assets/images/profileImg.jpeg" alt="Profile Img" className="w-full h-full object-cover"/>
                </div>
                <p className="text-sm md:text-lg font-medium">Hosted by Charles</p>
              </div>
              <button className="flex items-center bg-[var(--color-primary)] text-white px-4 py-2 rounded-full hover:bg-red-700 transition text-sm md:text-base">
                <Phone className="mr-2 w-4 h-4 fill-current" />
                617-991-0737
              </button>
          </div>
          {/* self checkin */}
          <div className="flex items-center gap-10 pt-8">
            <div className="ms-4">
              <img src="/assets/icons/checkin.png" alt="icon" className="w-5 h-5"/>
            </div>
            <div>
              <p className="text-base font-medium">Self check-in</p>
              <p className="text-sm font-medium text-gray-400">Check yourself in with the lockbox.</p>
            </div>
          </div>
          {/* Great Host Communication */}
          <div className="flex items-center gap-10 py-8 border-b border-gray-300">
            <div className="ms-4">
              <img src="/assets/icons/ghc.png" alt="icon" className="w-5 h-5"/>
            </div>
            <div>
              <p className="text-base font-medium">Great Host communication</p>
              <p className="text-sm font-medium text-gray-400">Recent guests loved Charles’s communication.</p>
            </div>
          </div>
          {/* Welcome Note */}
          <div className="py-10 text-gray-600 border-b border-gray-300 text-base">
            <p>Welcome to Memory Place, where we host beautiful and unforgettable memories. </p>
            <p className="py-5">Are you looking for a spacious & comfortable home near Boston & the Airport? Perfect! Look no further, we are best choice for you.  MAKE YOUR RESERVATION TODAY!!! </p>
            <p>
              Are you looking for a home where you want your family to be comfortable, and a nearby park for the kids?  Great! Look no further, we have a massive park right behind the property.  MAKE YOUR RESERVATION TODAY!!! 
            </p>
            <button className="flex items-center bg-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-full hover:bg-[var(--color-primary)] transition text-sm md:text-base mt-5 hover:text-white">
                Show more
            </button>
          </div>
          {/* Where You will Sleep */}
          <h3 className="text-xl font-semibold mt-15">Where you’ll sleep</h3>
          <div className="flex flex-col md:flex-row justify-center gap-8 py-8 px-4 max-w-6xl mx-auto border-b border-gray-300">
            {/* Card 1 */}
            <div className="flex-1 flex flex-col items-start text-center border border-gray-300 p-5 rounded-lg">
              <div className="text-blue-600 text-5xl mb-4">
                <img src="/assets/icons/bedroom.png" alt="icon" className="w-5 h-5" />
              </div>
              <h4 className="text-md text-gray-800 font-semibold mb-2">Bedroom 1</h4>
              <p className="text-gray-600 text-sm">1 queen bed</p>
            </div>

            {/* Card 2 */}
            <div className="flex-1 flex flex-col items-start text-center border border-gray-300 p-5 rounded-lg">
              <div className="text-blue-600 text-5xl mb-4">
                <img src="/assets/icons/bedroom.png" alt="icon" className="w-5 h-5" />
              </div>
              <h4 className="text-md text-gray-800 font-semibold mb-2">Bedroom 2</h4>
              <p className="text-gray-600 text-sm">1 queen bed</p>
            </div>

            {/* Card 3 */}
            <div className="flex-1 flex flex-col items-start text-center border border-gray-300 p-5 rounded-lg">
              <div className="text-blue-600 text-5xl mb-4">
                <img src="/assets/icons/livingroom.png" alt="icon" className="w-5 h-5" />
              </div>
              <h4 className="text-md text-gray-800 font-semibold mb-2">Living Room</h4>
              <p className="text-gray-600 text-sm">1 sofa bed</p>
            </div>
          </div>
          {/* What this Place Offer */}
          <div className="border-b border-gray-300 pb-10">
            <h3 className="text-xl font-semibold mt-12 mb-6">What this place offers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="flex">
                <img src="/assets/icons/d-kitchen.png" alt="icon" className="w-5 h-5 mb-2 me-3" />
                <p className="text-gray-600 text-sm">Kitchen</p>
              </div>

              <div className="flex items-start">
                <img src="/assets/icons/d-wifi.png" alt="icon" className="w-5 h-4 mb-2 me-3" />
                <p className="text-gray-600 text-sm">Wifi</p>
              </div>

              <div className="flex items-start">
                <img src="/assets/icons/d-parking.png" alt="icon" className="w-5 h-4 mb-2 me-3" />
                <p className="text-gray-600 text-sm">Free parking on premises</p>
              </div>

              <div className="flex items-start">
                <img src="/assets/icons/d-pets.png" alt="icon" className="w-5 h-4 mb-2 me-3" />
                <p className="text-gray-600 text-sm">Pets allowed</p>
              </div>

              <div className="flex items-start">
                <img src="/assets/icons/d-tv.png" alt="icon" className="w-5 h-4 mb-2 me-3" />
                <p className="text-gray-600 text-sm">TV</p>
              </div>
              
              <div className="flex items-start">
                <img src="/assets/icons/d-ac.png" alt="icon" className="w-4 h-4 mb-2 me-3" />
                <p className="text-gray-600 text-sm">Air conditioning</p>
              </div>
              
              <div className="flex items-start">
                <img src="/assets/icons/d-balcony.png" alt="icon" className="w-4 h-4 mb-2 me-3" />
                <p className="text-gray-600 text-sm">Patio or balcony</p>
              </div>
              
              <div className="flex items-start">
                <img src="/assets/icons/d-garden.png" alt="icon" className="w-4 h-4 mb-2 me-3" />
                <p className="text-gray-600 text-sm">Garden</p>
              </div>
              
              <div className="flex items-start">
                <img src="/assets/icons/d-luggage.png" alt="icon" className="w-4 h-4 mb-2 me-3" />
                <p className="text-gray-600 text-sm">Luggage drop-off allowed</p>
              </div>
              
              <div className="flex items-start">
                <img src="/assets/icons/d-travel.png" alt="icon" className="w-4 h-4 mb-2 me-3" />
                <p className="text-gray-600 text-sm">Travel cot</p>
              </div>

            </div>
            <button className="flex items-center bg-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-full hover:bg-[var(--color-primary)] transition text-sm md:text-base mt-5 hover:text-white">
              Show all 31 amenities
            </button>
          </div>
        </div>
      </div>
      {/* Right Part */}
      <div className="w-full md:w-1/2 flex items-start justify-end mt-10">
        <div className="p-6 space-y-8">
        <p className="text-gray-800 text-xl">Add dates for prices</p>

        <div className="px-5 space-y-5">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs font-medium text-gray-900">CHECK-IN</label>
              <input
                type="date"
                className="w-full p-2 text-gray-400 text-sm focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-900">CHECKOUT</label>
              <input
                type="date"
                className="w-full p-2 text-gray-400 text-sm focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-gray-900">GUESTS</label>
            <select className="w-full p-2 text-sm text-gray-400 focus:outline-none focus:ring">
              <option>2 guests</option>
              <option>3 guests</option>
              <option>4 guests</option>
            </select>
          </div>
          <button className="w-full bg-[var(--color-primary)] text-white py-3 rounded-full font-semibold hover:bg-gray-300 hover:text-gray-900 transition">
            Check availability
          </button>
        </div>
      </div>
      </div>
    </div>
    {/* Rating */}
    <RatingOverview/>
    {/* Review */}
    <ReviewList/>
    {/* Map */}
    <ShowMap/>
    </>
  );
};

export default HotelOverview;