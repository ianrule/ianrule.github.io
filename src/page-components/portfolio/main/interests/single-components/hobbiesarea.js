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
            default:
                break;
        }

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
            <div className="navigation-wrapper">
                <ul className="nav rn-nav-list" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-style active" id="dj-tab" data-bs-toggle="tab" href="#dj" role="tab" aria-controls="tdj" aria-selected="true">DJing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-style" id="mental-health-tab" data-bs-toggle="tab" href="#mental-health" role="tab" aria-controls="mental-health" aria-selected="false">Personal Development</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    {/* djing */}
                    <HobbiesPage
                        classes="tab-pane fade show active"
                        id="dj"
                        aria_labelledby="dj-tab"
                        page_content={
                            <div>
                                {/* header */}
                                <HobbiesHeader
                                    title="Music"
                                    subtitle="DJing and My Love for Music"
                                    tags={<Icon.Headphones></Icon.Headphones>}
                                >
                                </HobbiesHeader>

                                {/* body */}
                                <HobbiesBody
                                    description='Music has always been a source of joy, support, and connection in my life. Inspired by artists like Skrillex and Martin Garrix, I dreamt of one day exploring the art of DJing as a child. My dreams became reality after I took lessons with DJ Walt White at Global DJ Academy, and in 2017, I purchased my first DJ controller. With additional guidance from my good friend TJ, who now produces music under the alias “Crucible,” I enhanced my skills. That same year, I performed at Skylab, a music event hosted by Global Dance. I continued to perform live and release mixes on SoundCloud under the alias “Dr. Slyme” (now “Eye Roll”) at the following events:'
                                    body_content={
                                        <div>
                                            <List
                                                left_content={<a href="/#dj"><img src="assets/images/interests/djing.png" alt="Ian Rule performing at Larmier Lounge" style={{borderRadius: "50%"}}></img></a>}
                                                right_content={
                                                    <div>
                                                        <ListItem
                                                            data_feather="disc"
                                                            item="Krowd Ktrl @ Larimer Lounge (2019)">
                                                        </ListItem>

                                                        <ListItem
                                                            data_feather="disc"
                                                            item="My Parent's Wedding @ The Soiled Dove (2018)">
                                                        </ListItem>

                                                        <ListItem
                                                            data_feather="disc"
                                                            item="Supernatural Festival @ National Western Complex (2017)">
                                                        </ListItem>

                                                        <ListItem
                                                            data_feather="disc"
                                                            item="Skylab @ National Western Complex (2017)">
                                                        </ListItem>
                                                    </div>
                                                }
                                            >
                                            </List>
                                        </div>
                                    }
                                >
                                </HobbiesBody>

                                {/* footer */}
                                <HobbiesFooter
                                    btn_link="https://soundcloud.com/eye-roll"
                                    btn_label="SoundCloud"
                                >
                                </HobbiesFooter>
                            </div>
                        }
                    >
                    </HobbiesPage>

                    {/* mental health */}
                    <HobbiesPage
                        classes="tab-pane fade"
                        id="mental-health"
                        aria_labelledby="mental-health-tab"
                        page_content={
                            <div>
                                {/* header */}
                                <HobbiesHeader
                                    title="Personal Development"
                                    subtitle="Leaving Behind a Positive Legacy"
                                    tags={<Icon.Heart></Icon.Heart>}
                                >
                                </HobbiesHeader>
                                <HobbiesBody
                                    description="After losing both my uncle and sister to suicide before the end of middle school, I quickly became aware of the importance of mental health at a young age. Years of dedication to understanding mental illness and exposing myself to new perspectives and resources have allowed me to grow substantially as an individual while helping others become the best version of themselves along the way. I live my life sober and am always seeking ways to improve my physical and mental well-being. I have volunteered for multiple non-profit organizations in the mental health industry and love to share my wisdom and experience with those around me. I am truly blessed to live the life that I do, and I want to leave as positive an impact as I can on this world. To anyone reading this who feels like giving up, I beg you to keep fighting. I and many others know how earth-shattering it can feel to lose all hope; you are never alone. If you don't believe your loved ones right now when they tell you that this too shall pass, know that I have been right there with you, and I pray that one day you will see, like I did, that they were right all along. If you are in search of support or just need someone to talk to, my inboxes will always be open to you."
                                    body_content={<div></div>}
                                >
                                </HobbiesBody>
                            </div>
                        }
                    >
                    </HobbiesPage>

                </div>
            </div>
        );
    }

}