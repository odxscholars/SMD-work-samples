import { useState } from "react";
import { NurseType } from "../../types/nurseTypes/nurseType.ts";
import { useAuth } from "../../hooks/useAuth.tsx";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch.tsx";
import useConnections from "../../hooks/useConnections.tsx";

const ConnectionRequestReceivedCard = ({ nurseId }: { nurseId: string }) => {
  const { data: nurse, loading } = useFetch(`/api/nurse/${nurseId}`);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // New state to manage visibility

  const { acceptConnection } = useConnections();
  const { rejectConnection } = useConnections();
  const { user } = useAuth();
  const nav = useNavigate();

  const handleAcceptConnection = async (
    e: React.MouseEvent<HTMLButtonElement>,
    connectionSender: string,
    connectionReceiver: string
  ) => {
    e.preventDefault();
    await acceptConnection(connectionSender, connectionReceiver);
    setIsVisible(false); // Hide the card
  };

  const handleRejectConnection = async (
    e: React.MouseEvent<HTMLButtonElement>,
    connectionRejecter: string,
    connectionRejectee: string
  ) => {
    e.preventDefault();
    await rejectConnection(connectionRejecter, connectionRejectee);
    setIsVisible(false); // Hide the card
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  if (!isVisible) {
    return null; // Render nothing if the card is not visible
  }

  return (
    <div
      className="rounded-3xl p-4 flex flex-col items-center justify-between w-100"
      style={{
        backgroundColor: isHovered ? "#176B87" : "#FFFFFF",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between gap-10 mb-5">
        <div className="profile-picture bg-white rounded-full w-20 cursor-pointer"
          onClick={() => nav(`/nurse/${nurseId}`)} // Navigate to the nurse's page on click
          >
          <img src={nurse?.profilePicture} alt={`Profile of ${nurse?.firstName}`} />
        </div>
        <div
          className={`names flex flex-col ${isHovered ? "text-white" : "text-black"}`}
          style={{ fontFamily: "Poppins" }}
        >
          <div className="text-xl font-bold">
            {nurse?.firstName} {nurse?.lastName}
          </div>
          <div className="text-l italic">{nurse?.city}</div>
        </div>
      </div>
      <button
        className="btn text-lg w-40 mb-4 rounded-full bg-white text-secondary border-transparent shadow-inner drop-shadow-lg normal-case"
        onClick={(e) => {
          if (user) {
            handleAcceptConnection(e, user?.id, nurseId);
          } else {
            nav(`/login`);
          }
        }}
      >
        Accept
      </button>
      <button
        className={`btn text-lg w-40 mb-4 rounded-full ${
          isHovered ? "bg-white text-secondary" : "bg-secondary text-white"
        } border-transparent shadow-inner drop-shadow-lg normal-case`}
        onClick={(e) => {
          if (user) {
            handleRejectConnection(e, nurseId, user?.id);
          } else {
            nav(`/login`);
          }
        }}
      >
        Reject
      </button>
    </div>
  );
};

export default ConnectionRequestReceivedCard;
