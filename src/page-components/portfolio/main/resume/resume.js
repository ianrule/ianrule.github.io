// https://upmostly.com/tutorials/pass-a-parameter-through-onclick-in-react
// https://www.w3schools.com/howto/howto_js_read_more.asp

import React, {Component} from 'react';
import SectionTitle from '../section-components/sectiontitle';
import SingleTab from './single-components/singletab'
import SkillList from './single-components/skilllist';
import ListElement from './single-components/listelement';
import SkillChart from './single-components/skillchart';
import SkillElement from './single-components/skillelement';
import { PortfolioDataContext } from '../../../../services/PortfolioDataService';

export default class Resume extends Component {
    static contextType = PortfolioDataContext;

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

    renderBulletPoints(bullets) {
        return bullets.map((bullet, index) => (
            <React.Fragment key={index}>
                &bull; {bullet}
                {index < bullets.length - 1 && <br />}
            </React.Fragment>
        ));
    }

    render() {
        const { portfolioData } = this.context;
        const resumeData = portfolioData?.resume || {};
        const skillsData = portfolioData?.skills || {};
        const workExperience = resumeData['Work Experience'] || [];
        const education = resumeData['Education'] || [];

        // Extract skills data
        const languages = skillsData['Languages'] || [];
        const technologies = skillsData['Technologies'] || [];
        const strengths = skillsData['Strengths'] || [];

        // Split work experience: first 2 visible, rest in "more content"
        const visibleWork = workExperience.slice(0, 2);
        const moreWork = workExperience.slice(2);

        // Split education: first 2 visible, rest in "more content"
        const visibleEducation = education.slice(0, 2);
        const moreEducation = education.slice(2);

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
                                        <a style={{textDecoration: "underline"}} href="https://docs.google.com/document/d/15OntaUvP0bTgTZ2f_Ete8n9-Gu0X30BnhUmP80nWQL4/edit?usp=sharing" target="_blank" rel="noreferrer">LINK TO PAPER RESUME</a>
                                    }
                                />
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
                                                            {/* Render first 2 education entries */}
                                                            {visibleEducation.map((item, index) => (
                                                                <ListElement
                                                                    key={index}
                                                                    title={item.title}
                                                                    institution={item.subtitle}
                                                                    tag={item.timeRange}
                                                                    description={
                                                                        <span>
                                                                            {this.renderBulletPoints(item.bullets)}
                                                                        </span>
                                                                    }
                                                                />
                                                            ))}

                                                            {/* More education content */}
                                                            {moreEducation.length > 0 && (
                                                                <span id="educationMoreContent" style={{display: "none"}}>
                                                                    {moreEducation.map((item, index) => (
                                                                        <ListElement
                                                                            key={index}
                                                                            title={item.title}
                                                                            institution={item.subtitle}
                                                                            tag={item.timeRange}
                                                                            description={
                                                                                <span>
                                                                                    {this.renderBulletPoints(item.bullets)}
                                                                                </span>
                                                                            }
                                                                        />
                                                                    ))}
                                                                </span>
                                                            )}
                                                        </div>
                                                    }
                                                    more_button={
                                                        moreEducation.length > 0 ? (
                                                            <button type="button" className="rn-btn mt--38" id="educationMoreBtn" onClick={() => this.expand("education")}>
                                                                SHOW MORE
                                                            </button>
                                                        ) : null
                                                    }
                                                />
                                            </div>
                                        }
                                    />

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
                                                            {/* Render first 2 work entries */}
                                                            {visibleWork.map((item, index) => (
                                                                <ListElement
                                                                    key={index}
                                                                    title={item.title}
                                                                    institution={item.subtitle}
                                                                    tag={item.timeRange}
                                                                    description={
                                                                        <span>
                                                                            {this.renderBulletPoints(item.bullets)}
                                                                        </span>
                                                                    }
                                                                />
                                                            ))}

                                                            {/* More work content */}
                                                            {moreWork.length > 0 && (
                                                                <span id="workMoreContent" style={{display: "none"}}>
                                                                    {moreWork.map((item, index) => (
                                                                        <ListElement
                                                                            key={index}
                                                                            title={item.title}
                                                                            institution={item.subtitle}
                                                                            tag={item.timeRange}
                                                                            description={
                                                                                <span>
                                                                                    {this.renderBulletPoints(item.bullets)}
                                                                                </span>
                                                                            }
                                                                        />
                                                                    ))}
                                                                </span>
                                                            )}
                                                        </div>
                                                    }
                                                    more_button={
                                                        moreWork.length > 0 ? (
                                                            <button type="button" className="rn-btn mt--38" id="workMoreBtn" onClick={() => this.expand("work")}>
                                                                SHOW MORE
                                                            </button>
                                                        ) : null
                                                    }
                                                />
                                            </div>
                                        }
                                    />

                                    {/* Skills tab with dynamic data */}
                                    <SingleTab
                                        classes="tab-pane fade"
                                        id="skills"
                                        aria_labelledby="skills-tab"
                                        tab_content={
                                            <div className="row"
                                                 style={{display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", marginLeft: "0px", marginRight: "0px", gap: "20px"}}>
                                                <SkillChart
                                                    maintitle="Languages"
                                                    subtitle=""
                                                    bar_content={
                                                        <div>
                                                            {languages.map((skill, index) => (
                                                                <SkillElement
                                                                    key={index}
                                                                    label={skill.title}
                                                                    skill_icon={skill.iconKey}
                                                                />
                                                            ))}
                                                        </div>
                                                    }
                                                />

                                                <SkillChart
                                                    maintitle="Technologies"
                                                    bar_content={
                                                        <div>
                                                            {technologies.map((skill, index) => (
                                                                <SkillElement
                                                                    key={index}
                                                                    label={skill.title}
                                                                    skill_icon={skill.iconKey}
                                                                />
                                                            ))}
                                                        </div>
                                                    }

                                                />

                                                <SkillChart
                                                    maintitle="Strengths"
                                                    subtitle=""
                                                    bar_content={
                                                        <div>
                                                            {strengths.map((skill, index) => (
                                                                <SkillElement
                                                                    key={index}
                                                                    label={skill.title}
                                                                    skill_icon={skill.iconKey}
                                                                />
                                                            ))}
                                                        </div>
                                                    }
                                                />
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