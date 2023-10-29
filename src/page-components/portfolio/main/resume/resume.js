// https://upmostly.com/tutorials/pass-a-parameter-through-onclick-in-react
// https://www.w3schools.com/howto/howto_js_read_more.asp

import React, {Component} from 'react';
import SectionTitle from '../section-components/sectiontitle';
import SingleTab from './single-components/singletab'
import SkillList from './single-components/skilllist';
import ListElement from './single-components/listelement';
import ProgressChart from './single-components/progresschart';
import ProgressBar from './single-components/progressbar';

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
            case "soft":
                more_content = document.getElementById("softMoreContent");
                more_button = document.getElementById("softMoreBtn");
                break;
            default:
                break;
        }

        // Change display properties
        if (more_content.style.display === "none") {
            more_content.style.display = "inline";
            more_button.innerHTML = "Show Less";
        } else {
            more_content.style.display = "none";
            more_button.innerHTML = "Show More";
        }

    }

    render() {
        return (
            <section style={{width: "90%", margin: "0 auto"}} id="resume">
                <div className="rn-resume-area rn-section-gap section-separator" id="resume">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* section title */}
                                <SectionTitle
                                            title="Resume"
                                            subtitle="Last Updated: In Progress"
                                        >
                                </SectionTitle>
                            </div>
                        </div>
                        <div className="row mt--45">
                            <div className="col-lg-12">
                                <ul className="rn-nav-list nav nav-tabs" id="myTabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="education-tab" data-bs-toggle="tab" href="#education" role="tab" aria-controls="education" aria-selected="true">Work & Education</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="professional-tab" data-bs-toggle="tab" href="#professional" role="tab" aria-controls="professional" aria-selected="false">Skills</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="experience-tab" data-bs-toggle="tab" href="#experience" role="tab" aria-controls="experience" aria-selected="false">TBD</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="interview-tab" data-bs-toggle="tab" href="#interview" role="tab" aria-controls="interview" aria-selected="false">TBD</a>
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
                                                classes="col-lg-6 col-md-12 col-12"
                                                dates="2012 - Present"
                                                title="Education"
                                                list_content={
                                                <div>
                                                    <ListElement
                                                        title="University of Colorado Boulder"
                                                        institution="Boulder, CO"
                                                        tag="2019 - Now"
                                                        description={
                                                        <div>
                                                            - Pursuing a Bachelor of Science in Computer Science with anticipated graduation in May of 2024
                                                            <br></br>
                                                            - GPA: 3.986
                                                            <br></br>
                                                            - Courses Completed:
                                                            Computer Security, 
                                                            Database Systems, 
                                                            Principles of Programming Languages, 
                                                            Algorithms, Fundamentals of HCI, 
                                                            Software Development Methods and Tools, 
                                                            Computer Systems, CS 2: Data Structures, 
                                                            CS 1: Starting Computing
                                                        </div>}>
                                                    </ListElement>
                            
                                                    <ListElement
                                                        title="Stanford Pre-Collegiate Summer Institutes"
                                                        institution="Stanford, CA"
                                                        tag="2018"
                                                        description={
                                                        <div>
                                                            - 3-week intensive study of web technologies including but not limited to HTML, CSS, JavaScript, NodeJS, Jade, and MongoDB
                                                            <br></br>
                                                            - Collaborated with a diverse group of students coming from over 50 countries
                                                            <br></br>
                                                            - Developed a website for my highschool's philanthropy club for the final project which placed best overall in a class of 30 people
                                                        </div>}>
                                                    </ListElement>

                                                    <span id="educationMoreContent" style={{display: "none"}}>
                                                        <ListElement
                                                            title="Highlands Ranch High School"
                                                            institution="Highlands Ranch, CO"
                                                            tag="2015-2019"
                                                            description={
                                                            <div>
                                                                - High School Diploma
                                                                <br></br>
                                                                - GPA: 4.11 weighted (4.0 unweighted)
                                                                <br></br>
                                                                - Outstanding Business and Technology Student Award
                                                                <br></br>
                                                                - Experience in business law and marketing
                                                                <br></br>
                                                                - Public speaking experience
                                                                <br></br>
                                                                - SAT Scores: 1490 (Jun. 2018), 1460 (Apr. 2018)
                                                                <br></br>
                                                                - Courses Completed: Two HTML and Web Design Courses, AP Computer Science
                                                            </div>}>
                                                        </ListElement>

                                                        <ListElement
                                                            title="Cresthill Middle School"
                                                            institution="Highlands Ranch, CO"
                                                            tag="2014-2015"
                                                            description={
                                                            <div>
                                                                - Honor roll for 5 of the 6 quarters
                                                                <br></br>
                                                                - Courses Completed: Digital Media and Photoshop
                                                            </div>}>
                                                        </ListElement>

                                                        <ListElement
                                                            title="Hamilton Middle School"
                                                            institution="Denver, CO"
                                                            tag="2012-2013"
                                                            description={
                                                            <div>
                                                                - Gifted & Talented IB Program
                                                                <br></br>
                                                                - Honor roll for 3 of the 6 semesters
                                                                <br></br>
                                                                - Courses Completed: Basic Fundamentals of Web Design
                                                            </div>}>
                                                        </ListElement>
                                                    </span>
                                                </div>}
                                                more_button={
                                                <button type="button" className="rn-btn mt--40" id="educationMoreBtn" onClick={() => this.expand("education")}>
                                                    Show More
                                                </button>}>
                                            </SkillList>

                                            <SkillList
                                                classes="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60"
                                                dates="2016 - Present"
                                                title="Work Experience"
                                                list_content={
                                                <div>
                                                    <ListElement
                                                        title="Swotknot"
                                                        institution="Software Development Intern"
                                                        tag="2021-2022"
                                                        description={
                                                        <div>
                                                            - Contributed JavaScript code to the company's new public-facing website and user platform by completing over 3 pending Jira tasks and collaborating with a team of 8 developers based out of Pakistan and Greece
                                                            <br></br>
                                                            - Learned the basics of React in order to construct a web application that searches for movies using a movie catalog API
                                                        </div>}>
                                                    </ListElement>
                            
                                                    <ListElement
                                                        title="Boulder Country Club"
                                                        institution="Server and F.O.H. Support"
                                                        tag="2021"
                                                        description={
                                                        <div>
                                                            - Strengthened my communication, organizational, teamwork, problem-solving, stress management and leadership skills by formally serving customers, learning 2 menus and 3 different staff positions, and training over 3 new employees
                                                            <br></br>
                                                            - Offered a software development internship with “Swotknot” by the company's creator who is a member of the club
                                                        </div>}>
                                                    </ListElement>
                            
                                                    <span id="workMoreContent" style={{display: "none"}}>
                                                        <ListElement
                                                            title="Noodles & Company"
                                                            institution="Cook, Dish Washer, and F.O.H. Team Member"
                                                            tag="2018-2020"
                                                            description={
                                                            <div>
                                                                - Enhanced my communication, teamwork, problem-solving, stress management, and leadership skills through customer engagement, learning 5 different staff positions, and training over 10 new employees
                                                                <br></br>
                                                                - Awarded the title of  “Noodler of the Month” 2 times
                                                            </div>}>
                                                        </ListElement>

                                                        <ListElement
                                                            title="Newk's Eatery"
                                                            institution="F.O.H Team Member"
                                                            tag="2017-2018"
                                                            description={
                                                            <div>
                                                                - Front of house employee responsible for bussing tables, taking orders, running food, cleaning dishes, and training new employees
                                                            </div>}>
                                                        </ListElement>

                                                        <ListElement
                                                            title="TNT Fireworks"
                                                            institution="Sales Associate"
                                                            tag="2017"
                                                            description={
                                                            <div>
                                                                - Sales associate responsible for opening and closing duties, being a customer sales representative at two stands, and picking up additional materials for the tent
                                                            </div>}>
                                                        </ListElement>

                                                        <ListElement
                                                            title="Highlands Ranch High School"
                                                            institution="Lead Web Designer"
                                                            tag="2016-2017"
                                                            description={
                                                            <div>
                                                                - Appointed the Lead Web Designer for our school website in my technology teacher's Multimedia III - Advanced Web Design course
                                                                <br></br>
                                                                - Researched new HTML/CSS capabilities, updated announcements, processed update requests from teachers
                                                            </div>}>
                                                        </ListElement>

                                                        <ListElement
                                                            title="incentaHealth"
                                                            institution="Technical Support Intern"
                                                            tag="2016"
                                                            description={
                                                            <div>
                                                                - Responsible for organizing the in-house electrical workroom, learning about web design and company software, and helping in the transition from one website theme to another
                                                            </div>}>
                                                        </ListElement>
                                                    </span>
                                                </div>}
                                                more_button={
                                                <button type="button" className="rn-btn mt--40" id="workMoreBtn" onClick={() => this.expand("work")}>
                                                    Show More
                                                </button>}>
                                            </SkillList>
                                        </div>}>
                                    </SingleTab>

                                    <SingleTab
                                        classes="tab-pane fade"
                                        id="professional"
                                        aria_labelledby="professional-tab"
                                        tab_content={
                                        <div className="row row--40">
                                            <ProgressChart
                                                classes="col-lg-6 col-md-6 col-12"
                                                maintitle="Technical Skills"
                                                subtitle="Always Learning"
                                                bar_content={
                                                <div>
                                                    <ProgressBar
                                                        label="Web Development (HTML, CSS, JavaScript, React, etc.)"
                                                        percentage="95%"
                                                        data_wow_duration="0.5s"
                                                        data_wow_delay=".3s">
                                                    </ProgressBar>

                                                    <ProgressBar
                                                        label="C, C++"
                                                        percentage="80%"
                                                        data_wow_duration="0.6s"
                                                        data_wow_delay=".4s">
                                                    </ProgressBar>

                                                    <ProgressBar
                                                        label="Python"
                                                        percentage="75%"
                                                        data_wow_duration="0.7s"
                                                        data_wow_delay=".5s">
                                                    </ProgressBar>

                                                    <ProgressBar
                                                        label="Java"
                                                        percentage="70%"
                                                        data_wow_duration="0.8s"
                                                        data_wow_delay=".6s">
                                                    </ProgressBar>

                                                    <ProgressBar
                                                        label="SQL"
                                                        percentage="70%"
                                                        data_wow_duration="0.9s"
                                                        data_wow_delay=".7s">
                                                    </ProgressBar>

                                                    <span id="technicalMoreContent" style={{display: "none"}}>
                                                        <br></br>

                                                        <ProgressBar
                                                            label="Git, Version Control"
                                                            percentage="85%"
                                                            data_wow_duration="0.5s"
                                                            data_wow_delay=".3s">
                                                        </ProgressBar>

                                                        <ProgressBar
                                                            label="Agile, Project Management"
                                                            percentage="80%"
                                                            data_wow_duration="0.6s"
                                                            data_wow_delay=".4s">
                                                        </ProgressBar>

                                                        <ProgressBar
                                                            label="GDB"
                                                            percentage="60%"
                                                            data_wow_duration="0.7s"
                                                            data_wow_delay=".5s">
                                                        </ProgressBar>

                                                        <ProgressBar
                                                            label="Illustrator"
                                                            percentage="50%"
                                                            data_wow_duration="0.8s"
                                                            data_wow_delay=".6s">
                                                        </ProgressBar>
                                                    </span>
                                                </div>}
                                                more_button={
                                                <button type="button" className="rn-btn mt--40" id="technicalMoreBtn" onClick={() => this.expand("technical")}>
                                                    Show More
                                                </button>}>
                                            </ProgressChart>

                                            <ProgressChart
                                                classes="col-lg-6 col-md-6 col-12 mt_sm--60"
                                                maintitle="Soft Skills"
                                                subtitle="Constantly Growing"
                                                bar_content={
                                                <div>
                                                    <ProgressBar
                                                        label="Communication"
                                                        percentage="95%"
                                                        data_wow_duration="0.5s"
                                                        data_wow_delay=".3s">
                                                    </ProgressBar>

                                                    <ProgressBar
                                                        label="Stress Management"
                                                        percentage="95%"
                                                        data_wow_duration="0.6s"
                                                        data_wow_delay=".4s">
                                                    </ProgressBar>

                                                    <ProgressBar
                                                        label="Flexibility and Adaptability"
                                                        percentage="90%"
                                                        data_wow_duration="0.7s"
                                                        data_wow_delay=".5s">
                                                    </ProgressBar>

                                                    <ProgressBar
                                                        label="Organization"
                                                        percentage="100%"
                                                        data_wow_duration="0.8s"
                                                        data_wow_delay=".6s">
                                                    </ProgressBar>

                                                    <ProgressBar
                                                        label="Collaboration"
                                                        percentage="90%"
                                                        data_wow_duration="0.9s"
                                                        data_wow_delay=".7s">
                                                    </ProgressBar>

                                                    <ProgressBar
                                                        label="Problem Solving"
                                                        percentage="90%"
                                                        data_wow_duration="1.0s"
                                                        data_wow_delay=".8s">
                                                    </ProgressBar>

                                                    <span id="softMoreContent" style={{display: "none"}}>
                                                        <br></br>

                                                        <ProgressBar
                                                            label="Accountability"
                                                            percentage="95%"
                                                            data_wow_duration="0.5s"
                                                            data_wow_delay=".3s">
                                                        </ProgressBar>

                                                        <ProgressBar
                                                            label="Time Management"
                                                            percentage="80%"
                                                            data_wow_duration="0.6s"
                                                            data_wow_delay=".4s">
                                                        </ProgressBar>

                                                        <ProgressBar
                                                            label="Leadership"
                                                            percentage="80%"
                                                            data_wow_duration="0.7s"
                                                            data_wow_delay=".5s">
                                                        </ProgressBar>

                                                        <ProgressBar
                                                            label="Creativity"
                                                            percentage="75%"
                                                            data_wow_duration="0.8s"
                                                            data_wow_delay=".6s">
                                                        </ProgressBar>
                                                    </span>
                                                </div>}
                                                more_button={
                                                <button type="button" className="rn-btn mt--40" id="softMoreBtn" onClick={() => this.expand("soft")}>
                                                    Show More
                                                </button>}>
                                            </ProgressChart>
                                        </div>}>
                                    </SingleTab>

                                    <SingleTab
                                        classes="tab-pane fade"
                                        id="experience"
                                        aria_labelledby="experience-tab"
                                        tab_content={
                                        <div className="row">
                                            <SkillList
                                                classes="col-lg-6 col-md-12 col-12"
                                                dates="TBD"
                                                title="Awards"
                                                list_content={
                                                <div>
                                                    <ListElement
                                                        title="Coming Soon"
                                                        institution="Coming Soon"
                                                        tag="TBD">
                                                    </ListElement>
                                                </div>}>
                                            </SkillList>

                                            <SkillList
                                                classes="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60"
                                                dates="TBD"
                                                title="Certifications"
                                                list_content={
                                                <div>
                                                    <ListElement
                                                        title="Coming Soon"
                                                        institution="Coming Soon"
                                                        tag="TBD">
                                                    </ListElement>
                                                </div>}>
                                            </SkillList>
                                        </div>}>
                                    </SingleTab>

                                    <SingleTab
                                        classes="tab-pane fade"
                                        id="interview"
                                        aria_labelledby="interview-tab"
                                        tab_content={
                                        <div className="row">
                                            <SkillList
                                                classes="col-lg-6 col-md-12 col-12"
                                                dates="TBD"
                                                title="Clubs"
                                                list_content={
                                                <div>
                                                    <ListElement
                                                        title="Coming Soon"
                                                        institution="Coming Soon"
                                                        tag="TBD">
                                                    </ListElement>
                                                </div>}>
                                            </SkillList>

                                            <SkillList
                                                classes="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60"
                                                dates="TBD"
                                                title="Volunteer Work"
                                                list_content={
                                                <div>
                                                    <ListElement
                                                        title="Coming Soon"
                                                        institution="Coming Soon"
                                                        tag="TBD">
                                                    </ListElement>
                                                </div>}>
                                            </SkillList>
                                        </div>}>
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