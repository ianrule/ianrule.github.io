import React, {Component} from 'react';
import SectionTitle from '../section-components/sectiontitle';
import HobbiesArea from './single-components/hobbiesarea';

export default class Interests extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <section id="interests">
                <div className="rn-pricing-area rn-section-gap section-separator" id="pricing">
                    <div className="container">
                        <div className="row mt--38 mt_md--38 mt_sm--0 ml--20 mr--20">
                            {/* section title */}
                            <div className="col-lg-3 col-xl-4 small-margin-pricing">
                                <div className="d-block d-lg-flex text-center d-lg-left section-flex flex-wrap align-content-start h-100">
                                    <div className="position-sticky sticky-top rbt-sticky-top-adjust" style={{margin: "0 auto"}}>
                                        <SectionTitle
                                            title="Interests"
                                            subtitle="My Personal Interests"
                                        >
                                        </SectionTitle>
                                    </div>
                                </div>
                            </div>

                            {/* interests */}
                            <div className="col-lg-9 col-xl-8 mt_sm--38">
                                <HobbiesArea></HobbiesArea>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}