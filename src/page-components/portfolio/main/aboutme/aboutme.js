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
            <section style={{width: "90%", margin: "0 auto", textAlign: "justify"}} id="aboutme">
                <div className="rn-service-area rn-section-gap section-separator" id="features">
                    <div className="container">
                        
                        {/* about me reading */}
                        <div className="row" style={{margin: "0px 20px 0px 20px"}}>
                            <div className="col-lg-12">
                                {/* section title */}
                                <SectionTitle
                                    title="About Me"
                                    subtitle="Who I Am & What I Do"
                                >
                                </SectionTitle>
                                
                                {/* paragraph */}
                                <p className="description mt--38">
                                    &emsp;&emsp;Hello! My name is Ian Rule, and I am a fifth-year engineering student at the University of Colorado Boulder. I am currently pursuing a B.S. (Bachelor of Science) in Computer Science in hopes to work in the field of software development. I am very passionate about technological innovation and the problems it can solve, and I love to evolve with new technology. In my free time, I enjoy DJing, mental health advocacy, working out, being outdoors, spending time with family and friends, listening to music, traveling, and taking in all of the knowledge this world has to offer. I am truly blessed to live the life that I do, and I want to leave as positive of an impact as I can on this world.
                                    <span id="aboutMeMoreContent" style={{display: "none"}}>
                                        <br></br>
                                        &emsp;&emsp;Throughout my educational journey, I have been exposed to many of the major computer science specializations. I have taken classes in topics including, but not limited to, network systems, artifical intelligence, data science, cybersecurity, database management, software development, and web technologies. I was also the project manager for two of the major software development projects I completed for college credit. Outside of the classroom, I have worked as software development intern for a Boulder-based startup by the name of Swotknot. Finally, I have many years of experience in web technologies dating back to early high school.
                                        <br></br>
                                        &emsp;&emsp;I created the following digital portfolio for multiple reasons. For one, I wanted to share my background, professional accomplishments, and personal endeavors in an organized, visually appealing manner. Additionally, I wanted to show off my knowledge of web technologies and web development; I built my website from the ground up (outside of purchasing the styling template online).
                                        <br></br>
                                        &emsp;&emsp;Below you will find my resume, my professional projects, my hobbies and interests, and my contact information. If you have any questions or concerns, feel free to contact me at any time!
                                    </span>
                                </p>

                                {/* read more button */}
                                <div className ="aboutMeBtn mt--38" style={{textAlign: "center"}}>
                                    <button type="button" className="rn-btn" id="aboutMeMoreBtn" style={{width: "auto"}} onClick={() => this.expand()}>READ MORE</button>
                                </div>
                            </div>
                        </div>

                        {/* about me cards */}
                        <div className="row mt--38 mt_md--38 mt_sm--0" style={{margin: "0 20px 0 20px"}}>
                            <SingleService 
                                data_aos_delay="100" 
                                feather_icon={<Icon.HardDrive></Icon.HardDrive>} 
                                title="Software Development" 
                                description="Check out a few of my projects!"
                                link="/#projects"
                                hobby_type="">
                            </SingleService>

                            <SingleService 
                                data_aos_delay="300" 
                                feather_icon={<Icon.Headphones></Icon.Headphones>} 
                                title="DJing" 
                                description='Learn more about my DJ background!'
                                link="/#hobbies"
                                hobby_type="dj">
                            </SingleService>

                            <SingleService 
                                data_aos_delay="500" 
                                feather_icon={<Icon.Heart></Icon.Heart>} 
                                title="Mental Wellness" 
                                description="Learn more about my mental health journey!"
                                link="/#hobbies"
                                hobby_type="mh">
                            </SingleService>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}