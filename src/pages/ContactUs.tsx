import ContactForm from "../components/ContactForm.tsx";

function ContactUs(){
    return(
        <>
            <section className="text-black flex justify-center items-center text-center px-4 py-20">
                <div>
                    <h1 className="text-3xl md:text-5xl max-w-6xl font-medium font-poppins mb-4 leading-snug">
                        We’re Here To Help — Anytime, <br className="hidden md:block" />Anywhere
                    </h1>
                    <p className="pt-5 text-base md:text-lg text-gray-600">
                        Have A Question About Your Stay? Need Help With Booking?
                    </p>
                    <p className="pt-6 text-base md:text-lg text-gray-600">
                        Whether It’s Before You Arrive, During Your Visit, Or After You Check Out — Our Team Is Just A Message Away.
                    </p>
                </div>
            </section>
            <section>
                <ContactForm/>
            </section>
        </>
    );
}
export default ContactUs;