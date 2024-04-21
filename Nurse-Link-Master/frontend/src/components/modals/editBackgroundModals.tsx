import { useState } from "react"
import usePhotoChange from "../../hooks/usePhotoChange.tsx"
import { toast } from "react-toastify"
import { motion } from "framer-motion"
import useNurseEdit from "../../hooks/useNurseEdit"



export const ChangeAbout = ({
    show,
    setShow,
    setChanged,
}: {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    setChanged: React.Dispatch<React.SetStateAction<boolean>>
}) => {

    
    const [about, setAbout] = useState<string>("")

    const [imageName, setImageName] = useState<string | undefined>(undefined)
    const [image, setImage] = useState<File | undefined>()
    const { editDetails } = useNurseEdit()
    const reset = () => {
        
    const profileInput = document.getElementById(
        "profile-input"
    ) as HTMLInputElement
    setImageName(undefined)
    setImage(undefined)
    setShow(false)
    profileInput.value = ""
    }


    const handleSubmit = async () => {
        await editDetails({
            about,
        })
    }


    return( 
        <>
        {show && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.2,
                    ease: "easeIn",
                }}
                className="fixed w-full h-screen flex justify-center items-center top-0 left-0"
            >
                <div
                    className="absolute w-full h-screen bg-[#053B50]/60"
                    onClick={() => setShow(false)}
                />
                <div className="bg-white rounded-lg shadow-2xl border-2 z-10 p-10 w-1/2">
                    <span className="text-3xl font-bold text-[#053B50]">
                        {imageName ? "Preview" : "Edit About"}
                    </span>
                
                    {/* Input fields for About details */}
                    <div className="mt-5">
                        <label htmlFor="about">Edit About</label>
                        <input
                            type="text"
                            id="about"
                            className="input input-bordered w-full mt-2"
                            onChange = {(e) => setAbout(e.target.value)}
                        />
                    </div>
            
                    <div className="flex w-full justify-end mt-5 gap-4">
                        <button
                            className="btn"
                            onClick={() => {
                                reset()
                                setShow(false)
                            }}
                        >
                            Cancel
                        </button>
                        {imageName && (
                            <motion.button
                                className="btn"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeIn",
                                }}
                                onClick={reset}
                            >
                                Reset
                            </motion.button>
                        )}
                        <button
                            id = "save-document-button"
                            className="btn"
                            // onClick={(e) => handleSave(e)}
                            onClick={(e) => handleSubmit(e)}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </motion.div>
        )}
    </>
    )
}

export const ChangeEducation = ({
    show,
    setShow,
    setChanged,
}: {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    setChanged: React.Dispatch<React.SetStateAction<boolean>>
}) => {

    const [educationInstitution, seteducationInstitution] = useState<string>("")
    const [educationPosition, seteducationPosition] = useState<string>("")
    const [educationStartYear, seteducationStartYear] = useState<Date>()
    const [educationEndYear, seteducationEndYear] = useState<Date>()

    const [imageName, setImageName] = useState<string | undefined>(undefined)
    const [image, setImage] = useState<File | undefined>()
    const { editDetails } = useNurseEdit()

    const reset = () => {
        
    // const profileInput = document.getElementById(
    //     "profile-input"
    // ) as HTMLInputElement
    setImageName(undefined)
    setImage(undefined)
    setShow(false)
    // profileInput.value = ""
    }

    // useEffect(() => {
    //     setAbout(nurse?.firstName)
    // }, [loading])

    const handleSubmit = async () => {
        await editDetails({
            educationInstitution,
            educationPosition,
            educationStartYear,
            educationEndYear
        })
    }

    return(
        <>
        {show && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.2,
                    ease: "easeIn",
                }}
                className="fixed w-full h-screen flex justify-center items-center top-0 left-0"
            >
                <div
                    className="absolute w-full h-screen bg-[#053B50]/60"
                    onClick={() => setShow(false)}
                />
                <div className="bg-white rounded-lg shadow-2xl border-2 z-10 p-10 w-1/2">
                    <span className="text-3xl font-bold text-[#053B50]">
                        {imageName ? "Preview" : "Edit Education"}
                    </span>
                
                    {/* Input fields for About details */}
                    <div className="mt-5">
                        <label htmlFor="institution">Institution</label>
                        <input
                            type="text"
                            id="institution"
                            className="input input-bordered w-full mt-2"
                            onChange = {(e) => seteducationInstitution(e.target.value)}
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="position">Position</label>
                        <input
                            type="text"
                            id="position"
                            className="input input-bordered w-full mt-2"
                            onChange = {(e) => seteducationPosition(e.target.value)}
                        />
                    </div>

                    <div className="mt-5">
                            <label htmlFor="education-start-date">
                                Start Year:
                            </label>
                            <input
                                type="date"
                                id="education-start-date"
                                className="input input-bordered w-full mt-2"
                                onChange={(e) => {
                                    //convert to date object without time
                                    const selectedDate = new Date(e.target.value);
                                    console.log(selectedDate)
                                    seteducationStartYear(selectedDate)
                                }}
                            />
                    </div>

                    <div className="mt-5">
                            <label htmlFor="education-end-date">
                                End Year:
                            </label>
                            <input
                                type="date"
                                id="education-end-date"
                                className="input input-bordered w-full mt-2"
                                onChange={(e) => {
                                    //convert to date object without time
                                    const selectedDate = new Date(e.target.value);
                                    console.log(selectedDate)
                                    seteducationEndYear(selectedDate)
                                }}
                            />
                    </div>

             
                    <div className="flex w-full justify-end mt-5 gap-4">
                        <button
                            className="btn"
                            onClick={() => {
                                reset()
                                setShow(false)
                            }}
                        >
                            Cancel
                        </button>
                        {imageName && (
                            <motion.button
                                className="btn"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeIn",
                                }}
                                onClick={reset}
                            >
                                Reset
                            </motion.button>
                        )}
                        <button
                            id = "save-document-button"
                            className="btn"
                            // onClick={(e) => handleSave(e)}
                            onClick={(e) => handleSubmit(e)}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </motion.div>
        )}
    </>
    )
}

export const ChangeExperience = ({
    show,
    setShow,
    setChanged,
}: {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    setChanged: React.Dispatch<React.SetStateAction<boolean>>
}) => {

    const [experienceCompany, setexperienceCompany] = useState<string>("")
    const [experienceSpecialization, setexperienceSpecialization] = useState<string>("")
    const [experienceEmploymentType, setexperienceEmploymentType] = useState<string>("")
    const [experienceDescription, setexperienceDescription] = useState<string>("")
    const [experienceStartYear, setexperienceStartYear] = useState<Date>()
    const [experienceEndYear, setexperienceEndYear] = useState<Date>()

    const [imageName, setImageName] = useState<string | undefined>(undefined)
    const [image, setImage] = useState<File | undefined>()
    const { editDetails } = useNurseEdit()

    const reset = () => {
        
    const profileInput = document.getElementById(
        "profile-input"
    ) as HTMLInputElement
    setImageName(undefined)
    setImage(undefined)
    setShow(false)
    profileInput.value = ""
    }

    // useEffect(() => {
    //     setAbout(nurse?.firstName)
    // }, [loading])

    const handleSubmit = async () => {
        await editDetails({
            experienceCompany,
            experienceSpecialization,
            experienceDescription,
            experienceEmploymentType,
            experienceStartYear,
            experienceEndYear
        })
    }

    return(        <>
        {show && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.2,
                    ease: "easeIn",
                }}
                className="fixed w-full h-screen flex justify-center items-center top-0 left-0"
            >
                <div
                    className="absolute w-full h-screen bg-[#053B50]/60"
                    onClick={() => setShow(false)}
                />
                <div className="bg-white rounded-lg shadow-2xl border-2 z-10 p-10 w-1/2">
                    <span className="text-3xl font-bold text-[#053B50]">
                        {imageName ? "Preview" : "Edit Experience"}
                    </span>
                
                    {/* Input fields for About details */}
                    <div className="mt-5">
                        <label htmlFor="company">Company</label>
                        <input
                            type="text"
                            id="company"
                            className="input input-bordered w-full mt-2"
                            onChange = {(e) => setexperienceCompany(e.target.value)}
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="specialization">Specialization</label>
                        <input
                            type="text"
                            id="specialization"
                            className="input input-bordered w-full mt-2"
                            onChange = {(e) => setexperienceSpecialization(e.target.value)}
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="employment-type">Employment Type</label>
                        <input
                            type="text"
                            id="employment-type"
                            className="input input-bordered w-full mt-2"
                            onChange = {(e) => setexperienceEmploymentType(e.target.value)}
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            id="description"
                            className="input input-bordered w-full mt-2"
                            onChange = {(e) => setexperienceDescription(e.target.value)}
                        />
                    </div>

                    <div className="mt-5">
                            <label htmlFor="experiece-start-date">
                                Start Year:
                            </label>
                            <input
                                type="date"
                                id="experiece-start-date"
                                className="input input-bordered w-full mt-2"
                                onChange={(e) => {
                                    //convert to date object without time
                                    const selectedDate = new Date(e.target.value);
                                    console.log(selectedDate)
                                    setexperienceStartYear(selectedDate)
                                }}
                            />
                    </div>

                    <div className="mt-5">
                            <label htmlFor="experience-end-date">
                                End Year:
                            </label>
                            <input
                                type="date"
                                id="experience-end-date"
                                className="input input-bordered w-full mt-2"
                                onChange={(e) => {
                                    //convert to date object without time
                                    const selectedDate = new Date(e.target.value);
                                    console.log(selectedDate)
                                    setexperienceEndYear(selectedDate)
                                }}
                            />
                    </div>
             
                    <div className="flex w-full justify-end mt-5 gap-4">
                        <button
                            className="btn"
                            onClick={() => {
                                reset()
                                setShow(false)
                            }}
                        >
                            Cancel
                        </button>
                        {imageName && (
                            <motion.button
                                className="btn"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeIn",
                                }}
                                onClick={reset}
                            >
                                Reset
                            </motion.button>
                        )}
                        <button
                            id = "save-document-button"
                            className="btn"
                            // onClick={(e) => handleSave(e)}
                            onClick={(e) => handleSubmit(e)}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </motion.div>
        )}
    </>)
}

export const ChangeVolunteering = ({
    show,
    setShow,
    setChanged,
}: {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    setChanged: React.Dispatch<React.SetStateAction<boolean>>
}) => {

    const [volunteeringCompany, setvolunteeringCompany] = useState<string>("")
    const [volunteeringSpecialization, setvolunteeringSpecialization] = useState<string>("")
    const [volunteeringDescription, setvolunteeringDescription] = useState<string>("")
    const [volunteeringStartYear, setvolunteeringStartYear] = useState<Date>()
    const [volunteeringEndYear, setvolunteeringEndYear] = useState<Date>()

    const [imageName, setImageName] = useState<string | undefined>(undefined)
    const [image, setImage] = useState<File | undefined>()
    const { editDetails } = useNurseEdit()

    const reset = () => {
        
    // const profileInput = document.getElementById(
    //     "profile-input"
    // ) as HTMLInputElement
    setImageName(undefined)
    setImage(undefined)
    setShow(false)
    // profileInput.value = ""
    }

    // useEffect(() => {
    //     setAbout(nurse?.firstName)
    // }, [loading])

    const handleSubmit = async () => {
        await editDetails({
            volunteeringCompany,
            volunteeringSpecialization,
            volunteeringDescription,
            volunteeringStartYear,
            volunteeringEndYear
        })
    }

    return(
        <>
        {show && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.2,
                    ease: "easeIn",
                }}
                className="fixed w-full h-screen flex justify-center items-center top-0 left-0"
            >
                <div
                    className="absolute w-full h-screen bg-[#053B50]/60"
                    onClick={() => setShow(false)}
                />
                <div className="bg-white rounded-lg shadow-2xl border-2 z-10 p-10 w-1/2">
                    <span className="text-3xl font-bold text-[#053B50]">
                        {imageName ? "Preview" : "Edit Volunteering"}
                    </span>
                
                    {/* Input fields for About details */}
                    <div className="mt-5">
                        <label htmlFor="volunteeringCompany">Company/Institution</label>
                        <input
                            type="text"
                            id="volunteeringCompany"
                            className="input input-bordered w-full mt-2"
                            onChange = {(e) => setvolunteeringCompany(e.target.value)}
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="volunteeringSpecialization">Specialization</label>
                        <input
                            type="text"
                            id="volunteeringSpecialization"
                            className="input input-bordered w-full mt-2"
                            onChange = {(e) => setvolunteeringSpecialization(e.target.value)}
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="volunteeringDescription">Description</label>
                        <input
                            type="text"
                            id="volunteeringDescription"
                            className="input input-bordered w-full mt-2"
                            onChange = {(e) => setvolunteeringDescription(e.target.value)}
                        />
                    </div>

                    <div className="mt-5">
                            <label htmlFor="volunteering-start-date">
                                Start Year:
                            </label>
                            <input
                                type="date"
                                id="volunteering-start-date"
                                className="input input-bordered w-full mt-2"
                                onChange={(e) => {
                                    //convert to date object without time
                                    const selectedDate = new Date(e.target.value);
                                    console.log(selectedDate)
                                    setvolunteeringStartYear(selectedDate)
                                }}
                            />
                    </div>

                    <div className="mt-5">
                            <label htmlFor="volunteering-end-date">
                                End Year:
                            </label>
                            <input
                                type="date"
                                id="volunteering-end-date"
                                className="input input-bordered w-full mt-2"
                                onChange={(e) => {
                                    //convert to date object without time
                                    const selectedDate = new Date(e.target.value);
                                    console.log(selectedDate)
                                    setvolunteeringEndYear(selectedDate)
                                }}
                            />
                    </div>

             
                    <div className="flex w-full justify-end mt-5 gap-4">
                        <button
                            className="btn"
                            onClick={() => {
                                reset()
                                setShow(false)
                            }}
                        >
                            Cancel
                        </button>
                        {imageName && (
                            <motion.button
                                className="btn"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeIn",
                                }}
                                onClick={reset}
                            >
                                Reset
                            </motion.button>
                        )}
                        <button
                            id = "save-document-button"
                            className="btn"
                            // onClick={(e) => handleSave(e)}
                            onClick={(e) => handleSubmit(e)}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </motion.div>
        )}
    </>
    )
}


export const ChangeTechnicalSkill = ({
    show,
    setShow,
    setChanged,
}: {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    setChanged: React.Dispatch<React.SetStateAction<boolean>>
}) => {

    const [technicalSkill, settechnicalSkill] = useState<string>("")
    const [technicalSkillDescription, settechnicalSkillDescription] = useState<string>("")

    const [imageName, setImageName] = useState<string | undefined>(undefined)
    const [image, setImage] = useState<File | undefined>()
    const { editDetails } = useNurseEdit()
    const reset = () => {
        
    const profileInput = document.getElementById(
        "profile-input"
    ) as HTMLInputElement
    setImageName(undefined)
    setImage(undefined)
    setShow(false)
    profileInput.value = ""
    }

    // useEffect(() => {
    //     setAbout(nurse?.firstName)
    // }, [loading])

    const handleSubmit = async () => {
        await editDetails({
            technicalSkill,
            technicalSkillDescription
        })
    }


    return( 
        <>
        {show && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.2,
                    ease: "easeIn",
                }}
                className="fixed w-full h-screen flex justify-center items-center top-0 left-0"
            >
                <div
                    className="absolute w-full h-screen bg-[#053B50]/60"
                    onClick={() => setShow(false)}
                />
                <div className="bg-white rounded-lg shadow-2xl border-2 z-10 p-10 w-1/2">
                    <span className="text-3xl font-bold text-[#053B50]">
                        {imageName ? "Preview" : "Edit Technical Skills"}
                    </span>
                
                    {/* Input fields for About details */}
                    <div className="mt-5">
                        <label htmlFor="technicalSkill">Technical Skill</label>
                        <input
                            type="text"
                            id="technicalSkill"
                            className="input input-bordered w-full mt-2"
                            onChange = {(e) => settechnicalSkill(e.target.value)}
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="technicalSkillDescription">Technical Skill Description</label>
                        <input
                            type="text"
                            id="technicalSkillDescription"
                            className="input input-bordered w-full mt-2"
                            onChange = {(e) => settechnicalSkillDescription(e.target.value)}
                        />
                    </div>
            
                    <div className="flex w-full justify-end mt-5 gap-4">
                        <button
                            className="btn"
                            onClick={() => {
                                reset()
                                setShow(false)
                            }}
                        >
                            Cancel
                        </button>
                        {imageName && (
                            <motion.button
                                className="btn"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeIn",
                                }}
                                onClick={reset}
                            >
                                Reset
                            </motion.button>
                        )}
                        <button
                            id = "save-document-button"
                            className="btn"
                            // onClick={(e) => handleSave(e)}
                            onClick={(e) => handleSubmit(e)}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </motion.div>
        )}
    </>
    )
}

