const NURSE_ASSET =
    "https://res.cloudinary.com/dtocowzq2/image/upload/v1698323513/nurse-link/hg2citsfu5ozehpviv2q.png"
const MALE_ASSET =
    "https://res.cloudinary.com/dtocowzq2/image/upload/v1698323502/nurse-link/mfc27jcjtogg6yi3k6fm.png"
const NOTE_ASSET =
    "https://res.cloudinary.com/dtocowzq2/image/upload/v1698323493/nurse-link/zixw7renunci3nqlgzeh.png"

const goToRegister = () => {
    window.location.href = '/register';
};

const FeaturesSection = () => {
    return (
        <div className="min-h-screen w-full">

            <div className="h-[70vh] w-full flex flex-col lg:flex-row justify-center items-center p-20">
                <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full mt-10 mb-5 mx-20">
                    <img src={NURSE_ASSET} className="w-full h-full" />
                </div>
                <div className="w-[80%] lg:w-[40%] flex flex-col text-primary items-center lg:items-start text-center lg:text-left">
                    <p className="text-4xl lg:text-5xl font-bold mb-2 lg:mb-5">
                        Find the right job with NurseLink
                    </p>
                    <p className="text-xl lg:text-2xl font-extralight text-[#A1AEB7] mb-5 lg:mb-10">
                        Discover your perfect job in the healthcare field with NurseLink's assistance.
                    </p>
                    <button className="btn w-1/2 mb-5 lg:mb-0 text-lg rounded-full bg-secondary hover:bg-accent-blue border-transparent shadow-inner drop-shadow-lg text-white normal-case">
                        Jobs
                    </button>
                </div>
            </div>

            <div className="divider" />

            <div className="h-[70vh] w-full flex flex-col lg:flex-row justify-center items-center p-20">
                <div className="w-[80%] lg:w-[40%] flex flex-col text-primary items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                    <p className="text-4xl lg:text-5xl font-bold mb-2 lg:mb-5">
                        Connections made fast and easy
                    </p>
                    <p className="text-xl lg:text-2xl font-extralight text-[#A1AEB7] mb-5">
                        Effortlessly and swiftly create valuable connections
                        with ease, thanks to our user-friendly platform.
                    </p>
                    <button className="btn w-1/2 mb-10 lg:mb-0 text-lg rounded-full bg-secondary hover:bg-accent-blue border-transparent shadow-inner drop-shadow-lg text-white normal-case">
                        Connections
                    </button>
                </div>
                <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full mt-10 mb-5 lg:mb-0 order-1 lg:order-2">
                    <img src={MALE_ASSET} className="w-full h-full" />
                </div>
            </div>


            <div className="divider" />

            <div className="h-[70vh] w-full flex flex-col lg:flex-row justify-center items-center p-20">
                <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full mt-10 mb-5 lg:mb-0 mx-20">
                    <img src={NOTE_ASSET} className="w-full h-full" />
                </div>
                <div className="w-[80%] lg:w-[40%] flex flex-col text-primary items-center lg:items-start text-center lg:text-left">
                    <p className="text-4xl lg:text-5xl font-bold mb-2 lg:mb-5">
                        Be part of a growing community
                    </p>
                    <p className="text-xl lg:text-2xl font-extralight text-[#A1AEB7] mb-5">
                        Become an integral part of our growing
                        community, where you can actively engage and contribute
                        to its ongoing development for a rewarding and
                        enriching journey.
                    </p>
                    <button onClick={goToRegister} className="btn w-1/2 mb-20 lg:mb-0 text-lg rounded-full bg-secondary hover:bg-accent-blue border-transparent shadow-inner drop-shadow-lg text-white normal-case">
                        Sign Up
                    </button>
                </div>
            </div>

        </div>
    )
}

export default FeaturesSection
