import React, {Component} from 'react';

export default class ProgressBar extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <div className="progress-charts">
                <h6 className="heading heading-h6">{this.props.label}</h6>
                <div className="progress">
                    <div className="progress-bar wow fadeInLeft" data-wow-duration={this.props.data_wow_duration} data-wow-delay={this.props.data_wow_delay} role="progressbar" style={{width: this.props.percentage}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                    className="percent-label">{this.props.percentage}</span></div>
                </div>
            </div>
        );
    }

}