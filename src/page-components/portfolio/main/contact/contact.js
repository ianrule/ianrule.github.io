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

                        <div className="row mt--38 mt_md--38 mt_sm--38 mt-contact-sm" style={{width: "90%", margin: "0 auto", padding: "0 20px 0 20px"}}>
                            <ContactCard
                                contact_picture="assets/images/slider/profile-pic.png"
                                title="CS Student at the University of Colorado Boulder"
                                email="rule.ian@gmail.com"
                                github_link="https://github.com/ianrule"
                                linkedin_link="https://www.linkedin.com/in/ian-rule/"
                                instagram_link="https://www.instagram.com/itsianrule">
                            </ContactCard>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}
