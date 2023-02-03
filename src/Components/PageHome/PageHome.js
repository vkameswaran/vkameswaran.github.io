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
                    url: "mailto:vaishant@gatech.edu"
                },
                {
                    name: "GitHub",
                    url: "https://github.com/vkameswaran"
                },
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/vaishant/"
                },
            ],
            resumeURL: "https://drive.google.com/file/d/1JPzr5QKHKoLl__RuM1sMnWDM_o9R1z1-/view?usp=sharing",
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
                    <meta name="description" content="Vaishant Kameswaran is a graduating computer scientist from Georgia Tech passionate about using technology to improve lives." />
                </Helmet>
                <header className="navbar">
                    <div class="h1tag">#</div>
                    <h1>&nbsp;</h1>
                    <NavigationBar pages={this.props.globalPages} pageTransitionFunction={this.props.pageTransitionFunction} />
                </header>
                <main>
                        <p>
                            I'm Vaishant, a computer scientist graduating from the Georgia Institute of Technology. My
                            degree focused on artificial intelligence and computing theory, and I've also been pursuing
                            a minor in linguistics. I'm currently looking for an exciting, mission-driven project to
                            work on after I graduate, where I can continue to learn, grow, and build my technological
                            skillset.
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