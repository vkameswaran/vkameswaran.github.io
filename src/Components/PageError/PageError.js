import React from "react";
import "./PageError.css";

class PageError extends React.Component {

    componentDidMount() {
        document.title = 'Page not found | Vaishant Kameswaran';
    }

    render() {
        return (
            <div className="error">
                <p>This page wasn't found.</p>
                <p>Go to my <a href="/">homepage</a> or check out some of my <a href="/projects">projects</a>!</p>
            </div>
        );
    }
}

export default PageError;