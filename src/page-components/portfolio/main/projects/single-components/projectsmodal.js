import React, {Component} from 'react';

export default class ProjectsModal extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i data-feather="x"></i></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row align-items-center">

                                <div className="col-lg-6">
                                    <div className="portfolio-popup-thumbnail">
                                        <div className="image">
                                            <img className="w-100" src={this.props.img_src} alt="slide"></img>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="text-content">
                                        <h3>
                                            <span>{this.props.category}</span>
                                            {this.props.title}
                                        </h3>
                                        <p className="mb--30">{this.props.description}</p>
                                        <div className="button-group mt--20">
                                            <a href={this.props.project_link} className="rn-btn">
                                                <span>VIEW PROJECT</span>
                                                <i data-feather="chevron-right"></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
