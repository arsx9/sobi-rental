
const RatingOverview = () => {
  return (
    <div className="w-full px-8 py-10">
        <div className="flex items-center text-xl font-semibold gap-2 pb-6">
          <img src="/assets/icons/starfilled.png" className="text-black fill-black w-4 h-4" />
          4.78 · <span className="text-gray-600">218</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-20 text-start text-sm text-gray-800">
                {/* Rating bars */}
                <div className="col-span-2">
                    <p className="font-semibold text-sm md:text-base">Overall rating</p>
                    <div className="mt-4 space-y-2">
                        {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center gap-3 text-sm text-gray-600">
                            {/* Fixed width rating number */}
                            <span className="w-4 text-right">{rating}</span>

                            {/* Bar container with fixed width */}
                            <div className="w-full bg-gray-200 rounded h-2">
                            <div
                                className="bg-black h-2 rounded"
                                style={{ width: `${rating === 5 ? 80 : rating === 4 ? 15 : 3}%` }}
                            />
                            </div>
                        </div>
                        ))}
                    </div>
                </div>   
                <div>
                    <p className="font-semibold text-sm md:text-base">Cleanliness</p>
                    <p className="text-sm md:text-base">4.9</p>
                    <img src="/assets/icons/d-clean.png" className="w-9 h-12 mt-14 inline-block ml-1" />
                </div>
                <div>
                    <p className="font-semibold text-sm md:text-base">Accuracy</p>
                    <p className="text-sm md:text-base">4.9</p>
                    <img src="/assets/icons/d-accuracy.png" className="w-9 h-9 mt-14 inline-block ml-1" />
                </div>
                <div>
                    <p className="font-semibold text-sm md:text-base">Check-in</p>
                    <p className="text-sm md:text-base">4.9</p>
                    <img src="/assets/icons/d-checkin.png" className="w-9 h-9 mt-14 inline-block ml-1" />
                </div>
                <div>
                    <p className="font-semibold text-sm md:text-base">Communication</p>
                    <p className="text-sm md:text-base">4.9</p>
                    <img src="/assets/icons/d-communication.png" className="w-9 h-9 mt-14 inline-block ml-1" />
                </div>
                <div>
                    <p className="font-semibold text-sm md:text-base">Location</p>
                    <p className="text-sm md:text-base">4.9</p>
                    <img src="/assets/icons/d-location.png" className="w-9 h-9 mt-14 inline-block ml-1" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default RatingOverview;