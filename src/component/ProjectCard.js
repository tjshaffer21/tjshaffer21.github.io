import React from "react";
import "./ProjectCard.css";

class ProjectCard extends React.Component {
    render() {
        return (
            <div className="project-card">
                <h4><a href={this.props.link}>{this.props.title}</a></h4>
                <ul>
                    <li>{this.props.tools}</li>
                    <li>{this.props.description}</li>
                </ul>
            </div>
        );
    }
}
export default ProjectCard;