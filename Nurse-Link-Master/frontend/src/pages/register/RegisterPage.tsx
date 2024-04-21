// import React from "react"
// import { Link } from "react-router-dom"

// const RegisterPage = () => {
//     return (
//         <section className="w-full min-h-screen flex flex-col justify-center items-center">
//             <div className="titleAndLogo flex flex-col items-center">
//                 <div className="flex">
//                     <div className="logoPng ">
//                         <img
//                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/480px-Grey_Square.svg.png"
//                             className="object-scale-down h-14 w-14"
//                         />
//                     </div>
//                     <div className="title text-6xl font-bold">NurseLink</div>
//                 </div>
//                 <p className="text-2xl font-semibold">Join us today!</p>
//             </div>
//             <div className="flex gap-5 mt-10 mb-20">
//                 <Link to="/register-nurse">
//                     <div className="font-bold h-52 w-52 rounded-lg cursor-pointer flex justify-center items-center">
//                         <img src= "https://res.cloudinary.com/dpuuajd0k/image/upload/v1698046770/CSSWENG%20GROUP%203/ex3sr1vwtjqfv5b6ovim.png"></img>
//                     </div>
//                 </Link>
//                 <Link to="/register-institute">
//                     <div className="font-bold h-52 w-52 rounded-lg cursor-pointer flex justify-center items-center">
//                         <img src ="https://res.cloudinary.com/dpuuajd0k/image/upload/v1698046770/CSSWENG%20GROUP%203/kin8tyq4s4htzb7zv7yc.png"></img>
//                     </div>
//                 </Link>
//             </div>
//             <div className ="w-1/2 flex gap-5 justify-center items-center">
//                 <hr className = "border-t-2 w-1/2 border-black-900"></hr>
//                 or
//                 <hr className = "border-t-2 w-1/2 border-black-900"></hr>
//             </div>
//             <div>
//                 Already a member? <Link to="/login"><b>Log in.</b></Link>
//             </div>
//         </section>
//     )
// }

// export default RegisterPage


import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const RegisterPage = () => {
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');
    `;
    document.head.appendChild(style);

    const [titleFontSize, setFontSize] = useState('3rem'); // State to store font size

    useEffect(() => {
        const handleResize = () => {
            // Update font size based on window width
            if (window.innerWidth >= 600) { // if its tablet change font to 4rem
                setFontSize('4rem');
            } else {
                setFontSize('3rem');
            }
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <section className="w-full min-h-screen flex flex-col justify-center items-center">
            <div className="titleAndLogo text-center">
                <div className="logoAndTitle flex flex-col items-center">
                    <Link to="/">
                        <div className="logoPng">
                            <img
                                src="https://res.cloudinary.com/dpuuajd0k/image/upload/v1698127920/CSSWENG%20GROUP%203/qt4ozeain5lqwtz5jmb3.png"
                                style={{ width: "70px", height: "70px" }}
                            />
                        </div>
                    </Link>
                    <div className="title font-bold" style={{ fontSize: titleFontSize, fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#053B50' }}>NurseLink</div>
                </div>
                <p className="text-2xl font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: '#053B50' }}>Join us today!</p>
            </div>
            <div className="flex flex-col gap-5 mt-10 mb-20 sm:flex-row">
                <Link to="/register-institute">
                    <div className="font-bold rounded-lg cursor-pointer" style={{ flex: "1" }}>
                        <img src="https://res.cloudinary.com/dpuuajd0k/image/upload/v1698127921/CSSWENG%20GROUP%203/sjavgndnfnyd9a8pqqye.png" alt="Institute Registration" />
                        <div className="w-full text-center font-montserrat font-medium">
                            Add Institution
                        </div>
                    </div>
                </Link>
                <Link to="/register-nurse">
                    <div className="font-bold rounded-lg cursor-pointer" style={{ flex: "1" }}>
                        <img src="https://res.cloudinary.com/dpuuajd0k/image/upload/v1698127921/CSSWENG%20GROUP%203/beaagtyscoc3p2euwxl1.png" alt="Nurse Registration" />
                        <div className="w-full text-center font-montserrat font-medium">Add Nurse</div>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default RegisterPage


