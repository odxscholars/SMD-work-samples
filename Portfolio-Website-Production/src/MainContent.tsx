import {Component} from 'react';
import {IntroContainer} from "./mainContentComponents/IntroContainer.tsx";


class mainContent extends Component {
    render() {
        return (
            <>
                <div className={"intro-container"}>
                    <IntroContainer/>
                </div>

            </>
        );
    }
}


export default mainContent;
