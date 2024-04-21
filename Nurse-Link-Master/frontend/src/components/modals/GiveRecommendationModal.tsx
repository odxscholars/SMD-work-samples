import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { motion } from "framer-motion"
import useAddRecommendation from "../../hooks/useAddRecommendation"

export const GiveRecommendationSection=({
    show,
    setShow,
    name,
    authorId,
    receiverId
}:{
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    name: string
    authorId: string
    receiverId: string
})=>{
    const { addRecommendation } = useAddRecommendation()
    const [recommendation, setRecommendation] = useState("")
    console.log("authorID:", authorId)
    console.log("receiverID:", receiverId)
    const handleSubmit = async () => {
        try {
            // Call addRecommendation function with necessary information
            const response = await addRecommendation(authorId, receiverId, new Date(), recommendation);

            // Handle success if needed
            console.log(response);

            // Close the modal
            setShow(false);
        } catch (error) {
            // Handle error if needed
            console.error(error);
        }
    };

    return (
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
                        
                        <div className="flex flex-col">
                            {/*title*/}
                            <span className="text-3xl font-bold text-[#053B50]">
                                Write a recommendation
                            </span>
                            {/*sub title*/}
                            <span className="text-xl  text-[#053B50] mt-1">
                                This recommendation will appear on {name}'s profile.
                            </span>
                        </div>
                        {/* Input field for recommendation */}
                        <div className="mt-5">
                            <label htmlFor="add-reco">Add Recommendation</label>
                            <input
                                type="text"
                                id="add-reco"
                                className="input input-bordered w-full mt-2"
                                value = {recommendation}
                                onChange={(e) => setRecommendation(e.target.value)}
                            />
                        </div>
                        
                        <div className="flex w-full justify-end mt-5 gap-4">
                            <button
                                className="btn"
                                onClick={() => {
                                    //reset()
                                    setShow(false)
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                id = "submit-document-button"
                                className="btn"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    )
}