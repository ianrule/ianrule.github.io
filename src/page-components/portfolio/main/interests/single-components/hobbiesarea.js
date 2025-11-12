import React, {Component} from 'react';
import HobbiesPage from './hobbiespage';
import HobbiesHeader from './hobbiesheader';
import HobbiesBody from './hobbiesbody';
import List from './list';
import ListItem from './listitem';
import HobbiesFooter from './hobbiesfooter';
import * as Icon from 'react-feather';
import { PortfolioDataContext } from '../../../../../services/PortfolioDataService';

export default class HobbiesArea extends Component {
    static contextType = PortfolioDataContext;

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
        const { portfolioData } = this.context;
        const interestsData = portfolioData?.interests || { items: [] };
        const interests = interestsData.items || [];
        
        // Find specific interests by title
        const musicInterest = interests.find(item => item.title === "Music") || {};
        const personalDevInterest = interests.find(item => item.title === "Personal Development") || {};

        return (
            <div className="navigation-wrapper">
                <ul className="nav rn-nav-list" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-style active" id="dj-tab" data-bs-toggle="tab" href="#dj" role="tab" aria-controls="dj" aria-selected="true">Music</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-style" id="mental-health-tab" data-bs-toggle="tab" href="#mental-health" role="tab" aria-controls="mental-health" aria-selected="false">Personal Development</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    {/* Music tab */}
                    <HobbiesPage
                        classes="tab-pane fade show active"
                        id="dj"
                        aria_labelledby="dj-tab"
                        page_content={
                            <div>
                                {/* header */}
                                <HobbiesHeader
                                    title={musicInterest.title || "Music"}
                                    subtitle={musicInterest.tagline || "My Love for DJing and Music"}
                                    tags={<Icon.Headphones></Icon.Headphones>}
                                >
                                </HobbiesHeader>

                                {/* body */}
                                <HobbiesBody
                                    description={musicInterest.description || 'Music content loading...'}
                                    body_content={
                                        <div>
                                            <List
                                                left_content={<a href="/#dj"><img src="assets/images/interests/djing.png" alt="Ian Rule performing at Larmier Lounge" style={{borderRadius: "50%"}}></img></a>}
                                                right_content={
                                                    <div>
                                                        {musicInterest.bullets && musicInterest.bullets.map((bullet, index) => (
                                                            <ListItem
                                                                key={index}
                                                                data_feather="disc"
                                                                item={bullet}
                                                            />
                                                        ))}
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

                    {/* Personal Development tab */}
                    <HobbiesPage
                        classes="tab-pane fade"
                        id="mental-health"
                        aria_labelledby="mental-health-tab"
                        page_content={
                            <div>
                                {/* header */}
                                <HobbiesHeader
                                    title={personalDevInterest.title || "Personal Development"}
                                    subtitle={personalDevInterest.tagline || "Leaving Behind a Positive Legacy"}
                                    tags={<Icon.Heart></Icon.Heart>}
                                >
                                </HobbiesHeader>
                                <HobbiesBody
                                    description={personalDevInterest.description || 'Personal development content loading...'}
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