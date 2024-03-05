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
                    <meta name="description" content="Vaishant Kameswaran is a computer scientist from Georgia Tech passionate about using technology to unlock human creativity." />
                </Helmet>
                <header className="navbar">
                    <div class="h1tag">#</div>
                    <h1>&nbsp;</h1>
                    <NavigationBar pages={this.props.globalPages} pageTransitionFunction={this.props.pageTransitionFunction} />
                </header>
                <main>
                        <p>
                            I'm Vaishant, a computer scientist who recently graduated from the Georgia Institute of
                            Technology. My degree focused on artificial intelligence and computing theory, with a minor
                            in linguistics. I'm currently building a startup to simplify how people understand,
                            navigate, integrate, and debug large codebases.
                            <br/><br/>
                            If you're interested in chatting, or learning more about me, send me an email!
                        </p>

                        <p id="socialLinks">
                        {this.state.socialLinks.map(link => <span key={link.name}><a href={link.url} target="_blank"  rel="noopener noreferrer">{link.name}</a></span>)}
                        </p>

                        {this.state.resumeURL
                            && <p>Check out <a href={this.state.resumeURL} target="_blank" rel="noopener noreferrer">my resume</a>.</p>
                        }
                </main>
            </div>
        );
    }
}

export default PageHome;
