import { useEffect, useState } from "react"
import { AddDocumentSection } from "../modals/AddDocumentModal.tsx"
import useDynamicFetch from "../../hooks/useDynamicFetch.tsx"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { FaMagnifyingGlass } from "react-icons/fa6"
const NurseDocumentEditComponent = ({ userId }: { userId: string }) => {
    const [showDocumentModal, setShowDocumentModal] = useState<boolean>(false)
    const [changed, setChanged] = useState<boolean>(false)
    const { data: nurse, loading } = useDynamicFetch(
        `/api/nurse/${userId}`,
        changed
    )

    const documentsArray = nurse?.credentials.document || []

    const [resume, setResume] = useState<string>()
    const [resumeLink, setResumeLink] = useState<string>()

    const [license, setLicense] = useState<string>()
    const [licenseLink, setLicenseLink] = useState<string>()

    const [certificate, setCertificate] = useState<string>()
    const [certificateLink, setCertificateLink] = useState<string>()

    const [award, setAward] = useState<string>()
    const [awardLink, setAwardLink] = useState<string>()

    useEffect(() => {
        if (!loading && documentsArray.length > 0) {
            // Check if the nurse has documents
            const documentTypes = {
                Resume: "Resume",
                License: "License",
                Certificate: "Certificate",
                Award: "Award",
            }

            const documentLinks = {
                Resume: { link: "", name: "" },
                License: { link: "", name: "" },
                Certificate: { link: "", name: "" },
                Award: { link: "", name: "" },
            }

            documentsArray.forEach((document) => {
                const type = document.type
                const name = document.name
                const link = document.link
                const mappedType = documentTypes[type]
                console.log("mappedType: " + mappedType)
                if (mappedType) {
                    documentLinks[mappedType].link = link
                    documentLinks[mappedType].name = name
                }
            })

            setResume(documentLinks.Resume.name || "")
            setResumeLink(documentLinks.Resume.link || "")

            setLicenseLink(documentLinks.License.link || "")
            setLicense(documentLinks.License.name || "")

            setCertificate(documentLinks.Certificate.name || "")
            setCertificateLink(documentLinks.Certificate.link || "")

            setAward(documentLinks.Award.name || "")
            setAwardLink(documentLinks.Award.link || "")
        }
    }, [loading, documentsArray])

    console.log(documentsArray)
    return (

        <div id="nurse-edit-container" className="w-full h-fit flex flex-col">

            <div id="nurse-edit-title-container" className="flex mb-8">
                <p className="text-4xl font-bold text-primary mr-5">Documents</p>
                <div className="ml-auto">
                    <button
                        className="btn ml-auto bg-secondary hover:bg-accent-blue text-white rounded-full normal-case"
                        onClick={() => {
                            setShowDocumentModal(true)
                        }}
                    >
                        Add Section
                    </button>
                </div>
            </div>

            {/* Section 1: Resume */}
            <div
                id="nurse-resume"
                className="w-full p-8 rounded-lg shadow-xl flex flex-col relative mb-6"
            >
                <div className="text-3xl font-bold text-primary flex items-center">
                    Resume
                    <button
                        className="ml-auto rounded-full"
                        onClick={() => {
                            setShowDocumentModal(true)
                        }}
                    >
                        <AiOutlinePlusCircle
                            size={30}
                            className="text-primary hover:text-accent-blue"
                        />{" "}
                    </button>
                </div>
                <div id="nurse-resume-list-container" className="text-lg mt-2">
                    {resume ? (
                        <div className="flex items-center">
                            <p className="text-primary">{`Resume: ${resume}`}</p>
                        </div>
                    ) : (
                        <div className="flex items-center">
                            <p className="text-primary">
                                No resume added yet
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Section 2: Licenses */}
            <div
                id="nurse-license"
                className="w-full p-8 rounded-lg shadow-xl flex flex-col relative mb-6"
            >
                <div className="text-3xl font-bold text-primary flex items-center">
                    License
                    <button
                        className="ml-auto rounded-full"
                        onClick={() => {
                            setShowDocumentModal(true)
                        }}
                    >
                        <AiOutlinePlusCircle
                            size={30}
                            className="text-primary hover:text-accent-blue"
                        />{" "}
                    </button>
                </div>
                <div id="nurse-resume-list-container" className="text-xl mt-2">
                    {license ? (
                        <div className="flex items-center">
                            <p className="text-primary">
                                <a
                                    className={`text-primary text-lg ${licenseLink
                                        ? "hover:text-blue-500"
                                        : "text-gray-400 cursor-not-allowed"
                                        }`}
                                    href={licenseLink || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {license}
                                </a>
                            </p>
                        </div>
                    ) : (
                        <div className="flex items-center">
                            <p className="text-primary">
                                No license added yet
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <div
                id="nurse-documents"
                className="w-full p-8 rounded-lg shadow-xl flex flex-col relative mb-6"
            >
                <div className="text-3xl font-bold text-primary flex items-center">
                    Documents
                    <button
                        className="ml-auto rounded-full"
                        onClick={() => {
                            setShowDocumentModal(true)
                        }}
                    >
                        <AiOutlinePlusCircle
                            size={30}
                            className="text-primary hover:text-accent-blue"
                        />
                    </button>
                </div>
                <div id="nurse-resume-list-container" className="text-xl mt-2">
                    {certificate ? (
                        <div className="flex items-center">
                            <p className="text-primary">
                                <a
                                    className={`text-primary text-lg ${certificateLink
                                        ? "hover:text-blue-500"
                                        : "text-gray-400 cursor-not-allowed"
                                        }`}
                                    href={certificateLink || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {certificate}
                                </a>
                            </p>
                        </div>
                    ) : (
                        <div className="flex items-center">
                            <p className="text-primary">
                                No certificate added yet
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <div
                id="nurse-awards"
                className="w-full p-8 rounded-lg shadow-xl flex flex-col relative mb-6"
            >
                <div className="text-3xl font-bold text-primary flex items-center">
                    Awards
                    <button
                        className="ml-auto rounded-full"
                        onClick={() => {
                            setShowDocumentModal(true)
                        }}
                    >
                        <AiOutlinePlusCircle
                            size={30}
                            className="text-primary hover:text-accent-blue"
                        />{" "}
                    </button>
                </div>
                <div id="nurse-resume-list-container" className="text-xl mt-2">
                    {award ? (
                        <div className="flex items-center">
                            <p className="text-primary">
                                <a
                                    className={`text-primary text-lg ${awardLink
                                        ? "hover:text-blue-500"
                                        : "text-gray-400 cursor-not-allowed"
                                        }`}
                                    href={awardLink || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {award}
                                </a>
                            </p>
                        </div>
                    ) : (
                        <div className="flex items-center">
                            <p className="text-primary text-lg">
                                No awards added yet
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <AddDocumentSection
                setShow={setShowDocumentModal}
                show={showDocumentModal}
                setChanged={setChanged}
            />
        </div>
    )
}

export default NurseDocumentEditComponent
