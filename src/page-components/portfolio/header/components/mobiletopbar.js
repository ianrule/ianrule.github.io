import React, {Component} from 'react';

export default class MobileTopBar extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <div className="header-style-2 d-block d-xl-none rn-header header--sticky">
                <div className="row align-items-center">
                    {/* horizontal logo */}
                    <div className="col-6">
                        <div className="logo">
                            <h1 className="sr-only">Welcome to Ian Rule's Portfolio!</h1>
                            <a href="index.html"><img src={this.props.horizontal_logo_link} alt="Ian Rule's horizontal logo"></img></a>
                        </div>
                    </div>

                    {/* hamberger menu */}
                    <div className="col-6">
                        <div className="header-right text-end">
                            <div className="hamberger-menu">
                                <h2 className="sr-only">Click for Main Navigation</h2>
                                <i id="menuBtn" className="feather-menu humberger-menu"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}