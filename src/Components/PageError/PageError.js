import React from "react";
import "./PageError.css";
import { Redirect } from 'react-router-dom';

class PageError extends React.Component {

    render() {
        const closestLocation = window.location.hash.substring(1, window.location.hash.lastIndexOf("/"));
        return (
            <Redirect to={closestLocation} />
        );
    }
}

export default PageError;