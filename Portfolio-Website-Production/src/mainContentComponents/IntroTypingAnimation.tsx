import {useState} from 'react';
import {TypeAnimation} from "react-type-animation";


function IntroTypingAnimation() {
    const [isDoneTyping, setIsDoneTyping] = useState(false);

    const onAnimationComplete = () => {
        setIsDoneTyping(true);
    };

    return (
        <div className="flex flex-col">
            <TypeAnimation
                sequence={["Hi!", 2000, "Hi! My name is Shem Matthew Salih", 1500, onAnimationComplete]}
                cursor={!isDoneTyping} // Set cursor to false after the animation completes
                style={{
                    fontSize: '1.5rem',
                    color: 'black',


                    fontFamily: 'Montserrat',
                    textAlign: 'left'
                }}
            />
            {isDoneTyping && (
                <TypeAnimation
                    sequence={["I'm a software developer", 1500, "I'm a data scientist", 1500, "I'm a problem solver"]}
                    style={{
                        fontSize: '1.5rem',
                        color: 'black',
                        fontFamily: 'Montserrat',
                        textAlign: 'left'
                    }}
                    speed={50}
                    cursor={false}
                    repeat={Infinity}

                />
            )}
        </div>
    );
}

export default IntroTypingAnimation;
