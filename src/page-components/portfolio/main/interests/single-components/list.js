import React, {Component} from 'react';

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <div className="check-wrapper">
                <div className="left-area">
                    {this.props.left_content}
                </div>
                <div className="right-area">
                    {this.props.right_content}
                </div>
            </div>
        );
    }

}
