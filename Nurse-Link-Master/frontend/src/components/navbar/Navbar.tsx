import { motion } from "framer-motion"
import { useState } from "react"
import { FiMenu, FiArrowRight } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"
import routes from "../router/router"
import { RouteType } from "../../types/routeTypes/routeType"
import { useAuth } from "../../hooks/useAuth"
import useLogout from "../../hooks/useLogout"
import UserType from "../../types/userTypes/userType"

const Navbar = () => {
    return (
        <div className="bg-gray-50">
            <FlipNav />
        </div>
    )
}

const FlipNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="bg-white p-3 border-b-[1px] border-gray-200 flex items-center justify-between relative">
            <NavLeft setIsOpen={setIsOpen} />
            <NavRight />
            <NavMenu isOpen={isOpen} />
        </nav>
    )
}

const Logo = () => {
    return (
        <div className="flex items-center">
            <img
                width="50"
                height="39"
                src="https://res.cloudinary.com/dpuuajd0k/image/upload/v1698127920/CSSWENG%20GROUP%203/qt4ozeain5lqwtz5jmb3.png"
                alt="Logo"
            />
        </div>
    )
}

const NavLeft = ({
    setIsOpen,
}: {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    return (
        <div className="flex items-center gap-3">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block lg:hidden text-[#053B50] text-2xl"
                onClick={() => setIsOpen((pv) => !pv)}
            >
                <FiMenu />
            </motion.button>

            <Link to="/">
                <Logo />
            </Link>
            {routes.map((route: RouteType) => {
                if (route.name)
                    return <NavLink text={route.name} path="/" />
            })}
        </div>
    )
}

const NavLink = ({ text, path }: { text: string; path: string }) => {
    return (
        <Link
            to={path}
            rel="nofollow"
            className="hidden lg:block h-[30px] overflow-hidden font-medium"
        >
            <motion.div whileHover={{ y: -30 }}>
                <span className="flex items-center h-[30px] font-bold text-[#053B50] text-3xl">
                    {text}
                </span>
                <span className="flex items-center h-[30px] font-bold text-[#00CEC8] text-3xl">
                    {text}
                </span>
            </motion.div>
        </Link>
    )
}

const NavRight = () => {
    const { logout } = useLogout()
    const { user } = useAuth()
    return (
        <div className="flex items-center gap-2">
            {!user ? (
                <>
                    <Link to="/">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden lg:block px-4 py-2 text-[#053B50] hover:text-[#00CEC8] font-medium rounded-md whitespace-nowrap"
                        >
                            Home
                        </motion.button>
                    </Link>
                    <Link to="/">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden lg:block px-4 py-2 text-[#053B50] hover:text-[#00CEC8] font-medium rounded-md whitespace-nowrap"
                        >
                            About
                        </motion.button>
                    </Link>
                    <Link to="/">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden lg:block px-4 py-2 text-[#053B50] hover:text-[#00CEC8] font-medium rounded-md whitespace-nowrap"
                        >
                            Contact Us
                        </motion.button>
                    </Link>
                    <Link to="/register">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mx-4 px-4 py-2 bg-[#FAF9F9] text-[#053B50] font-medium rounded-xl drop-shadow-md"
                        >
                            Sign Up
                        </motion.button>
                    </Link>
                    <Link to="/login">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-[#053B50] text-[#FFFFFF] font-medium rounded-xl drop-shadow-md"
                        >
                            Log In
                        </motion.button>
                    </Link>
                </>
            ) : (
                <>
                    <Link to="/">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden lg:block px-4 py-2 text-[#053B50] hover:text-[#00CEC8] font-medium rounded-md whitespace-nowrap"
                        >
                            Jobs
                        </motion.button>
                    </Link>
                    <Link to="/">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden lg:block px-4 py-2 text-[#053B50] hover:text-[#00CEC8] font-medium rounded-md whitespace-nowrap"
                        >
                            Connections
                        </motion.button>
                    </Link>
                    <Link to={`/nurse/recommendations/receive/${user.id}`}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden lg:block px-4 py-2 text-[#053B50] hover:text-[#00CEC8] font-medium rounded-md whitespace-nowrap"
                        >
                            Recommendations
                        </motion.button>
                    </Link>
                    <Link to="/">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden lg:block px-4 py-2 text-[#053B50] hover:text-[#00CEC8] font-medium rounded-md whitespace-nowrap"
                        >
                            Messages
                        </motion.button>
                    </Link>
                    <LoggedInProfileMenu logout={logout} user={user} />
                </>
            )}
        </div>
    )
}

const LoggedInProfileMenu = ({
    user,
    logout,
}: {
    user: UserType
    logout: Function
}) => {

    const nav = useNavigate()

    return (
        <div className="rounded-full h-14 dropdown dropdown-end ml-4">
            <label tabIndex={0} className="h-full avatar">
                <img
                    src={user?.img}
                    className="h-full object-fill hover:scale-105 transition duration-200 ease-in rounded-full border-white border-4 shadow"
                />
            </label>
            <ul tabIndex={0} className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40">
                <li>
                    <button
                        onClick={() => nav(`/nurse/${user.id}`)}
                    >
                        View Profile
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => nav(`/nurse/${user.id}`)}
                    >
                        Notifications
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => nav(`/nurse/${user.id}`)}
                    >
                        Settings
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => logout()}
                    >
                        Sign Out
                    </button>
                </li>
            </ul>
        </div>
    )
}

const NavMenu = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <motion.div
            variants={menuVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
        >
            <MenuLink text="Home" />
            <MenuLink text="About" />
            <MenuLink text="Contact Us" />
        </motion.div>
    )
}

const MenuLink = ({ text }: { text: string }) => {
    return (
        <motion.a
            variants={menuLinkVariants}
            rel="nofollow"
            href="#"
            className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
        >
            <motion.span variants={menuLinkArrowVariants}>
                <FiArrowRight className="h-[30px] text-[#343330]" />
            </motion.span>
            <motion.div whileHover={{ y: -30 }}>
                <span className="flex items-center h-[30px] text-[#343330]">
                    {text}
                </span>
                <span className="flex items-center h-[30px] text-[#00CEC8]">
                    {text}
                </span>
            </motion.div>
        </motion.a>
    )
}

export default Navbar

const menuVariants = {
    open: {
        scaleY: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    closed: {
        scaleY: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
        },
    },
}

const menuLinkVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: -10,
        opacity: 0,
    },
}

const menuLinkArrowVariants = {
    open: {
        x: 0,
    },
    closed: {
        x: -4,
    },
}
