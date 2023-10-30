import React, {Component} from 'react';

export default class SingleService extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    handleClick(hobby_type) {

        // Initialize variables
        var dj_nav = document.getElementById("test-tab");
        var dj_page = document.getElementById("test");
        var mh_nav = document.getElementById("profile-tab");
        var mh_page = document.getElementById("profile");

        // Set variables based off of skill list input
        switch(hobby_type) {

            case "dj":

                // Change class type of navs
                dj_nav.className = "nav-style active";
                mh_nav.className = "nav-style";

                // Change aria selected
                dj_nav.ariaSelected = "true";
                mh_nav.ariaSelected = "false";

                // Change class type of pages
                dj_page.className = "tab-pane fade show active";
                mh_page.className = "tab-pane fade";

                break;
            
            case "mh":

                // Change class type of navs
                dj_nav.className = "nav-style";
                mh_nav.className = "nav-style active";

                // Change aria selected
                dj_nav.ariaSelected = "false";
                mh_nav.ariaSelected = "true";

                // Change class type of pages
                dj_page.className = "tab-pane fade";
                mh_page.className = "tab-pane fade show active";

                break;

            default: break;
            
        }

    }

    render() {
        return (
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay={this.props.data_aos_delay} data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--30 mt_md--30 mt_sm--30" style={{marginLeft: "auto", marginRight: "auto"}}>
                <div className="rn-service">
                    <div className="inner">
                        <div className="icon">
                            {this.props.feather_icon}
                        </div>
                        <div className="content">
                            <h4 className="title"><a href={this.props.link} onClick={() => this.handleClick(this.props.hobby_type)}>{this.props.title}</a></h4>
                            <p className="description">{this.props.description}</p>
                            <a className="read-more-button" href={this.props.link} onClick={() => this.handleClick(this.props.hobby_type)}><i className="feather-arrow-right"></i></a>
                        </div>
                    </div>
                    <a className="over-link" href={this.props.link} onClick={() => this.handleClick(this.props.hobby_type)}> </a>
                </div>
            </div>
        );
    }

}