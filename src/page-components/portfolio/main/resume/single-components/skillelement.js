import React, {Component} from 'react';

export default class SkillElement extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <div className="skill-item">
                <h6 className="heading heading-h6"><i data-feather="check"></i>{this.props.label}</h6>
            </div>
        );
    }

}