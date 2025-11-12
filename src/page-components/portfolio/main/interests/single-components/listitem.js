import React, {Component} from 'react';
import { Disc } from 'react-feather';

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
                <p><Disc /> {this.props.item}</p>
            </div>
        );
    }

}