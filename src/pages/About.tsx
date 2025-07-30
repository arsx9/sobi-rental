import HeroVideo from '../components/HeroVideo';

function About(){
    return (
        <>
            <section className="text-black flex justify-center items-center text-center px-4 py-20">
                <div>
                    <h1 className="text-4xl md:text-5xl max-w-6xl font-medium font-poppins mb-4">Our Mission</h1>
                </div>
            </section>
            <HeroVideo/>
            <DetailSection/>
        </>
    );
}
export default About;


function DetailSection(){
    return(
        <div className="flex flex-wrap items-center py-10 md:py-25 px-5 md:px-10 min-h-[500px]">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-3xl md:text-5xl font-normal text-gray-800 mb-4">Our Goal</h2>
                <p className="text-gray-600 pt-3 text-sm md:text-base">
                Sobi Rentals Began With A Vision — To Redefine Short-term Stays By Blending The Reliability Of Hotels With The Charm And Comfort Of Home. What Started As A Single Rental Has Grown Into A Trusted Name For Modern Travelers Who Value Quality, Convenience, And Direct Communication.
                </p>
                <p className="text-gray-600 pt-6 text-sm md:text-base">
                We Understand That Every Traveler Is Different. That’s Why Each Of Our Spaces Is Curated With Care, Offering A Unique Atmosphere Without Compromising On The Essentials — Comfort, Cleanliness, And Connectivity.
                </p>
                <div className='pt-8'>
                    <button className="bg-[var(--color-primary)] border-2 border-[var(--color-primary)] text-white rounded-full px-6 py-1 cursor-pointer hover:bg-white hover:text-[var(--color-primary)] transition-colors duration-300"><i className="icon ion-ios-call"></i>Partner With Us</button>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-end">
                <div className="w-full h-[500px] relative rounded-lg overflow-hidden shadow-md">
                <img
                    src="/assets/images/properties/img1.png"
                    alt="Sample"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                </div>
            </div>
        </div>
    );
}