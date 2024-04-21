import { Link } from "react-router-dom"

const HERO_IMG =
    "https://res.cloudinary.com/dtocowzq2/image/upload/v1698323405/nurse-link/j29qifxacpcz2hbrjflt.png";

const HeroSection = () => {
    return (
        <div className="w-full h-screen bg-primary relative flex items-center justify-center">
            <div className="text-white w-full flex flex-col justify-center mx-20 lg:ml-20 z-40 p-8">
                <p className="text-4xl md:text-5xl lg:text-6xl mb-5 font-bold font-poppins">
                    Join the future of <br /> healthcare recruitment.
                </p>
                <p className="text-2xl mb-8 font-light font-montserrat">
                    Connecting professionals through opportunities.
                </p>
                <Link to="/register">
                    <button className="btn w-full md:w-1/3 lg:w-1/5 text-lg rounded-full mt-6 bg-secondary border-transparent shadow-inner drop-shadow-lg text-white normal-case">
                        Get Started
                    </button>
                </Link>
            </div>
            <img
                src={HERO_IMG}
                className="absolute invisible lg:visible top-0 right-0 h-full w-500"
            />
        </div>
    );
}

export default HeroSection;
