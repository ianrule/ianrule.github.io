import React, {Component} from 'react';
import HobbiesArea from './hobbies/hobbiesarea';

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
            <div className="rn-pricing-area rn-section-gap section-separator" id="pricing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-xl-5 mb_md--40 mb_sm--40 small-margin-pricing">
                            <div className="d-block d-lg-flex text-center d-lg-left section-flex flex-wrap align-content-start h-100">
                                <div className="position-sticky sticky-top rbt-sticky-top-adjust">
                                    <div className="section-title text-left">
                                        <span className="subtitle text-center text-lg-left">Hobbies</span>
                                        <h2 className="title text-center text-lg-left">A Look At My Hobbies</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-xl-7">

                            <HobbiesArea></HobbiesArea>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}