import React, {Component} from 'react';

export default class HeaderMobile extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <div className="header-style-2 d-block d-xl-none">
                <div className="row align-items-center">
                    <div className="col-6">
                        <div className="logo">
                            <a href="index.html">
                                <img src="assets/images/logo/logo.png" alt="Logo"></img>
                            </a>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="header-right text-end">
                            <div className="hamberger-menu">
                                <i id="menuBtn" className="feather-menu humberger-menu"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}