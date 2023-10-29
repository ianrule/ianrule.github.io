import React, {Component} from 'react';
import SectionTitle from '../section-components/sectiontitle';
import ContactCard from './single-components/contactcard';

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
            <section style={{width: "90%", margin: "0 auto"}} id="contactme">
                <div className="rn-contact-area rn-section-gap section-separator" id="contacts">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                    {/* section title */}
                                    <SectionTitle
                                                title="Contact"
                                                subtitle="Contact Information"
                                            >
                                    </SectionTitle>
                            </div>
                        </div>

                        <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">

                            <div className="col-lg-1"></div>
                            <ContactCard
                                contact_picture="assets/images/slider/profile-pic.JPG"
                                title="CS Student at the University of Colorado Boulder"
                                description="If you have any questions or concerns, feel free to contact me at any time."
                                email="rule.ian@gmail.com"
                                github_link="https://github.com/ianrule"
                                linkedin_link="https://www.linkedin.com/in/ian-rule/"
                                instagram_link="https://www.instagram.com/itsianrule">
                            </ContactCard>
                            <div className="col-lg-1"></div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }

}
