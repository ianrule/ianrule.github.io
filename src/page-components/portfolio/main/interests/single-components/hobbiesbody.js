import React, {Component} from 'react';

export default class HobbiesBody extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <div className="pricing-body">
                <p className="description" style={{textJustify: "center"}}>
                    {this.props.description}
                    {this.props.extra_description}
                    {this.props.read_more_btn}
                </p>
                {this.props.body_content}
            </div>
        );
    }

}