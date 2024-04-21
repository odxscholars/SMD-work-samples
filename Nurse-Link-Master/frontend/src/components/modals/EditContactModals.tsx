import { useState } from "react"
import usePhotoChange from "../../hooks/usePhotoChange.tsx"
import { toast } from "react-toastify"
import { motion } from "framer-motion"
import useNurseEdit from "../../hooks/useNurseEdit"



export const ChangeEmail = ({
    show,
    setShow,
    setChanged,
}: {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    setChanged: React.Dispatch<React.SetStateAction<boolean>>
}) => {

    
    const [email, setEmail] = useState<string>("")

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
            email,
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
                
                    {/* Input fields for Email details */}
                    <div className="mt-5">
                        <label htmlFor="email">Edit Email</label>
                        <input
                            type="text"
                            id="email"
                            className="input input-bordered w-full mt-2"
                            onChange = {(e) => setEmail(e.target.value)}
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

export const ChangeContactnumber = ({
    show,
    setShow,
    setChanged,
}: {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    setChanged: React.Dispatch<React.SetStateAction<boolean>>
}) => {

    const [Contactnumber, setContactnumber] = useState<string>("")

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

    const handleSubmit = async () => {
        await editDetails({
            Contactnumber,
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
                        {imageName ? "Preview" : "Edit Contact Number"}
                    </span>
                
                    {/* Input fields for About details */}
                    <div className="mt-5">
                        <label htmlFor="contactnumber">Contact Number</label>
                        <input
                            type="text"
                            id="contactnumber"
                            className="input input-bordered w-full mt-2"
                            onChange = {(e) => setContactnumber(e.target.value)}
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

export const ChangeVideo = ({
    show,
    setShow,
    setChanged,
}: {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    setChanged: React.Dispatch<React.SetStateAction<boolean>>
}) => {

    const [video, setVideo] = useState<string>("")

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
            video,
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
                        <label htmlFor="video">YouTube Video</label>
                        <input
                            type="text"
                            id="video"
                            className="input input-bordered w-full mt-2"
                            onChange = {(e) => setVideo(e.target.value)}
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

export const ChangeSocials = ({
    show,
    setShow,
    setChanged,
}: {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    setChanged: React.Dispatch<React.SetStateAction<boolean>>
}) => {

    const [type, setType] = useState<string>("")
    const [link, setLink] = useState<string>("")

    const [imageName, setImageName] = useState<string | undefined>(undefined)
    const [image, setImage] = useState<File | undefined>()
    const { editDetails } = useNurseEdit()

    const reset = () => {
        
    setImageName(undefined)
    setImage(undefined)
    setShow(false)
    }



    const handleSubmit = async () => {
        await editDetails({
            type,
            link,
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
                        {imageName ? "Preview" : "Edit Socials"}
                    </span>
                
                    {/* Input fields for About details */}
                    <div className="mt-5">
                        <label htmlFor="social-type">Type</label>
                        <input
                            type="text"
                            id="social-type"
                            className="input input-bordered w-full mt-2"
                            onChange = {(e) => setType(e.target.value)}
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="socials-link">Link</label>
                        <input
                            type="text"
                            id="socials-link"
                            className="input input-bordered w-full mt-2"
                            onChange = {(e) => setLink(e.target.value)}
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
