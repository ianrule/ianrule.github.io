import React, {Component} from 'react';

export default class SingleTab extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <div className={this.props.classes} id={this.props.id} role="tabpanel" aria-labelledby={this.props.aria_labelledby}>
                <div className="personal-experience-inner mt--40">
                    {this.props.tab_content}
                </div>
            </div>
        );
    }

}