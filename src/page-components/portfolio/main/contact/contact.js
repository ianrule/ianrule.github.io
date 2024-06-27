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
            <section id="contactme">
                <div className="rn-contact-area rn-section-gap section-separator" id="contacts">
                    <div className="container">
                        {/* section title */}
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    title="Contact"
                                    subtitle="Contact Information"
                                >
                                </SectionTitle>
                            </div>
                        </div>

                        {/* contact card */}
                        <div className="row mt--38 mt_md--38 mt_sm--38 mt-contact-sm ml--20 mr--20">
                            <ContactCard
                                contact_picture="assets/images/contact/contact-pic.png"
                                title="Ecommerce & Operations Manager at Fast-Fix Denver"
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
