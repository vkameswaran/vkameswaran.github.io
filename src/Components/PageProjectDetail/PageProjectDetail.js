import React from "react";
import "./PageProjectDetail.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class PageProjectDetail extends React.Component {

    render() {
        return (
            <div className="project">
                <Helmet>
                    <title>{this.props.project.name + ' | Vaishant Kameswaran'}</title>
                    <meta name="description" content={this.props.project.shortText} />
                </Helmet>
                <header>
                    <Link className="backButton" to="/projects" aria-label="Back">←</Link>
                    <h1 id="titleText">{this.props.project.name}</h1>
                </header>
                <div className="content">
                    <span className="left">

                        <p className="date"><small>{this.props.project.date}</small></p>
                        <p className="description">{this.props.project.longText}</p>

                        {this.props.project.links && <p className="links">
                            {this.props.project.links.map(item =>
                            <span className="live" key={item.link}>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
                            </span>)}
                        </p>}

                    </span>
                    <img src={this.props.project.image} alt={this.props.project.name} className="right" />
                </div>
            </div>
        );
    }
}

export default PageProjectDetail;