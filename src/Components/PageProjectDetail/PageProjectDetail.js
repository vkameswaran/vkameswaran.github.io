import React from "react";
import "./PageProjectDetail.css";
import { Helmet } from "react-helmet";
import NavigationBar from "../NavigationBar/NavigationBar";

class PageProjectDetail extends React.Component {
    componentDidMount() {
        this.props.transitionIn(this.props.project.name)
    }

    render() {
        return (
            <div className="project">
                <Helmet>
                    <title>{this.props.project.name + ' | Vaishant Kameswaran'}</title>
                    <meta name="description" content={this.props.project.shortText} />
                </Helmet>
                <header className="navbar">
                    <div className="h1tag">#</div>
                    <h1>&nbsp;</h1>
                    <NavigationBar pages={this.props.globalPages} pageTransitionFunction={this.props.pageTransitionFunction} />
                </header>
                <main>
                    <p className="tagline"><strong>{this.props.project.date}</strong>. {this.props.project.shortText}</p>
                    <img src={this.props.project.image} alt={this.props.project.name} />
                    <p className="description">{this.props.project.longText}</p>

                    {this.props.project.links && <p className="links">
                        {this.props.project.links.map(item =>
                        <span className="live" key={item.link}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
                        </span>)}
                    </p>}
                </main>
            </div>
        );
    }
}

export default PageProjectDetail;