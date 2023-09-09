import React, {Component} from 'react';

export default class SinglePortfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <div data-aos="fade-up" data-aos-delay={this.props.data_aos_delay} data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target={this.props.data_bs_target}>
                    <div className="inner">
                        <div className="thumbnail">
                            <a href="/#portfolio">
                                <img src={this.props.img_src} alt="Personal Portfolio Images"></img>
                            </a>
                        </div>
                        <div className="content">
                            <div className="category-info">
                                <div className="category-list">
                                    <a href="/#portfolio">{this.props.category}</a>
                                </div>
                            </div>
                            <h4 className="title"><a href="/#portfolio">{this.props.title}<i
                                className="feather-arrow-up-right"></i></a></h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}