import React, {Component} from 'react';

export default class SkillList extends Component {

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
                <div className="content">
                    <span className="subtitle">{this.props.dates}</span>
                    <h4 className="maintitle">{this.props.title}</h4>
                    <div className="experience-list">
                        {this.props.list_content}
                    </div>
                    {this.props.more_button}
                </div>
            </div>
        );
    }

}