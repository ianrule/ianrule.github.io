import React, {Component} from 'react';

export default class ListElement extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <div className="resume-single-list">
                <div className="inner">
                    <div className="heading">
                        <div className="title">
                            <h4>{this.props.title}</h4>
                            <span>{this.props.institution}</span>
                        </div>
                        <div className="date-of-time">
                            <span>{this.props.tag}</span>
                        </div>
                    </div>
                    <p className="description">{this.props.description}</p>
                </div>
            </div>
        );
    }

}
