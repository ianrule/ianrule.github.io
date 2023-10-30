import React, {Component} from 'react';
import * as Icon from 'react-feather';

export default class SideNav extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <div className="d-none d-xl-block">
                <header className="rn-header-area d-flex align-items-start flex-column left-header-style">
                    {/* logo area */}
                    <div className="logo-area">
                        <a href="/"><img src={this.props.logo_link} alt="Ian Rule's logo"></img></a>
                    </div>

                    {/* invisible header */}
                    <h1 className="sr-only">Welcome to Ian Rule's Portfolio!</h1>

                    {/* main navigation */}
                    <nav id="sideNavs" className="mainmenu-nav navbar-example2 onepagenav">
                        <h2 className="sr-only">Main Navigation</h2>
                        <ul className="primary-menu nav nav-pills">
                            <li className="nav-item current"><a className="nav-link smoth-animation-two" href="#home"><i><Icon.Home></Icon.Home></i> Home</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#aboutme"><i><Icon.User></Icon.User></i> About Me</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#resumepage"><i><Icon.Briefcase></Icon.Briefcase></i> Resume</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#projects"><i><Icon.Layers></Icon.Layers></i> Projects</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#hobbies"><i><Icon.Smile></Icon.Smile></i> Hobbies</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#contactme"><i><Icon.MessageCircle></Icon.MessageCircle></i> Contact</a></li>
                        </ul>
                    </nav>

                    {/* social links */}
                    <div className="footer">
                        <div className="social-share-style-1 mt--40">
                            <h2 className="sr-only">Social Links</h2>
                            <span className="title">connect with me</span>
                            <ul className="social-share d-flex liststyle">
                                <li className="github"><a href={this.props.github_link} target="_blank" rel="noopener noreferrer"><Icon.GitHub></Icon.GitHub></a></li>
                                <li className="linkedin"><a href={this.props.linkedin_link} target="_blank" rel="noopener noreferrer"><Icon.Linkedin></Icon.Linkedin></a></li>
                                <li className="instagram"><a href={this.props.instagram_link} target="_blank" rel="noopener noreferrer"><Icon.Instagram></Icon.Instagram></a></li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
        );
    }

}