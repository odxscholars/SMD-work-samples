import { useState } from "react";
import useDynamicFetch from "../../hooks/useDynamicFetch.tsx"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { BiPencil } from "react-icons/bi";
import ContactSection from "../landingComponents/ContactSection.tsx";
import { ChangeContactnumber, ChangeEmail, ChangeSocials, ChangeVideo } from "../modals/EditContactModals.tsx";

const NurseBackgroundEditComponent = ({ userId }: { userId: string }) => {
    const [showContactModal, setShowContactModal] = useState<boolean>(false);

    // email
    const [showEmailModal, setShowEmailModal] = useState<boolean>(false)
    // contact number
    const [showContactnumberModal, setShowContactnumberModal] = useState<boolean>(false)
    // video
    const [showVideoModal, setShowVideoModal] = useState<boolean>(false)
    // socials
    const [showSocialModal, setShowSocialModal] = useState<boolean>(false)


    const [changed, setChanged] = useState<boolean>(false);

    const { data: nurse, loading } = useDynamicFetch(
        `/api/nurse/${userId}`,
        changed
    )

    const email = nurse?.credentials.email || "";
    const contactnumber = nurse?.credentials.contactnumber || "";
    const video = nurse?.credentials.video || "";
    const socials = nurse?.credentials.socials || "";
    // const technicalSkill = nurse?.credentials.technicalskill || "";

    const hasEmail = typeof email === "string" && email.trim() !== "";
    const hasContactnumber = typeof contactnumber === "string" && contactnumber.trim() !== "";
    const hasVideo = typeof video === "string" && video.trim() !== "";
    const hasSocials = typeof socials === "string" && socials.trim() !== "";
    // const hasTechnicalSkill = typeof technicalSkill === "string" && technicalSkill.trim() !== "";


    return (
        <div id="nurse-edit-container" className="w-full h-fit flex flex-col">

            <div id="nurse-edit-title-container" className="flex mb-8">
                <p className="text-4xl font-bold text-primary mr-5">Contact Details</p>
                {/*                
                <button
                    className="btn ml-auto bg-[#176B87] hover:bg-[#00CEC8] text-white rounded-full normal-case"
                    onClick={() => {
                        setShowContactModal(true);
                    }}
                >
                    Add Section
                </button>*/}
            </div>


            <div id="nurse-edit-details" className="w-full h-full">

                {/* Section 1: Email */}
                <div
                    id="nurse-email"
                    className="w-full p-8 rounded-lg shadow-xl flex flex-col relative mb-6"
                >
                    <div className="text-3xl font-bold text-primary flex items-center">
                        Email
                        <button
                            className="ml-auto rounded-full"
                            onClick={() => {
                                // setShowBackgroundModal(true)
                                setShowEmailModal(true)
                            }}
                        >
                            <BiPencil
                                size={30}
                                className="text-primary hover:text-accent-blue"
                            />{" "}
                        </button>
                    </div>
                    <div id="nurse-about-list-container" className="text-lg mt-2">
                        {hasEmail ? (
                            <div className="flex items-center">
                                <p className="text-primary">{`Email: ${email}`}</p>
                            </div>
                        ) : (
                            <div className="flex items-center">
                                <p className="text-primary">
                                    No email added yet.
                                </p>
                            </div>
                        )}
                    </div>
                </div>


                {/* Section 2: Contact Number */}
                <div
                    id="nurse-contact-number"
                    className="w-full p-8 rounded-lg shadow-xl flex flex-col relative mb-6"
                >
                    <div className="text-3xl font-bold text-primary flex items-center">
                        Contact Number
                        <button
                            className="ml-auto rounded-full"
                            onClick={() => {
                                // setShowBackgroundModal(true)
                                setShowContactnumberModal(true)
                            }}
                        >
                            <BiPencil
                                size={30}
                                className="text-primary hover:text-accent-blue"
                            />{" "}
                        </button>
                    </div>
                    <div id="nurse-contactnumber-list-container" className="text-lg mt-2">
                        {hasContactnumber ? (
                            <div className="flex items-center">
                                <p className="text-primary">{`Contact Number: ${contactnumber}`}</p>
                            </div>
                        ) : (
                            <div className="flex items-center">
                                <p className="text-primary">
                                    No contact number added yet.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Section 3: Introductory Video */}
                <div
                    id="nurse-video"
                    className="w-full p-8 rounded-lg shadow-xl flex flex-col relative mb-6"
                >
                    <div className="text-3xl font-bold text-primary flex items-center">
                        Introductory Video
                        <button
                            className="ml-auto rounded-full"
                            onClick={() => {
                                // setShowBackgroundModal(true)
                                setShowVideoModal(true)
                            }}
                        >
                            <BiPencil
                                size={30}
                                className="text-primary hover:text-accent-blue"
                            />{" "}
                        </button>
                    </div>
                    <div id="nurse-video-list-container" className="text-lg mt-2">
                        {hasVideo ? (
                            <div className="flex items-center">
                                <p className="text-primary">{`Video: ${video}`}</p>
                            </div>
                        ) : (
                            <div className="flex items-center">
                                <p className="text-primary">
                                    No introductory video added yet.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Section 4: Socials */}
                <div
                    id="nurse-socials"
                    className="w-full p-8 rounded-lg shadow-xl flex flex-col relative mb-6"
                >
                    <div className="text-3xl font-bold text-primary flex items-center">
                        Socials
                        <button
                            className="ml-auto rounded-full"
                            onClick={() => {
                                // setShowBackgroundModal(true)
                                setShowSocialModal(true)
                            }}
                        >
                            <AiOutlinePlusCircle
                                size={30}
                                className="text-primary hover:text-accent-blue"
                            />{" "}
                        </button>
                    </div>
                    <div id="nurse-socials-list-container" className="text-lg mt-2">
                        {hasSocials ? (
                            <div className="flex items-center">
                                <p className="text-primary">{`Socials: ${socials}`}</p>
                            </div>
                        ) : (
                            <div className="flex items-center">
                                <p className="text-primary">
                                    No socials information added yet.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <ChangeEmail
                    setShow={setShowEmailModal}
                    show={showEmailModal}
                    setChanged={setChanged}
                />

                <ChangeContactnumber
                    setShow={setShowContactModal}
                    show={showContactnumberModal}
                    setChanged={setChanged}
                />

                <ChangeVideo
                    setShow={setShowVideoModal}
                    show={showVideoModal}
                    setChanged={setChanged}
                />

                <ChangeSocials
                    setShow={setShowSocialModal}
                    show={showSocialModal}
                    setChanged={setChanged}
                />


            </div>
        </div>


    );
};

export default NurseBackgroundEditComponent;


