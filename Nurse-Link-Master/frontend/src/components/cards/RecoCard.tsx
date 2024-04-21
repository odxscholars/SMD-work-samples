import { NurseType } from "../../types/nurseTypes/nurseType"
import { useAuth } from "../../hooks/useAuth"

const RecoCard = ({ nurse }: { nurse: NurseType }) => {
    const { user } = useAuth()

    const recommendations = () => {

        // Number of recived/given recommendations
        const iterations = Array.from({ length: 2 });

        // Generate content for each iteration, hardcoded currently
        return iterations.map((_, index) => (
            <div key={index}>
                <div className="flex items-start">
                    <img
                        src={nurse?.profilePicture}
                        className="object-cover rounded-full border-white border-4 w-[9%] drop-shadow"
                        alt="Nurse's Profile Picture"
                    />
                    <div className="flex flex-col text-left text-base ml-5">
                        <p className="font-open-sans font-bold">Marissa Villaceran</p>
                        <p className="font-open-sans">ER Nurse</p>
                        <p className="font-open-sans italic mt-2 text-slate-400">November 12, 2019, Villaceran worked with Dela Cruz</p>
                        <p className="font-open-sans mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua elit, sed do eiusmod tempor incididunt uelit.</p>
                    </div>
                </div>
                {index < iterations.length - 1 && <hr className="my-5" />}
            </div>
        ));
    };

    return (
        <div className="invisible md:visible rounded-lg flex flex-col drop p-8 shadow-md">
            {recommendations()}
        </div>
    )
}

export default RecoCard