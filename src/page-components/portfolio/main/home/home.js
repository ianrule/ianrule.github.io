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
                {/* particles */}
                <div id="particles-js"></div>

                {/* home content */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-inner">
                                {/* profile pic */}
                                <div className="thumbnail gradient-border gradient-animation">
                                    <img id="border" className="gradient-border" src={this.props.profile_pic_link} alt=""></img>
                                </div>

                                {/* main heading */}
                                <h1>Ian Rule</h1>

                                {/* passion statements */}
                                <span className="cd-headline clip is-full-width">
                                    <span>Passionate about</span>
                                    <span className="cd-words-wrapper">
                                        <b className="is-visible pl--10">Software.</b>
                                        <b className="is-hidden pl--10">DJing.</b>
                                        <b className="is-hidden pl--10">Mental Health.</b>
                                    </span>
                                </span>

                                {/* contact me button */}
                                <div className="button-area">
                                    <a className="rn-btn" href="/#contactme"><span>CONTACT ME</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}