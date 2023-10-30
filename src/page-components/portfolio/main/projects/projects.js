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
            <section style={{width: "90%", margin: "0 auto"}} id="projects">
                <div className="rn-portfolio-area rn-section-gap section-separator" id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                            title="Projects"
                                            subtitle="Professional Projects"
                                        >
                                </SectionTitle>
                            </div>
                        </div>

                        <div className="row mt--10 mt_md--10 mt_sm--10" style={{margin: "0 20px 0 20px"}}>
                            <SinglePortfolio
                                data_aos_delay="100"
                                data_bs_target="#modal1"
                                img_src="assets/images/portfolio/project-01.png"
                                category="WEB DEVELOPMENT"
                                title="My Personal Website (V2)">
                            </SinglePortfolio>
                            <ProjectsModal
                                id="modal1"
                                img_src="assets/images/portfolio/project-01.png"
                                category="WEB DEVELOPMENT"
                                title="My Personal Website (V2)"
                                description="After returning to my studies in the spring of 2023, I had the opportunity to revamp my personal portfolio website for my professional development class.
                                I had been wanting to develop a new version of my portfolio prior to enrolling in the class, but I never got around to doing so outside of work, school, and my battle with mental illness in 2022. 
                                Thus, taking professional development was an opportunity for me to hold myself accountable during the school year in completing this project. 
                                I developed a completely new version of my personal website to highlight my background, accomplishments, personal endeavors, and development skill in an organized, visually appealing manner."
                                project_link="">
                            </ProjectsModal>

                            <SinglePortfolio
                                data_aos_delay="300"
                                data_bs_target="#modal2"
                                img_src="assets/images/portfolio/project-02.png"
                                category="WEB DEVELOPMENT"
                                title="My Personal Website (V1)">
                            </SinglePortfolio>
                            <ProjectsModal
                                id="modal2"
                                img_src="assets/images/portfolio/project-02.png"
                                category="WEB DEVELOPMENT"
                                title="My Personal Website (V1)"
                                description="For the first time ever, I coded and deployed my own personal website from scratch in order to display my personal projects and showcase some of my programming skills.
                                After taking the Software Development Methods and Tools course offered at CU Boulder, I learned how to utilize HTML/Bootstrap, CSS, Javascript, NodeJS, PostgreSQL, Multiple APIs, and Heroku to build and host a website. 
                                Thus, I decided to take what I had learned in class and apply it to my own personal portfolio project.">
                            </ProjectsModal>

                            <SinglePortfolio
                                data_aos_delay="500"
                                data_bs_target="#modal3"
                                img_src="assets/images/portfolio/portfolio-03.jpg"
                                category="COMING SOON"
                                title="Coming Soon">
                            </SinglePortfolio>
                            <ProjectsModal
                                id="modal3"
                                img_src="assets/images/portfolio/portfolio-04.jpg"
                                category="COMING SOON"
                                title="Coming Soon"
                                description="Description coming soon.">
                            </ProjectsModal>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}
