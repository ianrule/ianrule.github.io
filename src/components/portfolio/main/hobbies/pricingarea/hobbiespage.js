import React, {Component} from 'react';

export default class HobbiesPage extends Component {

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
                <div className="rn-pricing">
                    {this.props.page_content}
                </div>
            </div>
        );
    }

}