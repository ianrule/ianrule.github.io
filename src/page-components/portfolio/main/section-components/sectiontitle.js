import React, {Component} from 'react';

export default class SectionTitle extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <div className="section-title text-center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true">
                <h2 className="title">{this.props.title}</h2>
                <span className="subtitle">{this.props.subtitle}</span>
            </div>
        );
    }

}