import { useState } from "react";
import { NurseType } from "../../types/nurseTypes/nurseType";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import useConnections from "../../hooks/useConnections.tsx"

const ConnectionCard = ({userId , nurseId }: {userId:string, nurseId: string }) => {
  // We are currently looking at userId's connection page
  // userId is connected with nurseId
  const { data: nurse, loading } = useFetch(`/api/nurse/${nurseId}`);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const { disconnectConnection } = useConnections()
  const { user } = useAuth()
  // user is who is currently logged in
  const nav = useNavigate()

  const handleDeleteConnection = async (
    e: React.MouseEvent<HTMLButtonElement>,
    connectionSender: string,
    connectionReceiver: string
) => {
    e.preventDefault()
    await disconnectConnection(connectionSender, connectionReceiver)
    setIsVisible(false); // Hide the card
}

  const toggleDropdown = () => {
    
    if(userId === user?.id) // cannot disconnect or reccomend people if you are not viewing your own page
      setDropdownVisible(!dropdownVisible);

    
  };

  if (!isVisible) {
    return null; // Render nothing if the card is not visible
  }

  return (
    <div
      className={`connection-card rounded-3xl p-4 flex items-center justify-between w-100 h-[10rem] ${
        isHovered ? "hovered" : ""
      }`}
      style={{
        backgroundColor: isHovered ? "#176B87" : "#FFFFFF",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="profile-picture w-1/5 bg-white rounded-full cursor-pointer"
      onClick={() => nav(`/nurse/${nurseId}`)} // Navigate to the nurse's page on click
      >
        <img src={nurse?.profilePicture}/>
      </div>
      <div className={`names flex flex-col w-1/3 ${isHovered ? "text-white" : "text-black"}`}
            style={{fontFamily: "Poppins"}}>
        <div className="text-xl font-bold">{nurse?.firstName} {nurse?.lastName}</div>
        <div className="text-l italic">{nurse?.city}</div>
      </div>
      <div className="dropdown relative">
        <button
          onClick={toggleDropdown}
          className="dropdown-button bg-white text-blue-800 px-2 py-1 rounded"
          style={{ backgroundColor: isHovered ? "#176B87" : "#FFFFFF",
                   cursor: "pointer"}}
        >
          <img src="https://res.cloudinary.com/dialvcsco/image/upload/v1699954243/DotsThreeOutlinethreeblack_io5446.png"
          style={{ display: isHovered ? "none" : "block" }}/>
          <img src="https://res.cloudinary.com/dialvcsco/image/upload/v1699954243/DotsThreeOutlinethreewhite_amhcq2.png"
          style={{ display: isHovered ? "block" : "none" }}/>
        </button>
        {dropdownVisible && (
          <div className="dropdown-content absolute bg-white shadow-md rounded mt-2" style={{ fontFamily: "Poppins" }}>
            <button className="px-2 py-1" style={{ cursor: "pointer"}}        onClick={(e) => {
          if (user) {
            handleDeleteConnection(e, nurseId, user?.id)
            console.log("pressed")
          } else {
              {() => nav(`/login`)}
          }
        }}  
              >Disconnect</button>
            <button className="px-2 py-1" style={{ cursor: "pointer"}}>Recommend</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectionCard;



