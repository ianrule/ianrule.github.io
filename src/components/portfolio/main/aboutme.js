import React, {Component} from 'react';
import SingleService from './aboutme/singleservice';
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
            more_button.innerHTML = "Read Less";
        } else {
            more_content.style.display = "none";
            more_button.innerHTML = "Read More";
        }

    }

    render() {
        return (
            <div className="rn-service-area rn-section-gap section-separator" id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true">
                                <span className="subtitle">About Me</span>
                                <h2 className="title">Who I Am & What I Do</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row row--25 mt_md--10 mt_sm--10">

                        <div className="about-me-desc">
                            <p className="description">
                                &emsp;&emsp;Hello! My name is Ian Rule, and I am a fourth-year engineering student at the University of Colorado Boulder. 
                                I am currently pursuing a bachelor of science in computer science in hopes to become a full stack software developer after I graduate. 
                                I am very passionate about technological innovation and the problems it can solve, and I love to evolve with new technology.
                                <br></br>
                                &emsp;&emsp;In my free time, I enjoy working out, being outdoors, spending time with family and friends, listening to music, DJing, traveling, and taking in all of the knowledge this world has to offer. 
                                I also have a strong passion for mental wellness. 
                                I hope to someday work in a role that will allow me to enhance public access to mental health support in some way, shape, or form. 
                                I am truly blessed to live the life that I do, and I want to leave as positive of an impact as I can on this world.
                                <span id="aboutMeMoreContent" style={{display: "none"}}>
                                    <br></br>
                                    &emsp;&emsp;Throughout my educational journey, I have been exposed to many of the major computer science specializations. 
                                    I have taken classes in topics including, but not limited to, network systems, cybersecurity, software development, artifical intelligence, and database management. 
                                    Outside of the classroom, I was granted the incredible opportunity to work as a software development intern for a Boulder-based startup by the name of Swotknot. 
                                    I also have many years of experience in web technologies dating back to early high school. 
                                    I am currently looking for an internship or entry-level opportunity in the field of software development for the summer of 2023 to further expand upon my skill sets.
                                    <br></br>
                                    &emsp;&emsp;I created the following digital portfolio for multiple reasons. 
                                    For one, I wanted to highlight my background, accomplishments, and personal endeavors in an organized, visually appealing manner. 
                                    Additionally, I wanted to show off my knowledge of web technologies and web development; I built my website from scratch (outside of purchasing the website template online) instead of using GitHub Pages or Wix.
                                    <br></br>
                                    &emsp;&emsp;Below you will find my resume, my personal development projects, my hobbies and interests, and my contact information. 
                                    If you have any questions or concerns, feel free to contact me at any time!
                                </span>
                            </p>
                            <div className ="aboutMeBtn">
                                <button type="button" className="rn-btn" id="aboutMeMoreBtn" style={{width: "80%"}} onClick={() => this.expand()}>
                                    Read More
                                </button>
                            </div>
                        </div>


                        <SingleService 
                            data_aos_delay="100" 
                            feather_icon={<Icon.HardDrive></Icon.HardDrive>} 
                            title="Software Development" 
                            description="Pursuing a Bachelor of Science in Computer Science at CU Boulder"
                            link="/#portfolio"
                            hobby_type="">
                        </SingleService>

                        <SingleService 
                            data_aos_delay="500" 
                            feather_icon={<Icon.Headphones></Icon.Headphones>} 
                            title="DJing" 
                            description="Performing and releasing mixes under the alias 'Dr. Slyme'"
                            link="/#pricing"
                            hobby_type="dj">
                        </SingleService>

                        <SingleService 
                            data_aos_delay="300" 
                            feather_icon={<Icon.Heart></Icon.Heart>} 
                            title="Mental Health Advocacy" 
                            description="Doing whatever I can to leave a positive impact on this world"
                            link="/#pricing"
                            hobby_type="mh">
                        </SingleService>

                    </div>
                </div>
            </div>
        );
    }

}