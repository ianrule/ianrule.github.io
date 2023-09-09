import React, {Component} from 'react';

export default class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <div data-aos-delay="600" className="col-lg-7 contact-input">
                <div className="contact-form-wrapper">
                    <div className="introduce">

                        <form className="rnt-contact-form rwt-dynamic-form row" id="contact-form" method="post" action="mailto:rule.ian@gmail.com" encType="text/plain">

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="contact-name">Your Name</label>
                                    <input className="form-control form-control-lg" name="contact-name" id="contact-name" type="text"></input>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="contact-phone">Phone Number</label>
                                    <input className="form-control" name="contact-phone" id="contact-phone" type="text"></input>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="contact-email">Email</label>
                                    <input className="form-control form-control-sm" id="contact-email" name="contact-email" type="text"></input>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="subject">subject</label>
                                    <input className="form-control form-control-sm" id="subject" name="subject" type="text"></input>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="contact-message">Your Message</label>
                                    <textarea name="contact-message" id="contact-message" cols="30" rows="10"></textarea>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <button name="submit" type="submit" id="submit" className="rn-btn" value="Send">
                                    <span>SEND MESSAGE</span>
                                    <i data-feather="arrow-right"></i>
                                </button>
                            </div>
                            
                        </form>

                    </div>
                </div>
            </div>
        );
    }

}