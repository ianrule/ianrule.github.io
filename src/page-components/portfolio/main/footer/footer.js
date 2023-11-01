import React, {Component} from 'react';

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <section id="footer">
                <div className="rn-footer-area rn-section-gap section-separator">
                    <div className="container">
                        <div className="row ml--20 mr--20">
                            <div className="col-lg-12">
                                <div className="footer-area text-center">
                                    {/* logo */}
                                    <div className="logo">
                                        <a href="/#home">
                                            <img src={this.props.logo_src} alt="logo"></img>
                                        </a>
                                    </div>

                                    {/* description */}
                                    {this.props.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}