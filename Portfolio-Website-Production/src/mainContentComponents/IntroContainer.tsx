import IntroTypingAnimation from "./IntroTypingAnimation.tsx";
import PictureComponent from "./PictureComponent.tsx";

export const IntroContainer = () => {
    return (
        <>
            <div className="intro-container grid grid-cols-2 pr-80 pl-80 pt-20  pb-72 bg-green-950 ">

                <div className="grid grid-rows-2 grid-flow-col gap-4 text-white pt-40 pr-20">
                    <IntroTypingAnimation/>
                    {/*<Credentials/>*/}

                </div>
                <div className=""><PictureComponent/></div>
            </div>
        </>
    );
};
