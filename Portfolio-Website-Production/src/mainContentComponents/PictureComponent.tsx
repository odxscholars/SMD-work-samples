import {Component} from 'react';
import authorPic from "../assets/pic2.jpg";
class pictureComponent extends Component {
    render() {
        return (
            <div>
                <img src={authorPic} alt="author" className="rounded-full w-90 h-90 mx-auto"/>
            </div>
        );
    }
}

export default pictureComponent;