import { IoCall } from "react-icons/io5"
import { AiOutlineMail } from "react-icons/ai"
import { FaLocationDot } from "react-icons/fa6"

const CONTACT_ASSET =
    "https://res.cloudinary.com/dtocowzq2/image/upload/v1698325496/nurse-link/piwteaqrp6snlpjzc1ue.png"

const ContactSection = () => {
    return (
        <div id="contact" className="w-full h-screen bg-accent-blue relative flex justify-center lg:justify-end">
            <div className="text-white w-[60%] lg:w-[45%] flex flex-col justify-center z-40 p-8">
                <p className="text-5xl lg:text-6xl font-bold font-poppins">
                    Have any more questions?
                </p>
                <p className="text-2xl lg:text-xl mt-10 font-semibold font-montserrat">
                    Contact us at
                </p>
                <p className="text-2xl lg:text-xl flex items-center gap-4 mt-5 font-open-sans">
                    <IoCall /> +02 8623 8911{" "}
                </p>
                <p className="text-2xl lg:text-xl mt-5 font-open-sans">
                    <span className="icon-wrapper flex items-center justify center text-md gap-4">
                        <AiOutlineMail /> nurselink@gmail.com
                    </span>
                </p>
                <p className="text-2xl lg:text-xl flex items-center gap-4 mt-5 font-open-sans">
                    <FaLocationDot /> 2401 Taft Ave, Malate, <br /> Manila, Metro
                    Manila 1004{" "}
                </p>
            </div>
            <img
                src={CONTACT_ASSET}
                className="absolute invisible lg:visible top-0 left-0 h-full w-500"
            />
        </div>
    );
};



export default ContactSection
