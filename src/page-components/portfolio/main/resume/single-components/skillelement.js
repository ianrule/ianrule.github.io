import React, {Component} from 'react';

export default class SkillElement extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return;
    }

    render() {
        return (
          <div className="skill-item">
            <h6 className="heading heading-h6" style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "16px"}}>
              { this.props.skill_icon?.toString().includes("png")
                  ? <img src={this.props.skill_icon} alt={this.props.label + " Logo"}/> 
                  : <span className="material-symbols-outlined"
                          style={{fontSize: "32px", color: "var(--color-primary)"}}>
                      {this.props.skill_icon}
                    </span>
              }                    
              {this.props.label}
            </h6>
          </div>
        );
    }

}