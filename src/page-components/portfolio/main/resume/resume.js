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
                                        <a className="nav-link active" id="work-tab" data-bs-toggle="tab" href="#work" role="tab" aria-controls="work" aria-selected="false">Work Experience</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="education-tab" data-bs-toggle="tab" href="#education" role="tab" aria-controls="education" aria-selected="true">Education</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="skills-tab" data-bs-toggle="tab" href="#skills" role="tab" aria-controls="skills" aria-selected="false">Skills</a>
                                    </li>
                                </ul>
                                {/* Start Tab Content Wrapper */}
                                <div className="rn-nav-content tab-content" id="myTabContents">

                                    <SingleTab
                                        classes="tab-pane fade"
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
                                                                    &bull; Bachelor of Science in Computer Science with a 3.965 GPA.
                                                                    <br></br>
                                                                    &bull; Enhanced web development skills by applying semantic HTML and accessible CSS in Universal Design, studying common web security exploits &#40;SQL injection, XSS, CSRF&#41;, and integrating with database systems and APIs.
                                                                    <br></br>
                                                                    &bull; Developed multi-threaded web, proxy, and distributed file servers in C to deepen my understanding of network systems and web architecture.
                                                                    <br></br>
                                                                    &bull; Studied software engineering fundamentals, including data structures, algorithms, object-oriented design, SQL database querying, computer security, AI, data science, and development methodologies.
                                                                    <br></br>
                                                                    &bull; Earned Dean's List recognition for 8 semesters and the CU Boulder Esteemed Scholar - Joseph A. Sewall scholarship.
                                                                    <br></br>
                                                                    &bull; Expanded my professional network by participating in Tau Beta Pi, Google DSC Boulder, and oSTEM. 
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
                                                                    &bull; Completed a 3-week intensive course in web technologies, including HTML, CSS, JavaScript, Node.js, and MongoDB.
                                                                    <br></br>
                                                                    &bull; Led front-end development for my team's final website project, which ranked 1st among a group of 30 classmates from diverse countries.
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
                                                                        &bull; High School Diploma with a 4.11 GPA.
                                                                        <br></br>
                                                                        &bull; Scored 1490 on the SAT.
                                                                        <br></br>
                                                                        &bull; Completed advanced coursework in Web Design and AP Computer Science.
                                                                        <br></br>
                                                                        &bull; Served as president of the HRHS Philanthropy Club.
                                                                        <br></br>
                                                                        &bull; Developed expertise in business law and marketing.
                                                                        <br></br>
                                                                        &bull; Honed public speaking skills through various presentations and competitions.
                                                                        <br></br>
                                                                        &bull; Awards: 4 Academic Excellence Awards, DECA Academic Letter, National Merit Commended Scholar, DECA Buying and Merchandising Finalist, DECA State Qualifier, Outstanding Sophomore Business/Technology Student Award, Student of the Month.
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
                                        classes="tab-pane show active fade single-tab-area"
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
                                                                        &bull; Developing a custom Shopify store with Lightspeed integration using Liquid and JavaScript to enhance the customer experience and boost sales.
                                                                        <br></br>
                                                                        &bull; Compiling sales reports in Google Sheets to support strategic decision-making.
                                                                        <br></br>
                                                                        &bull; Optimizing operations for 2 retail shops by creating and implementing innovative solutions for technician booking, system documentation, shop organization, inventory management and staff training.
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
                                                                        &bull; Developed features for a public-facing web platform using JavaScript, React, Firebase, and Yarn, collaborating with an international development team of 8 developers from Pakistan and Greece.
                                                                        <br></br>
                                                                        &bull; Resolved 3 pending Jira tasks during the first development sprint.
                                                                        <br></br>
                                                                        &bull; Broadened my technical skills by facilitating team discussions on game theory, AI, application security, login authentication, and database technologies.
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
                                                                            &bull; Served food and beverages to patrons in a formal dining setting, poolside, and at club events.
                                                                            <br></br>
                                                                            &bull; Memorized 2 separate dining menus.
                                                                            <br></br>
                                                                            &bull; Held 3 different staff positions, including server, bartender, and expo.
                                                                            <br></br>
                                                                            &bull; Trained 3 new employees.
                                                                            <br></br>
                                                                            &bull; Received a software development internship offer with “Swotknot” by a member of the club.
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
                                                                percentage="80%"
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
                                                                label="Database Technologies & Data Science"
                                                                percentage="70%"
                                                                data_wow_duration="0.9s"
                                                                data_wow_delay=".7s"
                                                            >
                                                            </ProgressBar>

                                                            <ProgressBar
                                                                label="Network Systems"
                                                                percentage="60%"
                                                                data_wow_duration="0.8s"
                                                                data_wow_delay=".6s"
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