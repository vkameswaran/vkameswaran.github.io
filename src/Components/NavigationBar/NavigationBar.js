import React from "react";
import "./NavigationBar.css";
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: window.location.pathname
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        setTimeout(() => {
            this.setState({
                current: window.location.hash
            })
        }, 0)
    }

    render() {
        return (
            <header className="navbar">
                <nav>
                    {this.props.pages.map(p =>
                        <Link className={p.linkCategory + (this.state.current.includes(p.url) ? " active" : "")}
                              to={p.url}
                              key={p.url}
                              onClick={this.handleChange}>
                            {p.navText}
                        </Link>
                    )}
                </nav>
            </header>
        );
    }
}

export default NavigationBar;