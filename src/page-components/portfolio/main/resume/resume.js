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
            <section id="resumepage">
                <div className="rn-resume-area rn-section-gap section-separator" id="resume">
                    <div className="container">
                        {/* section title */}
                        <div className="row ml--20 mr--20">
                            <div className="col-lg-12">
                                <SectionTitle
                                            title="Resume"
                                            subtitle={
                                                <a style={{textDecoration: "underline"}} href="https://docs.google.com/document/d/15OntaUvP0bTgTZ2f_Ete8n9-Gu0X30BnhUmP80nWQL4/edit?usp=sharing">LINK TO FULL RESUME</a>
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
                                                    dates="2015 - Present"
                                                    title="Education"
                                                    list_content={
                                                    <div>
                                                        <ListElement
                                                            title="University of Colorado Boulder"
                                                            institution="Boulder, CO"
                                                            tag="2019 - Present"
                                                            description={
                                                                <span>
                                                                    &bull; Pursuing a Bachelor of Science in Computer Science with anticipated graduation in May of 2024
                                                                    <br></br>
                                                                    &bull; GPA:  3.959
                                                                    <br></br>
                                                                    &bull; Coursework: Universal Design, Network Systems, Intro. to AI, Object-Oriented Analysis/Design, Operating Systems, Intro. to Data Science, Computer Security, Database Systems, Principles of Programming Languages, Algorithms, Fundamentals of HCI,, Software Dev. Methods & Tools, Computer Systems, Data Structures
                                                                    <br></br>
                                                                    &bull; Awards: Dean's List for 7 semesters, Engineering Scholarship Fund recipient, CU Boulder Esteemed Scholar - Joseph A. Sewall
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
                                                                    &bull; 3-week intensive study of web technologies including (but not limited to) HTML, CSS, JavaScript, Node.js, Jade, and MongoDB
                                                                    <br></br>
                                                                    &bull; Collaborated with a diverse group of students coming from over 50 countries
                                                                    <br></br>
                                                                    &bull; Final project involved developing a website for the philanthropy club I ran in high school which placed best overall in a class of 30 people
                                                                </span>
                                                            }
                                                        >
                                                        </ListElement>

                                                        <span id="educationMoreContent" style={{display: "none"}}>
                                                            <ListElement
                                                                title="Highlands Ranch High School"
                                                                institution="Highlands Ranch, CO"
                                                                tag="2015-2019"
                                                                description={
                                                                    <span>
                                                                        &bull; High School Diploma
                                                                        <br></br>
                                                                        &bull; GPA: 4.11 weighted (4.0 unweighted)
                                                                        <br></br>
                                                                        &bull; SAT Scores: 1490 (Jun. 2018), 1460 (Apr. 2018)
                                                                        <br></br>
                                                                        &bull; Coursework: 2 Web Design Courses, AP Computer Science
                                                                        <br></br>
                                                                        &bull; Awards: 4 Academic Excellence Awards, DECA Academic Letter, National Merit Commended Scholar, DECA Buying and Merchandising Finalist, DECA State Qualifier, Outstanding Sophomore Business/Technology Student Award, Student of the Month
                                                                        <br></br>
                                                                        &bull; President of the HRHS Philanthropy Club
                                                                        <br></br>
                                                                        &bull; Experience in business law and marketing
                                                                        <br></br>
                                                                        &bull; Public speaking experience
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
                                                    dates="2018 - Present"
                                                    title="Work Experience"
                                                    list_content={
                                                        <div>
                                                            <ListElement
                                                                title="Software Development Intern"
                                                                institution="Swotknot"
                                                                tag="2021-2022"
                                                                description={
                                                                    <span>
                                                                        &bull; Contributed JavaScript code to the company's new public-facing web user platform by completing over 3 pending Jira tasks and collaborating with a team of 8 developers based out of Pakistan and Greece
                                                                        <br></br>
                                                                        &bull; Quickly learned React in order to construct a web application that calls on a movie catalog API to search for movies
                                                                        <br></br>
                                                                        &bull; Gained exposure to beginner game theory and AI
                                                                        <br></br>
                                                                        &bull; Enhanced personal experience with React, Firebase, and Yarn
                                                                        <br></br>
                                                                        &bull; Scheduled question sessions to learn more about application development, application security, login authentication, database usage, and the field of software development as a whole
                                                                    </span>
                                                                }
                                                            > 
                                                            </ListElement>

                                                            <ListElement
                                                                title="Sales Associate"
                                                                institution="Fast-Fix Jewelry and Watch Repairs"
                                                                tag="2022-2023"
                                                                description={
                                                                    <span>
                                                                        &bull; Strengthened my communication, problem-solving, stress-management, and collaboration skills by walking customers through the jewelry and watch repair intake process and selling store merchandise
                                                                        <br></br>
                                                                        &bull; Worked with management to develop solutions for a variety of operational issues like technician booking, system documentation, and future staff training
                                                                        <br></br>
                                                                        &bull; Helped the store reorganize in order to enhance its efficiency and customer appeal
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
                                                                            &bull; Strengthened my communication, organizational, collaboration, problem-solving, stress-management and leadership skills by formally serving customers, learning 2 menus and 3 different staff positions, and training over 3 new employees
                                                                            <br></br>
                                                                            &bull; Offered a software development internship with “Swotknot” after getting to know the company's founder
                                                                        </span>
                                                                    }
                                                                >
                                                                </ListElement>

                                                                <ListElement
                                                                    title="Cook, Dish Washer, and F.O.H. Team Member"
                                                                    institution="Noodles & Company"
                                                                    tag="2018-2020"
                                                                    description={
                                                                        <span>
                                                                            &bull; Enhanced my communication, collaboration, problem-solving, stress-management, and leadership skills through customer engagement, learning 5 different staff positions, and training over 10 new employees
                                                                            <br></br>
                                                                            &bull; Awarded Employee of the Month 2 times
                                                                            <br></br>
                                                                            &bull; Responsible for checking the accuracy of customer orders, cooking food, running the cash register, waiting on customers, and occasionally taking over management duties
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
                                                    subtitle="Self-Assessed"
                                                    bar_content={
                                                        <div>
                                                            <ProgressBar
                                                                label="Web Development (HTML5, CSS, JavaScript, React, etc.)"
                                                                percentage="95%"
                                                                data_wow_duration="0.5s"
                                                                data_wow_delay=".3s"
                                                            >
                                                            </ProgressBar>

                                                            <ProgressBar
                                                                label="Agile Project Management"
                                                                percentage="90%"
                                                                data_wow_duration="0.6s"
                                                                data_wow_delay=".4s"
                                                            >
                                                            </ProgressBar>

                                                            <ProgressBar
                                                                label="Git/Version Control"
                                                                percentage="85%"
                                                                data_wow_duration="0.7s"
                                                                data_wow_delay=".5s"
                                                            >
                                                            </ProgressBar>

                                                            <ProgressBar
                                                                label="C, C++"
                                                                percentage="80%"
                                                                data_wow_duration="0.8s"
                                                                data_wow_delay=".6s"
                                                            >
                                                            </ProgressBar>

                                                            <ProgressBar
                                                                label="Python"
                                                                percentage="75%"
                                                                data_wow_duration="0.9s"
                                                                data_wow_delay=".7s"
                                                            >
                                                            </ProgressBar>

                                                            <ProgressBar
                                                                label="Java"
                                                                percentage="70%"
                                                                data_wow_duration="1.0s"
                                                                data_wow_delay=".8s"
                                                            >
                                                            </ProgressBar>

                                                            <span id="technicalMoreContent" style={{display: "none"}}>
                                                                <br></br>

                                                                <ProgressBar
                                                                    label="SQL"
                                                                    percentage="70%"
                                                                    data_wow_duration="0.5s"
                                                                    data_wow_delay=".3s"
                                                                >
                                                                </ProgressBar>

                                                                <ProgressBar
                                                                    label="GDB"
                                                                    percentage="60%"
                                                                    data_wow_duration="0.6s"
                                                                    data_wow_delay=".4s"
                                                                >
                                                                </ProgressBar>

                                                                <ProgressBar
                                                                    label="Adobe Graphic Design Tools"
                                                                    percentage="50%"
                                                                    data_wow_duration="0.7s"
                                                                    data_wow_delay=".5s"
                                                                >
                                                                </ProgressBar>

                                                                <ProgressBar
                                                                    label="Swift"
                                                                    percentage="50%"
                                                                    data_wow_duration="0.8s"
                                                                    data_wow_delay=".6s"
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
                                                    subtitle="Always Improving"
                                                    bar_content={
                                                        <div>
                                                            <SkillElement
                                                                label="Adaptability"
                                                                data_feather="check"
                                                            >
                                                            </SkillElement>

                                                            <SkillElement
                                                                label="Communication"
                                                                data_feather="check"
                                                            >
                                                            </SkillElement>

                                                            <SkillElement
                                                                label="Strong Work Ethic"
                                                                data_feather="check"
                                                            >
                                                            </SkillElement>

                                                            <SkillElement
                                                                label="Accountability"
                                                                data_feather="check"
                                                            >
                                                            </SkillElement>

                                                            <SkillElement
                                                                label="Organization"
                                                                data_feather="check"
                                                            >
                                                            </SkillElement>

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
                                                                label="Stress Management"
                                                                data_feather="check"
                                                            >
                                                            </SkillElement>

                                                            <SkillElement
                                                                label="Time Management"
                                                                data_feather="check"
                                                            >
                                                            </SkillElement>

                                                            <SkillElement
                                                                label="Project Management"
                                                                data_feather="check"
                                                            >
                                                            </SkillElement>

                                                            <SkillElement
                                                                label="Customer Service"
                                                                data_feather="check"
                                                            >
                                                            </SkillElement>

                                                            <SkillElement
                                                                label="Leadership"
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