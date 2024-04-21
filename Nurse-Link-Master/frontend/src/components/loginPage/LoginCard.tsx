import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import useLogin from "../../hooks/useLogin"
import { Link } from "react-router-dom"

const LoginCard = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const { login, state } = useLogin()
    const navigate = useNavigate()

    const handleLogin = async (
        e: React.MouseEvent<HTMLButtonElement>,
        username: string,
        password: string
    ) => {
        e.preventDefault()
        await login(username, password)
    }

    useEffect(() => {
        console.log(state)
        if (state === "Error") console.log("ERROR")
        else if (state === "Success") navigate("/homepage")
    }, [state])
    return (
        <div className="w-full md:w-[50%] h-full z-10 flex justify-start items-center">
            <div className="border-2 border-slate-500 rounded-2xl drop-shadow-2xl flex flex-col h-fit py-20 w-full m-2 md:w-1/2 bg-white">
                <span className="font-bold text-6xl w-full h-1/5 flex justify-center items-center">
                    Login
                </span>
                <div className="flex flex-col w-full h-fit justify-center items-center">
                    <div className="w-[80%] md:w-[70%] p-2">
                        <label className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <div className="flex justify-between mt-5">
                            <div className="flex justify-center items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-info"
                                />
                                Remember me
                            </div>
                            <span className="text-[#176B87] font-semibold hover:text-[#00CEC8] transition ease-in duration-100">
                                <Link to="/">Forgot Password?</Link>
                            </span>
                        </div>

                        <button
                        onClick={(e) => handleLogin(e, username, password)}
                        className="btn rounded-full w-full bg-[#176B87] text-white hover:bg-[#00CEC8] mt-10">
                            Login
                        </button>
                        <div className="text-[#176B87] flex justify-center items-center gap-2">
                            Don't have an account?
                            <span className="font-semibold text-[#176B87] hover:text-[#00CEC8] transition ease-in duration-100">
                                <Link to="/register">
                                Register
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginCard
