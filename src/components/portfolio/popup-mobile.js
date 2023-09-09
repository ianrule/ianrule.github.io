import React, {Component} from 'react';
import * as Icon from 'react-feather';

export default class PopupMobile extends Component {

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
                    <div className="menu-top">
                        <div className="menu-header">
                            <a className="logo" href="index.html">
                                <img src="assets/images/logo/IR-small.JPG" alt="Personal Portfolio" style={{borderRadius: "50%"}}></img>
                            </a>
                            <div className="close-button">
                                <button className="close-menu-activation close"><i><Icon.X></Icon.X></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <ul className="primary-menu nav nav-pills">
                            <li className="nav-item"><a className="nav-link smoth-animation-two active" href="#home">Home</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#features">About Me</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#resume">Resume</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#portfolio">Projects</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#pricing">Hobbies</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#contacts">Contact</a></li>
                        </ul>
                        <div className="social-share-style-1 mt--40">
                            <span className="title">connect with me</span>
                            <ul className="social-share d-flex liststyle">
                                <li className="github">
                                    <a href={this.props.github_link} target="_blank" rel="noopener noreferrer"><Icon.GitHub></Icon.GitHub></a>
                                </li>
                                <li className="linkedin">
                                    <a href={this.props.linkedin_link} target="_blank" rel="noopener noreferrer"><Icon.Linkedin></Icon.Linkedin></a>
                                </li>
                                <li className="instagram">
                                    <a href={this.props.instagram_link}><Icon.Instagram></Icon.Instagram></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}