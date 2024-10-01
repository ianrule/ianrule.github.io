import React, {Component} from 'react';
import SectionTitle from '../section-components/sectiontitle';
import SinglePortfolio from './single-components/singleportfolio';
import ProjectsModal from './single-components/projectsmodal';

export default class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <section id="projects">
                <div className="rn-portfolio-area rn-section-gap section-separator" id="portfolio">
                    <div className="container">
                        {/* section title */}
                        <div className="row ml--20 mr--20">
                            <div className="col-lg-12">
                                <SectionTitle
                                            title="Projects"
                                            subtitle="Professional Projects"
                                        >
                                </SectionTitle>
                            </div>
                        </div>

                        {/* projects */}
                        <div className="row ml--20 mr--20">
                            <SinglePortfolio
                                data_aos_delay="100"
                                data_bs_target="#ianrule-modal"
                                img_src="assets/images/projects/ianrule.png"
                                category="WEB DEVELOPMENT"
                                title="ianrule.com">
                            </SinglePortfolio>
                            <ProjectsModal
                                id="ianrule-modal"
                                img_src="assets/images/projects/ianrule.png"
                                category="WEB DEVELOPMENT"
                                title="ianrule.com"
                                description={
                                    <span>
                                        &bull; Customized and deployed my portfolio website using React, Node.js, SASS, and GitHub Pages to showcase my expertise in web technologies.
                                        <br></br>
                                        &bull; Resolved DNS configuration and downtime issues during the initial deployment to Heroku.
                                    </span>
                                }
                            >
                            </ProjectsModal>

                            <SinglePortfolio
                                data_aos_delay="300"
                                data_bs_target="#unpluq-modal"
                                img_src="assets/images/projects/unpluq.png"
                                category="WEB DEVELOPMENT"
                                title="Unpluq Broswer Extension">
                            </SinglePortfolio>
                            <ProjectsModal
                                id="unpluq-modal"
                                img_src="assets/images/projects/unpluq.png"
                                category="WEB & SERVER DEVELOPMENT"
                                title="Unpluq Browser Extension"
                                description={
                                    <span>
                                        &bull; Led a team of 4 students on a senior software engineering project sponsored by Unpluq.
                                        <br></br>
                                        &bull; Developed a custom UI for a new browser extension using HTML, SASS, JavaScript, and Webpack.
                                        <br></br>
                                        &bull; Integrated front-end code with the Unpluq authentication API, mobile applications, and Google SSO.
                                    </span>
                                }
                            >
                            </ProjectsModal>

                            <SinglePortfolio
                                data_aos_delay="500"
                                data_bs_target="#literature-review-modal"
                                img_src="assets/images/projects/literature-review.png"
                                category="Computer Security"
                                title="Literature Review on Insecure Code Utilization">
                            </SinglePortfolio>
                            <ProjectsModal
                                id="literature-review-modal"
                                img_src="assets/images/projects/literature-review.png"
                                category="Computer Security"
                                title="Literature Review on Insecure Code Utilization"
                                description={
                                    <span>
                                        &bull; Analyzed and synthesized findings from 9 separate scholarly articles on security concerns in Stack Overflow code, identifying key vulnerabilities and patterns.
                                        <br></br>
                                        &bull; Honed professional writing skills by examining and emulating the structure and literary practices of exemplary computer science literature reviews.
                                        <br></br>
                                        &bull; Deepened my understanding of computer security vulnerabilities, leading to a more comprehensive approach to identifying and mitigating potential risks in software development.
                                    </span>
                                }
                            >
                            </ProjectsModal>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}
