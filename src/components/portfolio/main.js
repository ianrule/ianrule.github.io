import React, {Component} from 'react';
import Home from './main/home';
import AboutMe from './main/aboutme';
import Resume from './main/resume';
import Projects from './main/projects';
import Hobbies from './main/hobbies';
import Contact from './main/contact';
import Footer from './main/footer';
import BackToTop from './main/backtotop';

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
                <Home></Home>

                {/* About Me */}
                <AboutMe></AboutMe>

                {/* Resume */}
                <Resume></Resume>

                {/* Deveopment Projects */}
                <Projects></Projects>

                {/* Hobbies */}
                <Hobbies></Hobbies>

                {/* Contact */}
                <Contact></Contact>

                {/* Footer */}
                <Footer
                    logo_src="assets/images/logo/logo.png"
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