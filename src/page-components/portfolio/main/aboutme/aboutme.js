import React, {Component} from 'react';
import SectionTitle from '../section-components/sectiontitle';
import SingleService from './single-components/singleservice';
import * as Icon from 'react-feather';
import { PortfolioDataContext } from '../../../../services/PortfolioDataService';

export default class AboutMe extends Component {
    static contextType = PortfolioDataContext;

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    expand() {
        // Initialize variables
        var more_content = document.getElementById("aboutMeMoreContent");
        var more_button = document.getElementById("aboutMeMoreBtn");

        // Change display properties
        if (more_content.style.display === "none") {
            more_content.style.display = "inline";
            more_button.innerHTML = "READ LESS";
        } else {
            more_content.style.display = "none";
            more_button.innerHTML = "READ MORE";
        }
    }

    render() {
        // Get bio data from context and split it
        const { portfolioData } = this.context;
        const bio = portfolioData?.about?.bio || '';
        const bioChunks = bio.split('\n\n');
        const mainText = bioChunks[0] || '';
        const moreContent = bioChunks.slice(1);

        return (
            <section id="aboutme">
                <div className="rn-service-area rn-section-gap section-separator" id="features">
                    <div className="container">
                        
                        {/* about me reading */}
                        <div className="row ml--20 mr--20">
                            <div className="col-lg-12">
                                {/* section title */}
                                <SectionTitle
                                    title="About Me"
                                    subtitle="Who I Am & What I Do"
                                >
                                </SectionTitle>
                                
                                {/* paragraph */}
                                <p className="description mt--38">
                                    &emsp;&emsp;{mainText}
                                    {moreContent.length > 0 && (
                                        <span id="aboutMeMoreContent" style={{display: "none"}}>
                                            {moreContent.map((chunk, index) => (
                                                <React.Fragment key={index}>
                                                    <br/>
                                                    &emsp;&emsp;{chunk}
                                                </React.Fragment>
                                            ))}
                                        </span>
                                    )}
                                </p>

                                {/* read more button - only show if there's more content */}
                                {moreContent.length > 0 && (
                                    <div className="mt--30" style={{textAlign: "center"}}>
                                        <button 
                                            type="button" 
                                            className="rn-btn" 
                                            id="aboutMeMoreBtn" 
                                            style={{width: "auto"}} 
                                            onClick={() => this.expand()}
                                        >
                                            READ MORE
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* about me cards */}
                        <div className="row mt--10 ml--20 mr--20">
                            <SingleService 
                                data_aos_delay="100" 
                                feather_icon={<Icon.Briefcase></Icon.Briefcase>} 
                                title="Resume" 
                                description="View my resume!"
                                link="/#myresume"
                                hobby_type="">
                            </SingleService>

                            <SingleService 
                                data_aos_delay="300" 
                                feather_icon={<Icon.Layers></Icon.Layers>} 
                                title="Professional Projects" 
                                description='Explore my professional projects!'
                                link="/#projects"
                                hobby_type="">
                            </SingleService>

                            <SingleService 
                                data_aos_delay="500" 
                                feather_icon={<Icon.Smile></Icon.Smile>} 
                                title="Personal Interests" 
                                description="Learn about my love for music and personal development!"
                                link="/#interests"
                                hobby_type="dj">
                            </SingleService>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}