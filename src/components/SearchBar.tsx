import { MapPin, Calendar, Users } from "lucide-react";

function SearchBar(){
  return (
    <div className="container mx-auto my-10 px-4">
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row bg-white shadow w-full overflow-hidden md:rounded-full rounded-md">
                <div className="flex items-center px-4 py-5 flex-1">
                    <MapPin className="mr-3 text-[color:var(--color-primary)]" size={24} />
                    <div>
                        <small className="text-gray-800 font-semibold block text-base mb-1">
                            State
                        </small>
                        <select defaultValue="" className="text-sm w-full text-gray-500 cursor-pointer focus:outline-none">
                            <option value="" disabled> Select state </option>
                            <option value="1">1 state</option>
                            <option value="2">2 state</option>
                            <option value="3">3 state</option>
                            <option value="4">4+ state</option>
                        </select>
                    </div>
                </div>

                <div className="flex items-center px-4 py-5 flex-1">
                    <Calendar className="mr-3 text-[color:var(--color-primary)]" size={24} />
                    <div>
                        <small className="text-gray-800 font-semibold block text-base mb-1">
                        Check in
                        </small>
                        <input
                        type="date"
                        className="text-sm w-full text-gray-500 cursor-pointer focus:outline-none appearance-none bg-transparent"
                        style={{
                            padding: 0,
                            border: 'none',
                        }}
                        />
                    </div>
                </div>
                <div className="flex items-center px-4 py-5 flex-1">
                    <Calendar className="mr-3 text-[color:var(--color-primary)]" size={24} />
                    <div>
                        <small className="text-gray-800 font-semibold block text-base mb-1">
                        Check Out
                        </small>
                        <input
                        type="date"
                        className="text-sm w-full text-gray-500 cursor-pointer focus:outline-none appearance-none bg-transparent"
                        style={{
                            padding: 0,
                            border: 'none',
                        }}
                        />
                    </div>
                </div>
                <div className="flex items-center px-4 py-5 flex-1">
                    <Users className="mr-3 text-[color:var(--color-primary)]" size={24} />
                    <div>
                        <small className="text-gray-800 font-semibold block text-base mb-1">
                        Guests
                        </small>
                        <input
                        type="number"
                        min="1"
                        placeholder="Add guests"
                        className="text-sm w-full text-gray-500 cursor-pointer focus:outline-none appearance-none bg-transparent"
                        style={{
                            padding: 0,
                            border: 'none',
                        }}
                        />
                    </div>
                </div>
                <a href="#" className="flex items-center justify-center px-4 py-5 flex-1 text-white text-sm font-semibold bg-[var(--color-primary)] hover:bg-white hover:text-[color:var(--color-primary)] border border-[color:var(--color-primary)] transition-colors duration-300 rounded-md md:rounded-r-full md:rounded-l-none">
                    Search
                </a>
            </div>
        </div>
    </div>
  );
};

export default SearchBar;