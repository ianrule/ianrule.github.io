import React, {Component} from 'react';
import SideNav from './components/sidenav';
import MobileTopBar from './components/mobiletopbar';
import MobilePopupNav from './components/mobilepopupnav';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <SideNav
                    logo_link="assets/images/logo/initals-logo.png"
                    github_link="https://github.com/ianrule"
                    linkedin_link="https://www.linkedin.com/in/ian-rule/"
                    instagram_link="https://www.instagram.com/itsianrule"
                >
                </SideNav>
                <MobileTopBar
                    horizontal_logo_link="assets/images/logo/horizontal-logo.png"
                >
                </MobileTopBar>
                <MobilePopupNav
                    github_link="https://github.com/ianrule"
                    linkedin_link="https://www.linkedin.com/in/ian-rule/"
                    instagram_link="https://www.instagram.com/itsianrule">
                </MobilePopupNav>
            </div>
        );
    }

}