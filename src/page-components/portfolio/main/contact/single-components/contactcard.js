import React, {Component} from 'react';

export default class ContactCard extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <div className="contact-about-area">
                <div className="thumbnail">
                    <img src={this.props.contact_picture} alt="contact-img"></img>
                </div>
                <div className="title-area">
                    <h4 className="title">Ian Rule</h4>
                    <span>{this.props.title}</span>
                </div>
                <div className="description">
                    {/* <p>{this.props.description}</p> */}
                    <span className="mail">Email: <a href={"mailto:" + this.props.email} style={{textDecoration: "underline"}}>{this.props.email}</a></span>
                </div>
                <div className="social-area">
                    <div className="name">CONNECT WITH ME</div>
                    <div className="social-icone">
                        <a href={this.props.github_link} target="_blank" rel="noopener noreferrer"><i data-feather="github"></i></a>
                        <a href={this.props.linkedin_link} target="_blank" rel="noopener noreferrer"><i data-feather="linkedin"></i></a>
                        <a href={this.props.instagram_link} target="_blank" rel="noopener noreferrer"><i data-feather="instagram"></i></a>
                    </div>
                </div>
            </div>
        );
    }

}