import LoginCard from "../../components/loginPage/LoginCard"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import useLogin from "../../hooks/useLogin"
import { Link } from "react-router-dom"

const LoginPage = () => {

    const style = document.createElement('style');
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');
        `;
    document.head.appendChild(style);
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

    const [displayBG, setBG] = useState('url(https://res.cloudinary.com/dpuuajd0k/image/upload/v1698127921/CSSWENG%20GROUP%203/zkeubixeljnf29buvxmo.png)'); // State to control content visibility
    const [loginAlign, setLoginAlign] = useState('end');

    useEffect(() => {
        const handleResize = () => {
            // Update font size based on window width
            if (window.innerWidth >= 600) { // if tablet or laptop have background image
                setBG('url(https://res.cloudinary.com/dpuuajd0k/image/upload/v1698127921/CSSWENG%20GROUP%203/zkeubixeljnf29buvxmo.png)');
            } else {
                setBG('none')
            }
            // for login alignment
            if (window.innerWidth >= 992) {
                setLoginAlign('end');
            } else {
                setLoginAlign('center');
            }
        };
        // Attach the event listener
        window.addEventListener('resize', handleResize);
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        console.log(state)
        if (state === "Error") console.log("ERROR")
        else if (state === "Success") navigate("/homepage")
    }, [state])

    return (
        <>
            <div className="w-full h-screen" style={{
                backgroundImage: displayBG,
                backgroundSize: 'auto 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top left'
            }}>
                <div className="w-full p-10 flex flex-col">

                    {/* Removed this since there's a navbar */}
                    {/*<img
                            className="self-end"
                            src="https://res.cloudinary.com/dpuuajd0k/image/upload/v1698127920/CSSWENG%20GROUP%203/qt4ozeain5lqwtz5jmb3.png"
                            alt="Logo"
                            style={{
                                width: '50px',
                                height: '50px',
                                // top: '32px',
                                // left: '1334px',
                            }}
                        />*/}

                    <div className="loginInput flex items-center justify-center flex-col self-end mr-10 ml-10" style={{
                        background: '#FFFFFF',
                        paddingTop: '4rem',
                        paddingBottom: '4rem',
                        padding: '2rem',
                        marginTop: '1rem',
                        alignSelf: loginAlign,
                        // width: '439px',
                        // height: '579px',
                        // top: "220px",
                        // left: "860px",
                        borderRadius: "30px",
                        border: '1px solid #343330',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        // border: '2px solid #ccc',
                        // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        // padding: '2rem',
                        // borderRadius: '2rem',
                    }}>
                        <div className="title text-outline-text" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '50px', lineHeight: '75px', alignContent: "center", marginBottom: '30px' }}>
                            Login
                        </div>
                        <div className="containPwUsername float-left">
                            <label htmlFor="username" className="relative text-outline-text text-sm bg-white ml-3 px-2 z-40">
                                Username
                            </label>
                            <br />
                            <input
                                name="username"
                                id="username"
                                className="bg-transparent border-outline-text border-solid border rounded-md z-30"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                style={{ padding: '10px', paddingTop: '10px', width: '366.21px', height: '50px', marginTop: '-15px', marginBottom: '15px' }}
                            />
                            <br />
                            <label htmlFor="password" className="relative text-outline-text text-sm bg-white ml-3 px-2 z-40">
                                Password
                            </label>
                            <br />
                            <input
                                name="password"
                                type="password"
                                id="password"
                                className="bg-transparent border-outline-text border-solid border rounded-md z-30"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                style={{ padding: '10px', width: '366.21px', height: '50px', marginTop: '-15px', marginBottom: '30px' }}
                            />
                            <br />
                            <div className="flex" style={{ width: '366.21px', top: '392.23px', left: '896.39px', marginBottom: '30px' }}>
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    name="rememberMe"
                                    style={{ width: '20px', height: '20px', borderRadius: '3px', border: '1px' }}
                                />
                                <label htmlFor="rememberMe" style={{ fontSize: '15px', fontWeight: '400px', lineHeight: '16px', marginLeft: '8px' }}>
                                    Remember me
                                </label>
                                <Link to="/forgot-password" style={{ fontSize: '15px', color: '#176B87', fontFamily: 'Open Sans', fontWeight: '600', lineHeight: '16px', marginLeft: 'auto' }}>
                                    Forgot Password?
                                </Link>
                            </div>
                            <div className="flex justify-center item-center">
                                <button
                                    className="loginBtn btn rounded-full mt-3 w-full"
                                    style={{ backgroundColor: '#176B87', color: '#fff', textTransform: 'none', fontWeight: '400', fontSize: '16px' }}
                                    onClick={(e) => handleLogin(e, username, password)}
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <span style={{ marginRight: '10px', color: '#176B87' }}>Don't have an account?</span>
                            <Link to="/register" style={{ color: '#176B87', fontWeight: '500' }}>Register.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage