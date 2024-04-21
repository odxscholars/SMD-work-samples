import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import useRegister from "../../hooks/useRegister.tsx"
import Steps from "../../components/registerComponents/Steps.tsx"

const RegisterNurse = () => {
    const style = document.createElement('style');
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');
        `;
    document.head.appendChild(style);

    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [retypepassword, setRetypePassword] = useState<string>("")
    const [firstname, setFirstName] = useState<string>("")
    const [lastname, setLastName] = useState<string>("")
    const [birthdate, setBirthDate] = useState<string>("")
    const [gender, setGender] = useState<string>("")
    const [country, setCountry] = useState<string>("")
    const [city, setCity] = useState<string>("")

    const { registerNurse, state } = useRegister()
    const navigate = useNavigate()

    const [stepsComplete, setStepsComplete] = useState(0)

    const [titleFontSize, setTitleFontSize] = useState('3rem'); // State to store font size

    useEffect(() => {
        const handleResize = () => {
            // Update font size based on window width
            if (window.innerWidth >= 600) { // if its tablet change font to 4rem
                setTitleFontSize('4rem');
            } else {
                setTitleFontSize('3rem');
            }
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const commonStyles = {
        logoPng: {
            marginBottom: "10px",
        },
        title: {
            fontSize: titleFontSize,
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            color: "#053B50",
        },
        welcomeTitle: {
            marginBottom: "10px",
            fontSize: "1.8rem",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 500,
            color: "#053B50",
        },
        card: {
            width: "100%",
            maxWidth: "100%",
        },
        button: {
            fontSize: "16px",
            borderRadius: "30px",
            fontWeight: "500"
        },
        nextButton: {
            fontSize: "16px",
            borderRadius: "30px",
            backgroundColor: "#053B50"
        },
        submitButton: {
            fontSize: "16px",
            backgroundColor: "#053B50",
            borderRadius: "30px",
            color: "white"
        },
    };

    const fields = [
        <Step1
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            email={email}
            setEmail={setEmail}
            retypepassword={retypepassword}
            setRetypePassword={setRetypePassword}
        />,
        <Step2
            firstname={firstname}
            setFirstName={setFirstName}
            lastname={lastname}
            setLastName={setLastName}
            birthdate={birthdate}
            setBirthDate={setBirthDate}
        />,
        <Step3
            gender={gender}
            setGender={setGender}
            country={country}
            setCountry={setCountry}
            city={city}
            setCity={setCity}
        />,
        <Step4
            username={username}
            email={email}
            firstname={firstname}
            lastname={lastname}
            birthdate={birthdate}
            gender={gender}
            country={country}
            city={city}
        />
    ]

    const NUMBER_OF_STEPS = 3

    const handleSetStep = (num: number) => {
        if (
            (stepsComplete === 0 && num === -1) ||
            (stepsComplete === NUMBER_OF_STEPS && num === 1)
        ) {
            return
        }

        if (num === -1) {
            setStepsComplete((pv) => pv + num)
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (stepsComplete === 0) {
            if (password !== retypepassword) {
                toast("Passwords do not match!", { type: "error" })
            } else if (username === "") {
                toast("Username required", { type: "error" })
            } else if (email === "") {
                toast("Email required", { type: "error" })
            } else if (!emailRegex.test(email)) {
                toast("Input a valid email", { type: "error" })
            } else if (password === "") {
                toast("Password required", { type: "error" })
            } else if (retypepassword === "") {
                toast("Retyped Password required", { type: "error" })
            } else {
                setStepsComplete((pv) => pv + num)
            }
        } else if (stepsComplete === 1) {
            if (firstname === "") {
                toast("first name required", { type: "error" })
            } else if (lastname === "") {
                toast("last name required", { type: "error" })
            } else if (birthdate === "") {
                toast("birth date required", { type: "error" })
            } else {
                setStepsComplete((pv) => pv + num)
            }
        } else {
            if (gender === "") {
                toast("gender required", { type: "error" })
            } else if (country === "") {
                toast("country required", { type: "error" })
            } else if (city === "") {
                toast("city required", { type: "error" })
            } else {
                setStepsComplete((pv) => pv + num)
            }
        }
    }

    const handleRegister = async (
        e: React.MouseEvent<HTMLButtonElement>,
        username: string,
        password: string,
        retypepassword: string,
        email: string,
        firstname: string,
        lastname: string,
        birthdate: string,
        gender: string,
        country: string,
        city: string
    ) => {
        e.preventDefault()

        if (password !== retypepassword) {
            console.error("Passwords do not match")
            return
        }

        await registerNurse(
            username,
            password,
            email,
            firstname,
            lastname,
            birthdate,
            gender,
            country,
            city
        )
    }

    useEffect(() => {
        console.log(state)
        if (state === "Error") console.log("ERROR")
        else if (state === "Success") navigate("/homepage")
    }, [state])

    return (
        <>
            <div className="registerPage flex items-center w-full h-screen">
                <div className="leftPage flex items-center justify-center flex-col w-full h-full">

                    <div className="mb-10 flex flex-col items-center" style={commonStyles.card}>
                        <div className="logoPng" style={commonStyles.logoPng}>
                            <img
                                src="https://res.cloudinary.com/dpuuajd0k/image/upload/v1698127920/CSSWENG%20GROUP%203/qt4ozeain5lqwtz5jmb3.png"
                                className="object-scale-down h-14 w-14"
                            />
                        </div>
                        <div className="title font-bold" style={commonStyles.title}>
                            NurseLink
                        </div>
                        <div className="welcomeTitle" style={commonStyles.welcomeTitle}>
                            Join Us Today!
                        </div>
                    </div>
                    {/* <div className="border-2 h-1/2 w-2/3 p-10"> */}
                    <div className="border-0 w-1/2">
                        <Steps
                            numSteps={NUMBER_OF_STEPS}
                            stepsComplete={stepsComplete}
                        />
                        <div className="flex flex-col justify-start items-center w-full my-4 p-2">
                            {fields[stepsComplete]}
                        </div>
                        <div className="flex w-full justify-end">
                            <button
                                className="px-4 py-1 rounded hover:bg-gray-100 font-bold"
                                style={commonStyles.button}
                                onClick={() => handleSetStep(-1)}
                            >
                                Prev
                            </button>
                            {stepsComplete === NUMBER_OF_STEPS ? (
                                <button
                                    className="px-4 py-1 rounded bg-black text-white"
                                    style={{
                                        backgroundColor: '#053B50',
                                        borderRadius: '30px',
                                        // fontSize: '16px',
                                        // marginLeft: '10px',
                                    }}
                                    //style={commonStyles.nextButton}
                                    onClick={(e) =>
                                        handleRegister(
                                            e,
                                            username,
                                            password,
                                            retypepassword,
                                            email,
                                            firstname,
                                            lastname,
                                            birthdate,
                                            gender,
                                            country,
                                            city
                                        )
                                    }
                                >
                                    Submit
                                </button>
                            ) : (
                                <button
                                    className="px-4 py-1 rounded bg-black text-white"
                                    //style={{
                                    //    backgroundColor: '#053B50',
                                    //    borderRadius: '30px',
                                    // fontSize: '16px',
                                    //    ...responsiveStyles.button,
                                    // marginLeft: '10px',  
                                    // borderWidth: '10px',
                                    //}}
                                    style={commonStyles.nextButton}
                                    onClick={() => { handleSetStep(1); }}
                                >
                                    Next
                                </button>

                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}

const Step1 = ({
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    retypepassword,
    setRetypePassword,
}: {
    username: string
    setUsername: React.Dispatch<React.SetStateAction<string>>
    email: string
    setEmail: React.Dispatch<React.SetStateAction<string>>
    password: string
    setPassword: React.Dispatch<React.SetStateAction<string>>
    retypepassword: string
    setRetypePassword: React.Dispatch<React.SetStateAction<string>>
}) => {
    return (
        <>
            <div className="stepOne float-left w-full">
                <label htmlFor="username" className="relative text-outline-text text-sm bg-white ml-3 px-2 z-40">
                    Username
                </label>
                <br />
                <input
                    name="username"
                    id="username"
                    type="text"
                    className="bg-transparent border-outline-text border-solid border rounded-md z-30 w-full"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    style={{ padding: '10px', marginTop: '-15px', marginBottom: '15px' }}
                />
                <br />
                <label htmlFor="email" className="relative text-outline-text text-sm bg-white ml-3 px-2 z-40">
                    Email
                </label>
                <br />
                <input
                    name="email"
                    id="email"
                    type="email"
                    className="bg-transparent border-outline-text border-solid border rounded-md z-30 w-full"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    style={{ padding: '10px', marginTop: '-15px', marginBottom: '15px' }}
                />
                <br />
                <label htmlFor="password" className="relative text-outline-text text-sm bg-white ml-3 px-2 z-40">
                    Password
                </label>
                <br />
                <input
                    name="password"
                    id="password"
                    type="password"
                    className="bg-transparent border-outline-text border-solid border rounded-md z-30 w-full"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    style={{ padding: '10px', marginTop: '-15px', marginBottom: '15px' }}
                />
                <br />
                <label htmlFor="retype-password" className="relative text-outline-text text-sm bg-white ml-3 px-2 z-40">
                    Retype Password
                </label>
                <br />
                <input
                    name="retype-password"
                    id="retype-password"
                    type="password"
                    className="bg-transparent border-outline-text border-solid border rounded-md z-30 w-full"
                    onChange={(e) => setRetypePassword(e.target.value)}
                    value={retypepassword}
                    style={{ padding: '10px', marginTop: '-15px', marginBottom: '15px' }}
                />
            </div>
        </>
    )
}

const Step2 = ({
    firstname,
    setFirstName,
    lastname,
    setLastName,
    birthdate,
    setBirthDate,
}: {
    firstname: string
    setFirstName: React.Dispatch<React.SetStateAction<string>>
    lastname: string
    setLastName: React.Dispatch<React.SetStateAction<string>>
    birthdate: string
    setBirthDate: React.Dispatch<React.SetStateAction<string>>
}) => {
    return (
        <>
            <div className="stepTwo float-left w-full">
                <label htmlFor="firstname" className="relative text-outline-text text-sm bg-white ml-3 px-2 z-40">
                    First Name
                </label>
                <br />
                <input
                    name="firstname"
                    id="firstname"
                    type="text"
                    className="bg-transparent border-outline-text border-solid border rounded-md z-30 w-full"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstname}
                    style={{ padding: '10px', marginTop: '-15px', marginBottom: '15px' }}
                />
                <br />
                <label htmlFor="lastname" className="relative text-outline-text text-sm bg-white ml-3 px-2 z-40">
                    Last Name
                </label>
                <br />
                <input
                    name="lastname"
                    id="lastname"
                    type="text"
                    className="bg-transparent border-outline-text border-solid border rounded-md z-30 w-full"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastname}
                    style={{ padding: '10px', marginTop: '-15px', marginBottom: '15px' }}
                />
                <br />
                <label htmlFor="birthdate" className="relative text-outline-text text-sm bg-white ml-3 px-2 z-40">
                    Birth Date
                </label>
                <br />
                <input
                    name="birthdate"
                    id="birthdate"
                    type="date"
                    className="bg-transparent border-outline-text border-solid border rounded-md z-30 w-full"
                    onChange={(e) => setBirthDate(e.target.value)}
                    value={birthdate}
                    style={{ padding: '10px', marginTop: '-15px', marginBottom: '15px' }}
                />
            </div>
        </>
    )
}

const Step3 = ({
    gender,
    setGender,
    country,
    setCountry,
    city,
    setCity,
}: {
    gender: string
    setGender: React.Dispatch<React.SetStateAction<string>>
    country: string
    setCountry: React.Dispatch<React.SetStateAction<string>>
    city: string
    setCity: React.Dispatch<React.SetStateAction<string>>
}) => {
    return (
        <>
            <div className="stepThree float-left w-full">
                <label htmlFor="gender" className="relative text-outline-text text-sm bg-white ml-3 px-2 z-40">
                    Gender
                </label>
                <br />
                <select
                    name="gender"
                    id="gender"
                    className="bg-transparent border-outline-text border-solid border rounded-md z-30 w-full"
                    onChange={(e) => setGender(e.target.value)}
                    value={gender}
                    style={{ padding: '10px', marginTop: '-15px', marginBottom: '15px' }}
                >
                    <option value="" disabled>
                        Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-Binary">Non-Binary</option>
                    <option value="Prefer not to Say">Prefer not to Say</option>
                </select>
                <br />
                <label htmlFor="country" className="relative text-outline-text text-sm bg-white ml-3 px-2 z-40">
                    Country
                </label>
                <br />
                <input
                    name="country"
                    id="country"
                    type="text"
                    className="bg-transparent border-outline-text border-solid border rounded-md z-30 w-full"
                    onChange={(e) => setCountry(e.target.value)}
                    value={country}
                    style={{ padding: '10px', marginTop: '-15px', marginBottom: '15px' }}
                />
                <br />
                <label htmlFor="city" className="relative text-outline-text text-sm bg-white ml-3 px-2 z-40">
                    City
                </label>
                <br />
                <input
                    name="city"
                    id="city"
                    type="text"
                    className="bg-transparent border-outline-text border-solid border rounded-md z-30 w-full"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    style={{ padding: '10px', marginTop: '-15px', marginBottom: '15px' }}
                />
            </div>
        </>
    )
}

const Step4 = ({
    username,
    email,
    firstname,
    lastname,
    birthdate,
    gender,
    country,
    city
}: {
    username: string
    email: string
    firstname: string
    lastname: string
    birthdate: string
    gender: string
    country: string
    city: string
}) => {
    return (
        <>
            <div className="stepFour w-[80%]">
                <p className="font-semibold text-outline-text text-lg text-center mt-5 lg:text-xl">Welcome to NurseLink!</p>
                <p className="text-outline-text text-base text-center mb-10 lg:text-lg">Please review your information below.</p>
                <div className="flex xs:flex-col sm:flex-col lg:flex-row">
                    <div className="lg:mr-20 text-base text-outline-text lg:text-lg">
                        <p className="font-semibold">Name</p>
                        <p className="mb-4">{firstname} {lastname}</p>

                        <p className="font-semibold">Username</p>
                        <p className="mb-4">{username}</p>

                        <p className="font-semibold">Email</p>
                        <p className="mb-4">{email}</p>

                        <p className="font-semibold">Birth Date</p>
                        <p className="mb-4">{birthdate}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Gender</p>
                        <p className="mb-4">{gender}</p>

                        <p className="font-semibold">Country</p>
                        <p className="mb-4">{country}</p>

                        <p className="font-semibold">City</p>
                        <p className="mb-4">{city}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterNurse
