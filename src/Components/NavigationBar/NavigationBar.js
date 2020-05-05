import React from "react";
import { Link } from 'react-router-dom';
import "./NavigationBar.css";

class NavigationBar extends React.Component {
    render() {
        return (
            <header className="navbar">
                <nav>
                    {this.props.pages.map(p => <Link className={p.linkCategory} to={p.url} key={p.url}>{p.navText}</Link>)}
                </nav>
            </header>
        );
    }
}

export default NavigationBar;