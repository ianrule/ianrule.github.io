import React, {Component} from 'react';

export default class SkillChart extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <div className={this.props.classes}>
                <div className="progress-wrapper">
                    <div className="content">
                        <span className="subtitle">{this.props.subtitle}</span>
                        <h4 className="maintitle">{this.props.maintitle}</h4>
                        {this.props.bar_content}
                        {this.props.more_button}
                    </div>
                </div>
            </div>
        );
    }

}