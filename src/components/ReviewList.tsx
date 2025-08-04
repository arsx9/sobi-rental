import StarRating from "./StarRating";

const reviews = [
  {
    name: "Thomas",
    location: "Fairbanks, Alaska",
    date: "May 2025",
    stayType: "Stayed with kids",
    content:
      "We enjoyed our stay in Everett! Charles was an outstanding host who was responsive in assisting us with all our needs. We will definitely be back to visit again!",
    image: "https://i.pravatar.cc/40?img=1",
  },
  {
    name: "Chris",
    location: "Ottawa, Canada",
    date: "May 2025",
    stayType: "Stayed a few nights",
    content:
      "We had a great stay! Location worked really well, easy to get into downtown Boston as well as to other areas outside the city. It was close to all the places we wanted to get to.",
    image: "https://i.pravatar.cc/40?img=2",
  },
  {
    name: "Chris",
    location: "Ottawa, Canada",
    date: "May 2025",
    stayType: "Stayed a few nights",
    content:
      "We had a great stay! Location worked really well, easy to get into downtown Boston as well as to other areas outside the city. It was close to all the places we wanted to get to.",
    image: "https://i.pravatar.cc/40?img=2",
  },
  {
    name: "Chris",
    location: "Ottawa, Canada",
    date: "May 2025",
    stayType: "Stayed a few nights",
    content:
      "We had a great stay! Location worked really well, easy to get into downtown Boston as well as to other areas outside the city. It was close to all the places we wanted to get to.",
    image: "https://i.pravatar.cc/40?img=2",
  },
  {
    name: "Chris",
    location: "Ottawa, Canada",
    date: "May 2025",
    stayType: "Stayed a few nights",
    content:
      "We had a great stay! Location worked really well, easy to get into downtown Boston as well as to other areas outside the city. It was close to all the places we wanted to get to.",
    image: "https://i.pravatar.cc/40?img=2",
  },
];

const ReviewList = () => {
  return (
    <div className="border-b border-gray-300 mx-5 pb-12">
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-2">
        {reviews.map((review, index) => (
          <div key={index} className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-500">{review.location}</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row text-sm text-gray-600 mb-1">
              <StarRating rating={4.5} width={3} height={3}/>
              <div>· {review.date} · {review.stayType}</div>
            </div>
            <p className="text-gray-800 pe-1 md:pe-40">{review.content}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 md:gap-8 mb-2 mx-9">
        <button className="bg-gray-300 text-xs md:text-lg text-gray-700 px-8 md:px-12 py-3 rounded-xl font-semibold hover:bg-[var(--color-primary)] hover:text-white transition">
            Show all 218
        </button>
        <div>
          <p className="font-semibold text-xs md:text-sm underline underline-offset-4 text-gray-700 hover:text-[var(--color-primary)]">Learn how review works</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
