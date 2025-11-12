import React, {Component} from 'react';
import SectionTitle from '../section-components/sectiontitle';
import ContactCard from './single-components/contactcard';
import { PortfolioDataContext } from '../../../../services/PortfolioDataService';

export default class Contact extends Component {
    static contextType = PortfolioDataContext;

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        const { portfolioData } = this.context;
        
        // Get the title from the first work experience entry
        const currentJobTitle = portfolioData?.resume?.["Work Experience"]?.[0]?.title || "Unspecified Position";

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
                                title={currentJobTitle}
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
