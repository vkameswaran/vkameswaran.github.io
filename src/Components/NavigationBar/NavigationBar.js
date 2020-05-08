import React from "react";
import "./NavigationBar.css";

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
                current: window.location.pathname
            })
        }, 0)
    }

    render() {
        return (
            <header className="navbar">
                <nav>
                    {this.props.pages.map(p =>
                        <a className={p.linkCategory + (this.state.current.includes(p.url) ? " active" : "")}
                              href={p.url}
                              key={p.url}
                              onClick={this.handleChange}>
                            {p.navText}
                        </a>
                    )}
                </nav>
            </header>
        );
    }
}

export default NavigationBar;