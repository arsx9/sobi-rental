import HotelCard from "./HotelCard";

function Listing() {
  const hotels = [
  {
    id: 1,
    name: "Serena Hotel",
    imageUrl: "/assets/images/properties/img1.png",
    tagValue: "Top Rated",
    rating: 4.8,
    stayDays: 3,
    stayPrice: 450,
  },
  {
    id: 2,
    name: "Pearl Continental",
    imageUrl: "/assets/images/properties/img2.png",
    tagValue: "Popular",
    rating: 4.6,
    stayDays: 2,
    stayPrice: 300,
  },
  {
    id: 3,
    name: "Marriott Hotel",
    imageUrl: "/assets/images/properties/img3.png",
    tagValue: "Luxury",
    rating: 4.9,
    stayDays: 5,
    stayPrice: 900,
  },
  {
    id: 4,
    name: "Hilton Garden Inn",
    imageUrl: "/assets/images/properties/img1.png",
    tagValue: "Budget",
    rating: 4.2,
    stayDays: 2,
    stayPrice: 250,
  },
  {
    id: 5,
    name: "Holiday Inn",
    imageUrl: "/assets/images/properties/img3.png",
    tagValue: "Top Pick",
    rating: 4.5,
    stayDays: 4,
    stayPrice: 400,
  },
  {
    id: 6,
    name: "Ramada Plaza",
    imageUrl: "/assets/images/properties/img2.png",
    tagValue: "Special Offer",
    rating: 4.3,
    stayDays: 3,
    stayPrice: 360,
  },
  {
    id: 7,
    name: "Avari Towers",
    imageUrl: "/assets/images/properties/img1.png",
    tagValue: "Family Friendly",
    rating: 4.7,
    stayDays: 2,
    stayPrice: 320,
  },
  {
    id: 8,
    name: "The Nishat Hotel",
    imageUrl: "/assets/images/properties/img3.png",
    tagValue: "Trending",
    rating: 4.6,
    stayDays: 3,
    stayPrice: 500,
  },
  {
    id: 9,
    name: "Faletti’s Hotel",
    imageUrl: "/assets/images/properties/img2.png",
    tagValue: "Classic",
    rating: 4.4,
    stayDays: 3,
    stayPrice: 370,
  },
  {
    id: 10,
    name: "Movënpick Hotel",
    imageUrl: "/assets/images/properties/img1.png",
    tagValue: "Hot Deal",
    rating: 4.5,
    stayDays: 4,
    stayPrice: 420,
  },
];
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
            {hotels.map((hotel, index) => (
              <HotelCard key={index} hotel={hotel} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Listing;
