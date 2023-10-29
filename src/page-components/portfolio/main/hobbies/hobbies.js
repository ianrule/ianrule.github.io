import React, {Component} from 'react';
import SectionTitle from '../section-components/sectiontitle';
import HobbiesArea from './single-components/hobbiesarea';

export default class Hobbies extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <section style={{width: "90%", margin: "0 auto"}} id="hobbies">
                <div className="rn-pricing-area rn-section-gap section-separator" id="pricing">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-xl-5 mb_md--40 mb_sm--40 small-margin-pricing">
                                <div className="d-block d-lg-flex text-center d-lg-left section-flex flex-wrap align-content-start h-100">
                                    <div className="position-sticky sticky-top rbt-sticky-top-adjust" style={{margin: "0 auto"}}>
                                        <SectionTitle
                                                    title="Hobbies"
                                                    subtitle="A Look at my Hobbies"
                                                >
                                        </SectionTitle>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 col-xl-7">

                                <HobbiesArea></HobbiesArea>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}