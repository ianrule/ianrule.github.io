import React, {Component} from 'react';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <section id="home" className="slider-style-5 rn-section-gap pb--110 align-items-center with-particles">
                <div id="particles-js"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-inner">
                                <div className="thumbnail gradient-border gradient-animation">
                                    <img id="border" className="gradient-border" src="assets/images/slider/profile-pic.JPG" alt=""></img>
                                </div>
                                <h1>Ian Rule</h1>
                                <span className="cd-headline clip is-full-width">
                                    <span>I am a</span>
                                <span className="cd-words-wrapper">
                                        <b className="is-visible">&nbsp;Developer.</b>
                                        <b className="is-hidden">&nbsp;DJ.</b>
                                        <b className="is-hidden">&nbsp;Mental Health Advocate.</b>
                                    </span>
                                </span>
                                <div className="button-area">
                                    <a className="rn-btn" href="/#contacts"><span>CONTACT ME</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}