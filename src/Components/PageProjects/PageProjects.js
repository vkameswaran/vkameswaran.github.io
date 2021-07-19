import React from "react";
import "./PageProjects.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";

class PageProjects extends React.Component {
    componentDidMount() {
        this.props.transitionIn("Projects")
    }

    render() {
        return (
            <div className="projects">
                <Helmet>
                    <title>Projects | Vaishant Kameswaran</title>
                    <meta name="description" content="Check out a gallery of some of my recent projects." />
                </Helmet>
                <header className="navbar">
                    <div className="h1tag">#</div>
                    <h1>&nbsp;</h1>
                    <NavigationBar pages={this.props.globalPages} pageTransitionFunction={this.props.pageTransitionFunction} />
                </header>
                <main>
                    <p>This is a short introductory paragraph about the motivation and reasoning behind the projects that are featured on this page. What are my goals and processes in creating and sharing these projects?</p>
                    {this.props.projects.map(project => (
                        <div className="projectInfo" key={project.sortId}>
                            <div className="h2tag">##</div>
                            <h2>{project.name}</h2>
                                <p>{project.shortText}</p>
                            <Link to={"/projects" + project.suburl} onClick={this.props.pageTransitionFunction}>Read More
                            </Link>
                        </div>
                    ))}
                </main>
            </div>
        );
    }
}

export default PageProjects;