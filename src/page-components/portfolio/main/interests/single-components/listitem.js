import React, {Component} from 'react';

export default class ListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <div className="check">
                <p><i data-feather={this.props.data_feather}></i> {this.props.item}</p>
            </div>
        );
    }

}