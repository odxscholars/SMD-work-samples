import {FaFileWord, FaFile } from "react-icons/fa";
export const Credentials = () => {
    return (
        <>
            <div className = "flex flex-col items-left">
                <div className = "check-me-out text-2xl">
                    Check me out!
                </div>
                <div className="files-section flex flex-row pt-10 text-3xl">
                    <div className="basis-1/4">
                        <a href ="#" download><FaFileWord className={"hover:text-gray-500"}/></a>
                        <span className={"text-sm"}>
                            Resume
                        </span>
                    </div>
                    <div className="basis-1/4 ">
                        <a href = "#" download><FaFile className={"hover:text-gray-500"}/></a>
                        <span className={"text-sm"}>
                            Curriculum Vitae
                        </span>

                    </div>

                </div>

            </div>

        </>
    );
};
