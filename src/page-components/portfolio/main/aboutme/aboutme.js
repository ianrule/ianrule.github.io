import React, {Component} from 'react';
import SectionTitle from '../section-components/sectiontitle';
import SingleService from './single-components/singleservice';
import * as Icon from 'react-feather';

export default class AboutMe extends Component {

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
                                    &emsp;&emsp;Hello! I'm Ian Rule, a recent computer science graduate with a passion for front-end development, specializing in React and JavaScript. I have an extensive track record of leading projects and collaborating with diverse teams to deliver innovative solutions. Currently, I'm expanding my expertise in back-end technologies like Node.js and cloud platforms, while learning more about AI-driven software development. I am seeking a role where I can make meaningful contributions with my front-end expertise as I transition into full-stack development.
                                    <span id="aboutMeMoreContent" style={{display: "none"}}>
                                        <br></br>
                                        &emsp;&emsp;Beyond my professional interests, I enjoy listening to music, focusing on personal development and mental wellness, working out, exploring the outdoors, and traveling. I am dedicated to expanding my knowledge and skill set, and I strive to leave a positive impact in everything I do.
                                        <br></br>
                                        &emsp;&emsp;I developed the following digital portfolio to share my background, professional accomplishments, and personal endeavors in a more organized and digestable manner. Below you will learn more about me and my experience. If you have any questions or concerns, feel free to connect with me via LinkedIn or email.
                                    </span>
                                </p>

                                {/* read more button */}
                                <div className ="mt--30" style={{textAlign: "center"}}>
                                    <button type="button" className="rn-btn" id="aboutMeMoreBtn" style={{width: "auto"}} onClick={() => this.expand()}>READ MORE</button>
                                </div>
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