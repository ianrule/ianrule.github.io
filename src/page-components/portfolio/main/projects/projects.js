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
                                        &bull; Created an organized React application out of a styling template I purchased for the site
                                        <br></br>
                                        &bull; Researched tools and technologies to help me deploy my React application to GitHub Pages
                                        <br></br>
                                        &bull; Created a first version of the site using Bootstrap, Node.js, and Heroku for deployment
                                        <br></br>
                                        &bull; Problem-solved my way through DNS configuration and downtime issues with version one's deployment
                                    </span>
                                }
                            >
                            </ProjectsModal>

                            <SinglePortfolio
                                data_aos_delay="300"
                                data_bs_target="#unpluq-modal"
                                img_src="assets/images/projects/unpluq.png"
                                category="WEB & SERVER DEVELOPMENT"
                                title="Unpluq (Senior Capstone)">
                            </SinglePortfolio>
                            <ProjectsModal
                                id="unpluq-modal"
                                img_src="assets/images/projects/unpluq.png"
                                category="WEB & SERVER DEVELOPMENT"
                                title="Unpluq (Senior Capstone)"
                                description={
                                    <span>
                                        &bull; Current project manager of a 4-student senior project team tasked with developing new software for the productivity company Unpluq
                                    </span>
                                }
                            >
                            </ProjectsModal>

                            <SinglePortfolio
                                data_aos_delay="500"
                                data_bs_target="#icecream-simulator-modal"
                                img_src="assets/images/projects/icecream-simulator.png"
                                category="OBJECT-ORIENTED PROGRAMMING"
                                title="Ice Cream Store Simulator">
                            </SinglePortfolio>
                            <ProjectsModal
                                id="icecream-simulator-modal"
                                img_src="assets/images/projects/icecream-simulator.png"
                                category="OBJECT-ORIENTED PROGRAMMING"
                                title="Ice Cream Store Simulator"
                                description={
                                    <span>
                                        &bull; Project manager of a 3-student project team tasked with the development of an ice cream store simulator for an object-oriented analysis/design course at CU Boulder
                                        <br></br>
                                        &bull; Applied object-oriented principles to the back-end and front-end develpoment of the simulator and the creation of 3 UML diagrams
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
