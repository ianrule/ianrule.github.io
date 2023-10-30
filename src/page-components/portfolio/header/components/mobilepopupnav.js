import React, {Component} from 'react';
import * as Icon from 'react-feather';

export default class MobilePopupNav extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <div className="popup-mobile-menu">
                <div className="inner">
                    {/* menu header */}
                    <div className="menu-top">
                        <div className="menu-header">
                            {/* logo */}
                            <a className="logo" href="index.html"><img src="assets/images/logo/initials-logo-small.png" alt="Ian Rule's logo"></img></a>

                            {/* close button */}
                            <div className="close-button">
                                <button className="close-menu-activation close"><i><Icon.X></Icon.X></i></button>
                            </div>
                        </div>
                        <p className="discription">Ian Rule's Portfolio</p>
                    </div>

                    {/* menu content */}
                    <div className="content">
                        {/* main navigation */}
                        <p className="sr-only">Main Navigation</p>
                        <ul className="primary-menu nav nav-pills">
                            <li className="nav-item"><a className="nav-link smoth-animation-two active" href="#home">Home</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#aboutme">About Me</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#resumepage">Resume</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#projects">Projects</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#hobbies">Hobbies</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#contactme">Contact</a></li>
                        </ul>

                        {/* social links */}
                        <p className="sr-only">Social Links</p>
                        <div className="social-share-style-1 mt--40">
                            <span className="title">connect with me</span>
                            <ul className="social-share d-flex liststyle">
                                <li className="github"><a href={this.props.github_link} target="_blank" rel="noopener noreferrer"><Icon.GitHub></Icon.GitHub></a></li>
                                <li className="linkedin"><a href={this.props.linkedin_link} target="_blank" rel="noopener noreferrer"><Icon.Linkedin></Icon.Linkedin></a></li>
                                <li className="instagram"><a href={this.props.instagram_link} target="_blank" rel="noopener noreferrer"><Icon.Instagram></Icon.Instagram></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}