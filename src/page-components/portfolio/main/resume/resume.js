// https://upmostly.com/tutorials/pass-a-parameter-through-onclick-in-react
// https://www.w3schools.com/howto/howto_js_read_more.asp

import React, {Component} from 'react';
import SectionTitle from '../section-components/sectiontitle';
import SingleTab from './single-components/singletab'
import SkillList from './single-components/skilllist';
import ListElement from './single-components/listelement';
import SkillChart from './single-components/skillchart';
import ProgressBar from './single-components/progressbar';
import SkillElement from './single-components/skillelement';

export default class Resume extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    expand(skill_list) {

        // Initialize variables
        var more_content;
        var more_button;

        // Set variables based off of skill list input
        switch(skill_list) {
            case "education":
                more_content = document.getElementById("educationMoreContent");
                more_button = document.getElementById("educationMoreBtn");
                break;
            case "work":
                more_content = document.getElementById("workMoreContent");
                more_button = document.getElementById("workMoreBtn");
                break;
            case "technical":
                more_content = document.getElementById("technicalMoreContent");
                more_button = document.getElementById("technicalMoreBtn");
                break;
            default:
                break;
        }

        // Change display properties
        if (more_content.style.display === "none") {
            more_content.style.display = "inline";
            more_button.innerHTML = "SHOW LESS";
        } else {
            more_content.style.display = "none";
            more_button.innerHTML = "SHOW MORE";
        }

    }

    render() {
        return (
            <section id="myresume">
                <div className="rn-resume-area rn-section-gap section-separator" id="resume">
                    <div className="container">
                        {/* section title */}
                        <div className="row ml--20 mr--20">
                            <div className="col-lg-12">
                                <SectionTitle
                                            title="Resume"
                                            subtitle={
                                                <a style={{textDecoration: "underline"}} href="https://docs.google.com/document/d/15OntaUvP0bTgTZ2f_Ete8n9-Gu0X30BnhUmP80nWQL4/edit?usp=sharing">LINK TO PAPER RESUME</a>
                                            }
                                >
                                </SectionTitle>
                            </div>
                        </div>

                        {/* resume */}
                        <div className="row mt--38 ml--20 mr--20">
                            <div className="col-lg-12">

                                {/* navigation */}
                                <ul className="rn-nav-list nav nav-tabs mt--0" id="myTabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="education-tab" data-bs-toggle="tab" href="#education" role="tab" aria-controls="education" aria-selected="true">Education</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="work-tab" data-bs-toggle="tab" href="#work" role="tab" aria-controls="work" aria-selected="false">Work Experience</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="skills-tab" data-bs-toggle="tab" href="#skills" role="tab" aria-controls="skills" aria-selected="false">Skills</a>
                                    </li>
                                </ul>
                                {/* Start Tab Content Wrapper */}
                                <div className="rn-nav-content tab-content" id="myTabContents">

                                    <SingleTab
                                        classes="tab-pane show active fade single-tab-area"
                                        id="education"
                                        aria_labelledby="education-tab"
                                        tab_content={
                                            <div className="row">
                                                <SkillList
                                                    classes="col-lg-12 col-md-12 col-12"
                                                    dates="2015 - 2024"
                                                    title="Education"
                                                    list_content={
                                                    <div>
                                                        <ListElement
                                                            title="University of Colorado Boulder"
                                                            institution="Boulder, CO"
                                                            tag="2019 - 2024"
                                                            description={
                                                                <span>
                                                                    &bull; Bachelor of Science in Computer Science with a 3.965 GPA
                                                                    <br></br>
                                                                    &bull; Coursework: Universal Design, Network Systems, Intro. to AI, Object-Oriented Analysis/Design, Operating Systems, Intro. to Data Science, Computer Security, Database Systems, Principles of Programming Languages, Algorithms, Fundamentals of HCI, Software Dev. Methods & Tools, Computer Systems, Data Structures
                                                                    <br></br>
                                                                    &bull; Awards: Dean's List for 8 semesters, Engineering Scholarship Fund Recipient, CU Boulder Esteemed Scholar - Joseph A. Sewall
                                                                    <br></br>
                                                                    &bull; Clubs & Organizations: Tau Beta Pi, Google DSC Boulder, oSTEM
                                                                </span>
                                                            }
                                                        >
                                                        </ListElement>

                                                        <ListElement
                                                            title="Stanford Pre-Collegiate Summer Institutes"
                                                            institution="Stanford, CA"
                                                            tag="2018"
                                                            description={
                                                                <span>
                                                                    &bull; 3-week intensive study of web technologies including &#40;but not limited to&#41; HTML, CSS, JavaScript, Node.js, Jade, and MongoDB
                                                                    <br></br>
                                                                    &bull; Ranked first among 30 classmates in collaborating on a final website project with a diverse group representing over 50 countries
                                                                </span>
                                                            }
                                                        >
                                                        </ListElement>

                                                        <span id="educationMoreContent" style={{display: "none"}}>
                                                            <ListElement
                                                                title="Highlands Ranch High School"
                                                                institution="Highlands Ranch, CO"
                                                                tag="2015 - 2019"
                                                                description={
                                                                    <span>
                                                                        &bull; High School Diploma with a 4.11 GPA
                                                                        <br></br>
                                                                        &bull; Scored 1490 on the SAT
                                                                        <br></br>
                                                                        &bull; Completed advanced coursework in Web Design and AP Computer Science
                                                                        <br></br>
                                                                        &bull; Served as president of the HRHS Philanthropy Club
                                                                        <br></br>
                                                                        &bull; Developed expertise in business law and marketing
                                                                        <br></br>
                                                                        &bull; Honed public speaking skills through various presentations and competitions
                                                                        <br></br>
                                                                        &bull; Awards: 4 Academic Excellence Awards, DECA Academic Letter, National Merit Commended Scholar, DECA Buying and Merchandising Finalist, DECA State Qualifier, Outstanding Sophomore Business/Technology Student Award, Student of the Month
                                                                    </span>
                                                                }
                                                            >
                                                            </ListElement>
                                                        </span>
                                                    </div>
                                                    }
                                                    more_button={<button type="button" className="rn-btn mt--38" id="educationMoreBtn" onClick={() => this.expand("education")}>SHOW MORE</button>}
                                                >
                                                </SkillList>
                                            </div>
                                        }
                                    >
                                    </SingleTab>

                                    <SingleTab
                                        classes="tab-pane fade"
                                        id="work"
                                        aria_labelledby="work-tab"
                                        tab_content={
                                            <div className="row">
                                                <SkillList
                                                    classes="col-lg-12 col-md-12 col-12"
                                                    dates="2021 - Present"
                                                    title="Work Experience"
                                                    list_content={
                                                        <div>
                                                            <ListElement
                                                                title="Ecommerce & Operations Manager"
                                                                institution="Fast-Fix Jewelry and Watch Repairs"
                                                                tag="2022 - Present"
                                                                description={
                                                                    <span>
                                                                        &bull; Developing a custom Shopify store to enhance consumer experience and boost sales
                                                                        <br></br>
                                                                        &bull; Managing and maintaining accurate inventory data for 2 retail shops using Lightspeed
                                                                        <br></br>
                                                                        &bull; Creating sales reports in Google Sheets for strategic decision-making
                                                                        <br></br>
                                                                        &bull; Optimizing operations through the development and implementation of solutions for technician booking, system documentation, shop organization, and staff training
                                                                    </span>
                                                                }
                                                            >
                                                            </ListElement>
                                    

                                                            <ListElement
                                                                title="Software Development Intern"
                                                                institution="Swotknot"
                                                                tag="2021 - 2022"
                                                                description={
                                                                    <span>
                                                                        &bull; Developed features for a public-facing web user platform using JavaScript, React, Firebase, and Yarn
                                                                        <br></br>
                                                                        &bull; Successfully resolved 3 pending Jira tasks within the first sprint with the development team
                                                                        <br></br>
                                                                        &bull; Collaborated closely with an internal team of 8 developers from Pakistan and Greece
                                                                        <br></br>
                                                                        &bull; Created a movie catalog web application utilizing the IMDb API
                                                                        <br></br>
                                                                        &bull; Studied game theory, AI, application security, login authentication, and database technologies to broaden technical expertise
                                                                    </span>
                                                                }
                                                            > 
                                                            </ListElement>

                                                            <span id="workMoreContent" style={{display: "none"}}>
                                                                <ListElement
                                                                    title="Server and F.O.H. Support"
                                                                    institution="Boulder Country Club"
                                                                    tag="2021"
                                                                    description={
                                                                        <span>
                                                                            &bull; Served food and beverages to patrons in a formal dining setting, poolside, and at club events
                                                                            <br></br>
                                                                            &bull; Memorized 2 separate dining menus
                                                                            <br></br>
                                                                            &bull; Held 3 different staff positions, including server, bartender, and expo
                                                                            <br></br>
                                                                            &bull; Trained 3 new employees
                                                                            <br></br>
                                                                            &bull; Received a software development internship offer with “Swotknot” by a member of the club
                                                                        </span>
                                                                    }
                                                                >
                                                                </ListElement>
                                                            </span>
                                                        </div>
                                                    }
                                                    more_button={<button type="button" className="rn-btn mt--38" id="workMoreBtn" onClick={() => this.expand("work")}>SHOW MORE</button>}
                                                >
                                                </SkillList>
                                            </div>
                                        }
                                    >
                                    </SingleTab>

                                    <SingleTab
                                        classes="tab-pane fade"
                                        id="skills"
                                        aria_labelledby="skills-tab"
                                        tab_content={
                                            <div className="row row--40">
                                                <SkillChart
                                                    classes="col-lg-8 col-md-7 col-12"
                                                    maintitle="Technical Skills"
                                                    subtitle=""
                                                    bar_content={
                                                        <div>
                                                            <ProgressBar
                                                                label="Web Development & Web Technologies"
                                                                percentage="95%"
                                                                data_wow_duration="0.5s"
                                                                data_wow_delay=".3s"
                                                            >
                                                            </ProgressBar>

                                                            <ProgressBar
                                                                label="Object-Oriented Programming"
                                                                percentage="90%"
                                                                data_wow_duration="0.6s"
                                                                data_wow_delay=".4s"
                                                            >
                                                            </ProgressBar>

                                                            <ProgressBar
                                                                label="Data Structures & Algorithms"
                                                                percentage="80%"
                                                                data_wow_duration="0.7s"
                                                                data_wow_delay=".5s"
                                                            >
                                                            </ProgressBar>

                                                            <ProgressBar
                                                                label="Network Systems"
                                                                percentage="70%"
                                                                data_wow_duration="0.8s"
                                                                data_wow_delay=".6s"
                                                            >
                                                            </ProgressBar>

                                                            <ProgressBar
                                                                label="Database Technologies & Data Science"
                                                                percentage="70%"
                                                                data_wow_duration="0.9s"
                                                                data_wow_delay=".7s"
                                                            >
                                                            </ProgressBar>

                                                            <ProgressBar
                                                                label="Computer Security & Operating Systems"
                                                                percentage="60%"
                                                                data_wow_duration="1.0s"
                                                                data_wow_delay=".8s"
                                                            >
                                                            </ProgressBar>

                                                            <span id="technicalMoreContent" style={{display: "none"}}>
                                                                <br></br>

                                                                <ProgressBar
                                                                    label="Version Control"
                                                                    percentage="90%"
                                                                    data_wow_duration="0.5s"
                                                                    data_wow_delay=".3s"
                                                                >
                                                                </ProgressBar>

                                                                <ProgressBar
                                                                    label="API Integration"
                                                                    percentage="80%"
                                                                    data_wow_duration="0.6s"
                                                                    data_wow_delay=".4s"
                                                                >
                                                                </ProgressBar>

                                                                <ProgressBar
                                                                    label="Agile Project Management"
                                                                    percentage="70%"
                                                                    data_wow_duration="0.7s"
                                                                    data_wow_delay=".5s"
                                                                >
                                                                </ProgressBar>
                                                            </span>
                                                        </div>
                                                    }
                                                    more_button={<button type="button" className="rn-btn mt--40" id="technicalMoreBtn" onClick={() => this.expand("technical")}>SHOW MORE</button>}
                                                >
                                                </SkillChart>

                                                <SkillChart
                                                    classes="col-lg-4 col-md-5 col-12 mt_sm--38"
                                                    maintitle="Soft Skills"
                                                    subtitle=""
                                                    bar_content={
                                                        <div>
                                                            <SkillElement
                                                                label="Problem Solving"
                                                                data_feather="check"
                                                            >
                                                            </SkillElement>

                                                            <SkillElement
                                                                label="Collaboration"
                                                                data_feather="check"
                                                            >
                                                            </SkillElement>

                                                            <SkillElement
                                                                label="Communication"
                                                                data_feather="check"
                                                            >
                                                            </SkillElement>

                                                            <SkillElement
                                                                label="Organization"
                                                                data_feather="check"
                                                            >
                                                            </SkillElement>

                                                            <SkillElement
                                                                label="Leadership"
                                                                data_feather="check"
                                                            >
                                                            </SkillElement>

                                                            <SkillElement
                                                                label="Project Management"
                                                                data_feather="check"
                                                            >
                                                            </SkillElement>

                                                            <SkillElement
                                                                label="Accountability"
                                                                data_feather="check"
                                                            >
                                                            </SkillElement>

                                                            <SkillElement
                                                                label="Adaptability"
                                                                data_feather="check"
                                                            >
                                                            </SkillElement>

                                                            <SkillElement
                                                                label="Time Management"
                                                                data_feather="check"
                                                            >
                                                            </SkillElement>

                                                            <SkillElement
                                                                label="Stress Management"
                                                                data_feather="check"
                                                            >
                                                            </SkillElement>

                                                            <SkillElement
                                                                label="Customer Service"
                                                                data_feather="check"
                                                            >
                                                            </SkillElement>

                                                            <SkillElement
                                                                label="Strong Work Ethic"
                                                                data_feather="check"
                                                            >
                                                            </SkillElement>
                                                        </div>
                                                    }
                                                >
                                                </SkillChart>
                                            </div>
                                        }
                                    >
                                    </SingleTab>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}