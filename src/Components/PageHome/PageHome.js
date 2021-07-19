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
                    name: "Email",
                    text: "vaishant@gatech.edu",
                    url: "mailto:vaishant@gatech.edu"
                },
                {
                    name: "Github",
                    text: "vkameswaran",
                    url: "https://github.com/vkameswaran"
                },
                {
                    name: "LinkedIn",
                    text: "vaishant",
                    url: "https://www.linkedin.com/in/vaishant/"
                },
            ],
            resumeURL: "https://drive.google.com/file/d/1w9_y3GKMfVbFCB9ub3xM55mFAoMhSxwK/view?usp=sharing",
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
                    <meta name="description" content="Vaishant Kameswaran is a second year computer science major at Georgia Tech interested in using technology to improve lives." />
                </Helmet>
                <header className="navbar">
                    <div class="h1tag">#</div>
                    <h1>&nbsp;</h1>
                    <NavigationBar pages={this.props.globalPages} pageTransitionFunction={this.props.pageTransitionFunction} />
                </header>
                <main>
                        <p>
                            I'm a second year computer science major at Georgia Tech interested in using technology to
                            improve lives. I'm currently working on assorted projects, and building up my portfolio.
                            Feel free to reach out to me!
                        </p>

                        <p id="socialLinks">
                        {this.state.socialLinks.map(link => <span key={link.name}><a href={link.url} target="_blank"  rel="noopener noreferrer">{link.name}</a></span>)}
                        </p>

                        {this.state.resumeURL
                            && <p>Check out <a href={this.state.resumeURL} target="_blank" rel="noopener noreferrer">my resumé</a>.</p>
                        }
                </main>
            </div>
        );
    }
}

export default PageHome;