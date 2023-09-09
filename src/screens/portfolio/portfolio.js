import React, {Component} from 'react';
import Header from "../../components/portfolio/header";
import HeaderMobile from '../../components/portfolio/header-mobile';
import Main from '../../components/portfolio/main';
import PopupMobile from '../../components/portfolio/popup-mobile';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    addScript(url) {
        const script = document.createElement('script');
        script.src = url;
        script.async = false;
        document.body.appendChild(script);
    }

    componentDidMount() {
        AOS.init();
        this.addScript("assets/js/vendor/jquery.js");
        this.addScript("assets/js/vendor/modernizer.min.js");
        this.addScript("assets/js/vendor/feather.min.js");
        this.addScript("assets/js/vendor/slick.min.js");
        this.addScript("assets/js/vendor/bootstrap.js");
        this.addScript("assets/js/vendor/text-type.js");
        this.addScript("assets/js/vendor/wow.js");
        this.addScript("assets/js/vendor/aos.js");
        this.addScript("assets/js/vendor/particles.js");
        this.addScript("assets/js/vendor/jquery-one-page-nav.js");
        this.addScript("assets/js/main.js");
        this.addScript("assets/js/test.js");
    }

    render() {
        return (
            <div>
                <Header
                    github_link="https://github.com/ianrule"
                    linkedin_link="https://www.linkedin.com/in/ian-rule/"
                    instagram_link="https://www.instagram.com/itsianrule">
                </Header>
                <HeaderMobile></HeaderMobile>
                <PopupMobile
                    github_link="https://github.com/ianrule"
                    linkedin_link="https://www.linkedin.com/in/ian-rule/"
                    instagram_link="https://www.instagram.com/itsianrule">
                </PopupMobile>
                <Main></Main>
            </div>
        );
    }

}