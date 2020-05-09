import React from "react";
import "./PageProjectDetail.css";

class PageProjectDetail extends React.Component {

    componentDidMount() {
        document.title = this.props.project.name + ' | Vaishant Kameswaran';
    }

    render() {
        return (
            <div className="project">
                <header>
                    <a className="backButton" href="/projects" aria-label="Back">←</a>
                    <h1 id="titleText">{this.props.project.name}</h1>
                </header>
                <div className="content">
                    <span className="left">

                        <p className="date"><small>{this.props.project.date}</small></p>
                        <p className="description">{this.props.project.longText}</p>

                        {this.props.project.links.map(item =>
                            <p className="live" key={item.link}>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
                            </p>)
                        }
                    </span>
                    <img src={this.props.project.image} alt={this.props.project.name} className="right" />
                </div>
            </div>
        );
    }
}

export default PageProjectDetail;