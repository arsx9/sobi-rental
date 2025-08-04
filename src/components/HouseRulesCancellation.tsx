export default function HouseRulesCancellation() {
  return (
    <>
    {/* House Rules */}
        <div className="w-full px-4 sm:px-8 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* First Column - 1/3 */}
                <h2 className="text-2xl font-semibold mb-4 md:mb-6 col-span-1">House Rule</h2>
                {/* Second Column - 2/3 with Nested Grid */}
                <div className="col-span-1 md:col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <p>Check-in after <span className="font-medium">4:00 PM</span></p>
                        <p>Minimum age to Rent: <span className="font-medium">25</span></p>
                        <p className="col-span-1 sm:col-span-2 pb-3">
                            Check-out after <span className="font-medium">11:00 AM</span>
                        </p>
                        {/* Children */}
                        <div>
                            <div className="flex items-start gap-4 mt-4">
                                <img src="/assets/icons/d-children.png" className="w-7 h-7" />
                                <p className="font-semibold text-lg">Children</p>
                            </div>
                            <p className="text-sm pt-3">Children Allowed age 0 - 17</p>
                        </div>
                        {/* Events */}
                        <div>
                            <div className="flex items-start gap-4 mt-4">
                                <img src="/assets/icons/d-event.png" className="w-7 h-7" />
                                <p className="font-semibold text-lg">Events</p>
                            </div>
                            <p className="text-sm pt-3">No Events Allowed</p>
                        </div>
                        {/* Pets */}
                        <div>
                            <div className="flex items-start gap-4 mt-6">
                                <img src="/assets/icons/d-pet.png" className="w-7 h-6" />
                                <p className="font-semibold text-lg">Pets</p>
                            </div>
                            <p className="text-sm pt-3">Pets Allowed</p>
                            <p className="text-sm pt-3">Up to 2 Dogs allowed with $65 fee.</p>
                        </div>
                        {/* Smoking */}
                        <div>
                            <div className="flex items-start gap-4 mt-6">
                                <img src="/assets/icons/d-smoking.png" className="w-7 h-6" />
                                <p className="font-semibold text-lg">Smoking</p>
                            </div>
                            <p className="text-sm pt-3">Smoking is not permitted</p>
                        </div>
                        {/* See More */}
                        <p className="text-red-600 text-sm font-medium mt-1 cursor-pointer sm:col-span-2">See more</p>
                    </div>
                </div>
            </div>
        </div>
    {/* Cancelation */}
        <div className="w-full px-4 sm:px-8 mt-20">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First Column - 1/3 */}
        <h2 className="text-2xl font-semibold mb-6 md:col-span-1">Cancellation</h2>

        {/* Second Column - 2/3 with Nested Grid */}
        <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gray-100 p-6 rounded-md w-full mx-auto col-span-4">
                    
                    {/* Labels above line */}
                    <div className="flex justify-around mb-2 px-2 sm:px-4 relative z-10">
                        <span className="text-sm text-gray-700">Partial Refund</span>
                        <span className="text-sm text-gray-700">No Refund</span>
                    </div>

                    {/* Timeline with dots */}
                    <div className="relative flex items-center justify-between mx-3">
                        {/* Line behind */}
                        <div className="absolute top-[8px] left-0 right-0 h-1 bg-gray-300 z-0 w-full" />
                        {/* Filled progress line */}
                        <div className="absolute top-[8px] left-0 h-1 bg-gray-600 z-10 w-1/2" />

                        {/* Circles with labels */}
                        <div className="relative z-20 flex justify-between items-center w-full">
                            <div className="w-5 h-5 bg-gray-600 rounded-full"></div>
                            <div className="w-5 h-5 border-2 border-gray-400 bg-white rounded-full"></div>
                            <div className="w-5 h-5 border-2 border-gray-400 bg-white rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full mt-2">
                        <span className="text-sm text-gray-600">Today</span>
                        <span className="text-sm text-gray-600 ms-3">July 18</span>
                        <span className="text-sm text-gray-600">Check In</span>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col items-start text-start">
                    <p>Before</p>
                    <p>July 18</p>
                </div>
                <div className="col-span-3 flex flex-col items-start text-start">
                    <p>Partial Refund</p>
                    <p>If you cancel your reservation before jul 18 at 11:59 PM, you’ll be charged a fee of $50.00. Times are based on the property’s local time.</p>
                </div>
                <div className="col-span-4 border-b border-gray-300"></div>
            </div>
        </div>
    </div>
</div>

    </>
  );
}
