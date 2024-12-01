import React from "react";
import "./PageHome.css";
import { Helmet } from "react-helmet";
import NavigationBar from "../NavigationBar/NavigationBar";

class PageHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            socialLinks: [
                {
                    name: "Greptile",
                    url: "https://www.greptile.com/"
                },
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/vaishant/"
                },
                {
                    name: "GitHub",
                    url: "https://github.com/vkameswaran"
                },
                {
                    name: "Email",
                    url: "mailto:vaishant@greptile.com"
                },
            ],
            // resumeURL: "https://drive.google.com/file/d/1JPzr5QKHKoLl__RuM1sMnWDM_o9R1z1-/view?usp=sharing",
        }
    }

    componentDidMount() {
        this.props.transitionIn("Vaishant Kameswaran")
    }

    render() {
        console.log(this.props.history)
        return (
            <div className="home">
                <Helmet>
                    <title>Vaishant Kameswaran</title>
                    <meta name="description" content="Vaishant Kameswaran is co-founder and CTO at Greptile, where he builds AI that understands your codebase." />
                </Helmet>
                <header className="navbar">
                    <div class="h1tag">#</div>
                    <h1>&nbsp;</h1>
                    <NavigationBar pages={this.props.globalPages} pageTransitionFunction={this.props.pageTransitionFunction} />
                </header>
                <main>
                    <p>
                        I'm Vaishant, co-founder and CTO at Greptile.
                        <br />
                        <br />
                        We're building AI that understands your codebase, available as an API.
                        Check us out!
                    </p>

                    <div id="socialLinks">
                        {this.state.socialLinks.map(link => <span key={link.name}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a></span>)}
                    </div>

                    {this.state.resumeURL
                        && <p>Check out <a href={this.state.resumeURL} target="_blank" rel="noopener noreferrer">my resume</a>.</p>
                    }
                </main>
            </div>
        );
    }
}

export default PageHome;
