import { NurseType } from "../../types/nurseTypes/nurseType";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const RequestCard = ({ nurse, highlighted }: { nurse: NurseType, highlighted: string }) => {
    const [isConnections, setIsConnections] = useState(false);
    const [isReccomendations, setIsReccomendation] = useState(false);

    useEffect(() => {
        if(highlighted === "Connections"){
            setIsConnections(true);
        } else {
            setIsReccomendation(true);
        }
    }, [highlighted]);

    return (
        <div className="flex flex-col">
            <div className="fontFamily-poppins font-bold text-3xl mb-5">
                Requests
            </div>
            <Link   to={`/connection/${nurse?.userId}`} 
                    className={`mb-5 fontFamily-poppins  text-xl ${isConnections ? 'underline text-secondary font-bold' : 'font-normal'}`}>
                Connections
            </Link>

            <Link   to='/' 
                    className={`mb-5 fontFamily-poppins text-xl ${isReccomendations ? 'underline text-secondary font-bold' : 'font-normal'}`}>
                Recommendations
            </Link>
        </div>
    );
};

export default RequestCard;
