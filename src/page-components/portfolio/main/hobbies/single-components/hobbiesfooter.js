import React, {Component} from 'react';

export default class HobbiesFooter extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <div className="pricing-footer">
                <a href="/#" className="rn-btn d-block">
                    <span>{this.props.btn_label}</span>
                </a>
            </div>
        );
    }

}