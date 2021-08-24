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
                    <p>
                        I have experience in software engineering and data science roles, through various
                        internships and projects over the years. In my next internships, I aim to gain
                        exposure to new tools, industries, and technologies, to further broaden my
                        experiences and knowledge.
                    </p>
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