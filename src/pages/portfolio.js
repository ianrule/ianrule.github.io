import React, {Component} from 'react';
import Header from '../page-components/portfolio/header/header';
import Main from '../page-components/portfolio/main/main';

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
        this.addScript("assets/js/particles-script.js");
    }

    render() {
        return (
            <div>
                <Header></Header>
                <Main></Main>
            </div>
        );
    }

}