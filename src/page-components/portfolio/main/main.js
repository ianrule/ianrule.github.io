import React, {Component} from 'react';
import Home from './home/home';
import AboutMe from './aboutme/aboutme';
import Resume from './resume/resume';
import Projects from './projects/projects';
import Interests from './interests/interests';
import Contact from './contact/contact';
import Footer from './footer/footer';
import BackToTop from './backtotop';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <main className="page-wrapper-two">
                {/* Home Page */}
                <Home
                    profile_pic_link="assets/images/home/profile-pic.png"
                >
                </Home>

                {/* About Me */}
                <AboutMe></AboutMe>

                {/* Resume */}
                <Resume></Resume>

                {/* Deveopment Projects */}
                <Projects></Projects>

                {/* Hobbies */}
                <Interests></Interests>

                {/* Contact */}
                <Contact></Contact>

                {/* Footer */}
                <Footer
                    logo_src="assets/images/logo/text-logo.png"
                    description={
                    <p className="description mt--30">
                        Created with Node.js and React. Website theme purchased from <a target="_blank" rel="noopener noreferrer" href="https://themeforest.net/user/rainbow-themes/portfolio">Rainbow-Themes.</a>
                    </p>}>
                </Footer>

                {/* Back To Top Button */}
                <BackToTop></BackToTop>
            </main>
        );
    }

}