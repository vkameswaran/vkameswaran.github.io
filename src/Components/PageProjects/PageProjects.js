import React from "react";
import "./PageProjects.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class PageProjects extends React.Component {

    render() {
        return (
            <div className="projects">
                <Helmet>
                    <title>Projects | Vaishant Kameswaran</title>
                    <meta name="description" content="Check out a gallery of some of my recent projects." />
                </Helmet>
                <h1 id="titleText">Here are some of my projects!</h1>
                <p>Click to learn more.</p>
                <div className="projectGrid">
                    {this.props.projects.map(project => (
                        <Link to={"/projects" + project.suburl} key={project.sortId}>
                            <div className="card">
                                <img src={project.image} alt={project.name} />
                                <div className="details">
                                    <h2>{project.name}</h2>
                                    <p>{project.shortText}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}

export default PageProjects;