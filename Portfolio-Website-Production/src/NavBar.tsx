import {Component} from 'react';
import {FaGithub, FaFacebook, FaLinkedin, FaHackerrank, FaStrikethrough} from "react-icons/fa6";

class navBar extends Component {
    render() {
        return (
            <div className="navbar text-white p-5">



                <div className="flex justify-between items-center">

                    <div className="flex items-center space-x-3">

                        <FaStrikethrough className={"text-3xl"}/><span className="text-3xl font-bold font-mono" id="title-in-bar">Shem </span>
                    </div>
                    <nav>
                        {/*<ul className="flex space-x-12 text-2xl">*/}
                        {/*    <li><a href="#" className="hover:text-gray-300">About</a></li>*/}
                        {/*    <li><a href="#" className="hover:text-gray-300">Projects</a></li>*/}
                        {/*    <li><a href="#" className="hover:text-gray-300">Blog</a></li>*/}
                        {/*</ul>*/}
                    </nav>

                    <nav>
                        <ul className="flex space-x-8 pr-8">


                            <a href="https://github.com/odxscholars">
                                <FaGithub className="text-3xl hover:text-gray-300"/>
                            </a>
                            <a href="https://www.linkedin.com/in/shem-matthew-salih-30737a1b3/">
                                <FaLinkedin className="text-3xl hover:text-gray-300"/>
                            </a>
                            <a href="https://www.facebook.com/shem.salih/">
                                <FaFacebook className="text-3xl hover:text-gray-300"/>
                            </a>
                            <a href="https://www.hackerrank.com/profile/shemsalihte">
                                <FaHackerrank className="text-3xl hover:text-gray-300"/>
                            </a>

                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}


export default navBar;
