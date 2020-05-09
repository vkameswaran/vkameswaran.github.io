import React from "react";
import "./PageProjects.css";

class PageProjects extends React.Component {

    componentDidMount() {
        document.title = 'Projects | Vaishant Kameswaran';
    }

    render() {
        return (
            <div className="projects">
                <h1 id="titleText">Here are some of my projects!</h1>
                <div className="projectGrid">
                    {this.props.projects.map(project => (
                        <a href={"/projects" + project.suburl} key={project.sortId}>
                            <div className="card">
                                <img src={project.image} alt={project.name} />
                                <div className="details">
                                    <h2>{project.name}</h2>
                                    <p>{project.shortText}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}

export default PageProjects;