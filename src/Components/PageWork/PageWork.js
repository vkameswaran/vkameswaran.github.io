import React from "react";
import "./PageWork.css";
import { Helmet } from "react-helmet";
import NavigationBar from "../NavigationBar/NavigationBar";

class PageWork extends React.Component {
    componentDidMount() {
        this.props.transitionIn("Work")
    }

    render() {
        return (
            <div className="work">
                <Helmet>
                    <title>Work | Vaishant Kameswaran</title>
                    <meta name="description" content="Here's a brief summary of my work experience." />
                </Helmet>
                <header className="navbar">
                    <div className="h1tag">#</div>
                    <h1>&nbsp;</h1>
                    <NavigationBar pages={this.props.globalPages} pageTransitionFunction={this.props.pageTransitionFunction} />
                </header>
                <main>
                    <p>This is a short introductory paragraph about the work I’ve done in the past, and what kind of work I’m looking to take on and learn more about in the future.</p>
                    {this.props.work.map(workExperience => (
                        <div className="workInfo" key={workExperience.sortId}>
                            <div className="h2tag">##</div>
                            <h2>{workExperience.name}</h2>
                                <p>{workExperience.shortText}</p>
                        </div>
                    ))}
                </main>
            </div>
        );
    }
}

export default PageWork;