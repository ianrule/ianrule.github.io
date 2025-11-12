import React, {Component} from 'react';
import SectionTitle from '../section-components/sectiontitle';
import SinglePortfolio from './single-components/singleportfolio';
import ProjectsModal from './single-components/projectsmodal';
import { PortfolioDataContext } from '../../../../services/PortfolioDataService';

export default class Projects extends Component {
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
        const projectsData = portfolioData?.projects || { items: [] };
        const projects = projectsData.items || [];
        
        // AOS delay values: 100, 300, 500
        const aosDelays = [100, 300, 500];

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
                            {projects.map((project, index) => (
                                <React.Fragment key={index}>
                                    <SinglePortfolio
                                        data_aos_delay={aosDelays[index] || 500}
                                        data_bs_target={`#project-${index}-modal`}
                                        img_src={project.image_url}
                                        category={project.category}
                                        title={project.title}
                                    />
                                    <ProjectsModal
                                        id={`project-${index}-modal`}
                                        img_src={project.image_url}
                                        category={project.category}
                                        title={project.title}
                                        description={project.description}
                                    />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
