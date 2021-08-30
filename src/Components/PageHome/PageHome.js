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
            resumeURL: "https://drive.google.com/file/d/13SegOJXTKJmbwlaqJgcsQmkQ_S4R2l6s/view?usp=sharing",
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
                    <meta name="description" content="Vaishant Kameswaran is a third-year computer science major at Georgia Tech interested in using technology to improve lives." />
                </Helmet>
                <header className="navbar">
                    <div class="h1tag">#</div>
                    <h1>&nbsp;</h1>
                    <NavigationBar pages={this.props.globalPages} pageTransitionFunction={this.props.pageTransitionFunction} />
                </header>
                <main>
                        <p>
                            I'm Vaishant, a third-year computer science student at the Georgia Institute of
                            Technology. I'm focusing on studying artificial intelligence and the theory of
                            computing, while also pursuing a minor in linguistics. At the moment, I'm looking
                            for an internship for summer/fall 2022, where I can learn new skills, gain diverse
                            experiences, and further develop my career.
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