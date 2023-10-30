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
            <section style={{width: "90%", margin: "0 auto"}} id="footer">
                <div className="rn-footer-area rn-section-gap section-separator">
                    <div className="container">
                        <div className="row" style={{padding: "0 20px 0 20px"}}>
                            <div className="col-lg-12">
                                <div className="footer-area text-center">

                                    <div className="logo">
                                        <a href="/#">
                                            <img src={this.props.logo_src} alt="logo"></img>
                                        </a>
                                    </div>

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