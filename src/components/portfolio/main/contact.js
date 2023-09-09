import React, {Component} from 'react';
import ContactCard from './contact/contactcard';
import ContactForm from './contact/contactform';

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <div className="rn-contact-area rn-section-gap section-separator" id="contacts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span className="subtitle">Contact</span>
                                <h2 className="title">Connect With Me</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">

                        <div className="col-lg-1"></div>
                        <ContactCard
                            contact_picture="assets/images/contact/contact-picture.jpg"
                            title="CS Student at the University of Colorado Boulder"
                            description="If you have any questions or concerns, feel free to contact me at any time."
                            phone_number="3036568482"
                            email="rule.ian@gmail.com"
                            github_link="https://github.com/ianrule"
                            linkedin_link="https://www.linkedin.com/in/ian-rule/"
                            instagram_link="https://www.instagram.com/itsianrule">
                        </ContactCard>
                        <div className="col-lg-1"></div>

                    </div>
                </div>
            </div>
        );
    }

}
