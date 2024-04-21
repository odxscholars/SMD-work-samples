import { useEffect, useState } from "react";
import { ChangeAbout, ChangeEducation, ChangeExperience, ChangeTechnicalSkill, ChangeVolunteering } from "../modals/editBackgroundModals.tsx";
import useDynamicFetch from "../../hooks/useDynamicFetch.tsx"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { BiPencil } from "react-icons/bi";

const NurseBackgroundEditComponent = ({ userId }: { userId: string }) => {
    const [showBackgroundModal, setShowBackgroundModal] = useState<boolean>(false);

    // About
    const [showAboutModal, setShowAboutModal] = useState<boolean>(false)
    // Education
    const [showEducationModal, setShowEducationModal] = useState<boolean>(false)
    // Experience
    const [showExperienceModal, setShowExperienceModal] = useState<boolean>(false)
    // Volunteering
    const [showVolunteeringModal, setShowVolunteeringModal] = useState<boolean>(false)
    // Technical Skills
    const [showTechnicalSkillModal, setShowTechnicalSkillModal] = useState<boolean>(false)

    const [changed, setChanged] = useState<boolean>(false);

    const { data: nurse, loading } = useDynamicFetch(
        `/api/nurse/${userId}`,
        changed
    )

    const about = nurse?.credentials.about || "";
    const education = nurse?.credentials.education || "";
    const experience = nurse?.credentials.experience || "";
    const volunteering = nurse?.credentials.volunteering || "";
    const technicalSkill = nurse?.credentials.technicalskill || "";

    // const [about, setAbout] = useState<string>(nurse?.about)
    // const [education, setEducation] = useState<string>(nurse?.education)
    // const [experience, setExperience] = useState<string>(nurse?.experience)
    // const [volunteering, setVolunteering] = useState<string>(nurse?.volunteering)
    // const [technicalSkill, setTechnicalSkill] = useState<string>(nurse?.technicalSkill)

    const hasAbout = typeof about === "string" && about.trim() !== "";
    const hasEducation = typeof education === "string" && education.trim() !== "";
    const hasExperience = typeof experience === "string" && experience.trim() !== "";
    const hasVolunteering = typeof volunteering === "string" && volunteering.trim() !== "";
    const hasTechnicalSkill = typeof technicalSkill === "string" && technicalSkill.trim() !== "";

    // useEffect(() => {

    //     setAbout(nurse?.about)
    //     setEducation(nurse?.education)
    //     setExperience(nurse?.experiece)
    //     setVolunteering(nurse?.volunteering)
    //     setTechnicalSkill(nurse?.technicalSkill)
    // }, [loading])

    return (

        <div id="nurse-edit-container" className="w-full h-fit flex flex-col">

            <div id="nurse-edit-title-container" className="flex mb-8">
                <p className="text-4xl font-bold text-primary mr-5">Background</p>
                <div className="ml-auto">
                    <button
                        className="btn ml-auto bg-secondary hover:bg-accent-blue text-white rounded-full normal-case"
                        onClick={() => {
                            setShowBackgroundModal(true)
                        }}
                    >
                        Add Section
                    </button>
                </div>

                {/* DROPDOWN OPTION
                <div className="dropdown dropdown-end ml-auto">
                    <label tabIndex={0}>
                        <button
                            className="btn ml-auto bg-secondary hover:bg-accent-blue text-white rounded-full normal-case"
                        >
                            Add Section
                        </button>
                    </label>
                    <ul tabIndex={0} className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40">
                        <li>
                            <button>
                                Volunteering
                            </button>
                        </li>
                        <li>
                            <button>
                                Technical Skills
                            </button>
                        </li>
                    </ul>
                </div>*/}
            </div>


            <div id="nurse-edit-details" className="w-full h-full">

                {/* Section 1: About */}
                <div
                    id="nurse-about"
                    className="w-full p-8 rounded-lg shadow-xl flex flex-col relative mb-6"
                >
                    <div className="text-3xl font-bold text-primary flex items-center">
                        About
                        <button
                            className="ml-auto rounded-full"
                            onClick={() => {
                                // setShowBackgroundModal(true)
                                setShowAboutModal(true)
                            }}
                        >
                            <BiPencil
                                size={30}
                                className="text-primary hover:text-accent-blue"
                            />{" "}
                        </button>
                    </div>
                    <div id="nurse-about-list-container" className="text-lg mt-2">
                        {hasAbout ? (
                            <div className="flex items-center">
                                <p className="text-primary">{`About: ${about}`}</p>
                            </div>
                        ) : (
                            <div className="flex items-center">
                                <p className="text-primary">
                                    No description added yet.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Section 2: Education */}
                <div
                    id="nurse-education"
                    className="w-full p-8 rounded-lg shadow-xl flex flex-col relative mb-6"
                >
                    <div className="text-3xl font-bold text-primary flex items-center">
                        Education
                        <button
                            className="ml-auto rounded-full"
                            onClick={() => {
                                setShowEducationModal(true)
                            }}
                        >
                            <AiOutlinePlusCircle
                                size={35}
                                className="text-primary hover:text-accent-blue"
                            />{" "}
                        </button>
                    </div>
                    <div id="nurse-education-list-container" className="text-lg mt-2">
                        {hasEducation ? (
                            <div className="flex items-center">
                                <p className="text-primary">{`Education: ${education}`}</p>
                            </div>
                        ) : (
                            <div className="flex items-center">
                                <p className="text-primary">
                                    No education added yet.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Section 3: Experience */}
                <div
                    id="nurse-experience"
                    className="w-full p-8 rounded-lg shadow-xl flex flex-col relative mb-6"
                >
                    <div className="text-3xl font-bold text-primary flex items-center">
                        Experience
                        <button
                            className="ml-auto rounded-full"
                            onClick={() => {
                                setShowExperienceModal(true)
                            }}
                        >
                            <AiOutlinePlusCircle
                                size={35}
                                className="text-primary hover:text-accent-blue"
                            />{" "}
                        </button>
                    </div>
                    <div id="nurse-experience-list-container" className="text-lg mt-2">
                        {hasExperience ? (
                            <div className="flex items-center">
                                <p className="text-primary">{`Experience: ${experience}`}</p>
                            </div>
                        ) : (
                            <div className="flex items-center">
                                <p className="text-primary">
                                    No experience added yet.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Section 4: Volunteering */}
                <div
                    id="nurse-volunteering"
                    className="w-full p-8 rounded-lg shadow-xl flex flex-col relative mb-6"
                >
                    <div className="text-3xl font-bold text-primary flex items-center">
                        Volunteering
                        <button
                            className="ml-auto rounded-full"
                            onClick={() => {
                                setShowVolunteeringModal(true)
                            }}
                        >
                            <AiOutlinePlusCircle
                                size={35}
                                className="text-primary hover:text-accent-blue"
                            />{" "}
                        </button>
                    </div>
                    <div id="nurse-volunteering-list-container" className="text-lg mt-2">
                        {hasVolunteering ? (
                            <div className="flex items-center">
                                <p className="text-primary">{`Volunteering: ${volunteering}`}</p>
                            </div>
                        ) : (
                            <div className="flex items-center">
                                <p className="text-primary">
                                    No volunteering experience added yet.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Section 5: Technical Skills */}
                <div
                    id="nurse-technicalskills"
                    className="w-full p-8 rounded-lg shadow-xl flex flex-col relative mb-6"
                >
                    <div className="text-3xl font-bold text-primary flex items-center">
                        Technical Skills
                        <button
                            className="ml-auto rounded-full"
                            onClick={() => {
                                setShowTechnicalSkillModal(true)
                            }}
                        >
                            <AiOutlinePlusCircle
                                size={35}
                                className="text-primary hover:text-accent-blue"
                            />{" "}
                        </button>
                    </div>
                    <div id="nurse-technicalskill-list-container" className="text-lg mt-2">
                        {hasTechnicalSkill ? (
                            <div className="flex items-center">
                                <p className="text-primary">{`Technical Skill: ${technicalSkill}`}</p>
                            </div>
                        ) : (
                            <div className="flex items-center">
                                <p className="text-primary">
                                    No technical skills added yet.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <ChangeAbout
                    setShow={setShowAboutModal}
                    show={showAboutModal}
                    setChanged={setChanged}
                />

                <ChangeEducation
                    setShow={setShowEducationModal}
                    show={showEducationModal}
                    setChanged={setChanged}
                />

                <ChangeExperience
                    setShow={setShowExperienceModal}
                    show={showExperienceModal}
                    setChanged={setChanged}
                />

                <ChangeVolunteering
                    setShow={setShowVolunteeringModal}
                    show={showVolunteeringModal}
                    setChanged={setChanged}
                />

                <ChangeTechnicalSkill
                    setShow={setShowTechnicalSkillModal}
                    show={showTechnicalSkillModal}
                    setChanged={setChanged}
                />
            </div>
        </div>
    );
};

export default NurseBackgroundEditComponent;


