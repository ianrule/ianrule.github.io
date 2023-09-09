import React, {Component} from 'react';

export default class HobbiesHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <div className="pricing-header">
                <div className="header-left">
                    <h2 className="title">{this.props.title}</h2>
                    <span>{this.props.subtitle}</span>
                </div>
                <div className="header-right">
                    <span>{this.props.tags}</span>
                </div>
            </div>
        );
    }

}