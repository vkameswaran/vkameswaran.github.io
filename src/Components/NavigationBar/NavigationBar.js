import React from "react";
import "./NavigationBar.css";
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    render() {
        return (
            <nav>
                {this.props.pages.map(p =>
                    <Link className={p.linkCategory}
                          to={p.url}
                          key={p.url}
                          onClick={this.props.pageTransitionFunction}>
                        {p.navText}
                    </Link>
                )}
            </nav>
        );
    }
}

export default NavigationBar;