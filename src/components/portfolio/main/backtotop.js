import React, {Component} from 'react';
import * as Icon from 'react-feather';

export default class BackToTop extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <div className="backto-top">
                <div>
                    <i><Icon.ArrowUp></Icon.ArrowUp></i>
                </div>
            </div>
        );
    }

}