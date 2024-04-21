import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { TiSocialInstagram } from "react-icons/ti"
const Footer = () => {
    return (
        <div className="flex border-t-2 p-5 justify-between">
            <div className="flex md:gap-10">
                <span>© NurseLink, Inc. All rights reserved.</span>
                <span className="cursor-pointer hover:text-[#00CEC8] transition ease-in duration-300">
                    Privacy Policy
                </span>
                <span className="cursor-pointer hover:text-[#00CEC8] transition ease-in duration-300">
                    Terms of Service
                </span>
            </div>
            <div className="flex flex-col md:flex-row text-3xl gap-2 md:gap-7">
                <FaFacebookF className="text-[#00CEC8] hover:scale-125 transition ease-in duration-300" />
                <BsTwitter className="text-[#00CEC8] hover:scale-125 transition ease-in duration-300" />
                <TiSocialInstagram className="text-[#00CEC8] hover:scale-125 transition ease-in duration-300" />
            </div>
        </div>
    )
}

export default Footer
