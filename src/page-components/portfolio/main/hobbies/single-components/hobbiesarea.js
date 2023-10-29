import React, {Component} from 'react';
import HobbiesPage from './hobbiespage';
import HobbiesHeader from './hobbiesheader';
import HobbiesBody from './hobbiesbody';
import List from './list';
import ListItem from './listitem';
import HobbiesFooter from './hobbiesfooter';
import * as Icon from 'react-feather';

export default class HobbiesArea extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    expand(hobby) {

        // Initialize variables
        var more_content;
        var more_button;

        // Set variables based off of skill list input
        switch(hobby) {
            case "mentalhealth":
                more_content = document.getElementById("mentalHealthMoreContent");
                more_button = document.getElementById("mentalHealthMoreBtn");
                break;
            default:
                break;
        }

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
            <div className="navigation-wrapper">
                <ul className="nav" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-style active" id="test-tab" data-bs-toggle="tab" href="#test" role="tab" aria-controls="test" aria-selected="true">DJing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-style" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Mental Health</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-style" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Travel</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">


                    <HobbiesPage
                        classes="tab-pane fade show active"
                        id="test"
                        aria_labelledby="test-tab"
                        page_content={
                        <div>
                            <HobbiesHeader
                                title="DJing"
                                subtitle="Dr. Slyme"
                                tags={<Icon.Headphones></Icon.Headphones>}>
                            </HobbiesHeader>
                            <HobbiesBody
                                description="I purchased my first DJ board in 2017 and took lessons with DJ Walt White at Global DJ Academy.
                                I also had the pleasure of learning from my good friend TJ who produces for a duo by the name of Krowd Ktrl.
                                My SoundCloud features some of the mixes I have put together and released over the years under the alias 'Dr. Slyme'.
                                I specialize in EDM/bass music.
                                I have had the pleasure of performing live at the following venues:"
                                body_content={
                                <div>
                                    <List
                                        left_content={
                                        <a href="/#pricing">
                                            <img src="assets/images/logo/DJ.JPG" alt="dj-img"></img>
                                        </a>}
                                        right_content={
                                        <div>
                                            <ListItem
                                                data_feather="disc"
                                                item="Quaranstream @ My Parent's Basement (2020)">
                                            </ListItem>
                                            <ListItem
                                                data_feather="disc"
                                                item="Krowd Ktrl @ Larimer Lounge (2019)">
                                            </ListItem>
                                            <ListItem
                                                data_feather="disc"
                                                item="Parent's Wedding @ The Soiled Dove (2018)">
                                            </ListItem>
                                            <ListItem
                                                data_feather="disc"
                                                item="Supernatural Festival @ National Western Complex (2017)">
                                            </ListItem>
                                            <ListItem
                                                data_feather="disc"
                                                item="Skylab @ National Western Complex (2017)">
                                            </ListItem>
                                        </div>}>
                                    </List>
                                </div>}>
                            </HobbiesBody>
                            <HobbiesFooter
                                btn_label="Check Out My Soundcloud"
                                time="2 Days Delivery"
                                activity="Unlimited Revission">
                            </HobbiesFooter>
                        </div>}>
                    </HobbiesPage>

                    <HobbiesPage
                        classes="tab-pane fade"
                        id="profile"
                        aria_labelledby="profile-tab"
                        page_content={
                        <div>
                            <HobbiesHeader
                                title="Mental Health Advocacy"
                                subtitle="Never Give Up"
                                tags={<Icon.Heart></Icon.Heart>}>
                            </HobbiesHeader>
                            <HobbiesBody
                                description="After losing both my uncle and sister to suicide before the end of middle school, I was made well aware of how important mental wellness is at a young age.
                                I saw how devastating mental illness can be first hand throughout the early portion of my childhood, and I have battled both an anxiety disorder and depression myself. 
                                After the conclusion of my third year in engineering school at CU Boulder, I entered into a period of depression like never before. 
                                I decided to take a break from school for both the summer and fall semesters of 2022 and spent time in and out of multiple inpatient and outpatient support groups. 
                                The silver lining? I have learned so much about mental illness and mental wellness over the years. 
                                I have now returned to my studies and have a full toolkit of coping mechanisms to utilize at times when I find myself in a battle with mental illness."
                                read_more_btn={
                                <button type="button" className="rn-btn mt--40" id="mentalHealthMoreBtn" onClick={() => this.expand("mentalhealth")}>
                                    Read More
                                </button>}
                                extra_description={
                                <span id="mentalHealthMoreContent" style={{display: "none"}}>
                                    <br></br>
                                    <br></br>
                                    "In highschool, I became the president of my school's philanthropy club and had the opportunity to volunteer for multiple organizations whose main purpose was to advocate for mental wellness. 
                                    As I have said before, I am truly blessed to live the life that I do, and I want to leave as positive of an impact as I can on this world. 
                                    To anyone reading this who feels like giving up, I beg you to keep fighting. 
                                    I and many others know how earth-shattering it can feel to lose all hope; you are never alone. 
                                    If you don't believe your loved ones right now when they tell you that this too shall pass, know that I have been right there with you, and I pray that one day you will see, like I did, that they were right all along. 
                                    If you are in search of support or just need someone to talk to, my inboxes will always be open to you."
                                </span>
                                }
                                body_content={
                                <div>
                                </div>}>
                            </HobbiesBody>
                        </div>}>
                    </HobbiesPage>

                    <HobbiesPage
                        classes="tab-pane fade"
                        id="contact"
                        aria_labelledby="contact-tab"
                        page_content={
                        <div>
                            <HobbiesHeader
                                title="Travel"
                                subtitle="Love to Explore"
                                tags={<Icon.Map></Icon.Map>}>
                            </HobbiesHeader>
                            <HobbiesBody
                                description="Throughout the past 21 years of my life, I have had the opportunity to travel to four different countries and have met people from all around the world.
                                Traveling is not just a hobby of mine, it has also contributed to my growth as a person in so many ways. 
                                I find joy in learning about cultures different from my own and seeing all the wondrous places this world has to offer."
                                body_content={
                                <div>
                                </div>}>
                            </HobbiesBody>
                        </div>}>
                    </HobbiesPage>

                </div>
            </div>
        );
    }

}