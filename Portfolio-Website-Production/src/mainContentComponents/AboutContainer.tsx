export const AboutContainer = () => {
    return (
        <>
            <div className={"about-container flex flex-row"}>


                <div className={"basis-1/2"}>

                    <div className={"flex justify-start flex-col text-3xl pl-36 pt-16 space-y-4"}>
                        <button className={"flex flex-row"}>
                            <p className="underline">About Me</p>
                        </button>
                        <button className={"flex flex-row"}>
                            <p className="underline">Education</p>
                        </button>
                        <button className={"flex flex-row"}>
                            <p className="underline">Projects</p>
                        </button>
                        <button className={"flex flex-row"}>
                            <p className="underline">Certifications</p>
                        </button>
                    </div>
                </div>


                <div className={"basis-1/2 pl-36 pt-16"}>
                    <div className = " pb-10">
                        I am a Computer Science student based in Manila, Philippines
                    </div>
                    <div className = " pb-10">
                        Container 2
                    </div >
                    <div className = " pb-10">
                        Container 3
                    </div>

                </div>


            </div>


        </>
    );
};
