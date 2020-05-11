import React from "react";
import "./PageHome.css";

class PageHome extends React.Component {

    constructor(props) {
        super(props);
        // TODO: Update resumé
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
            resumeURL: ""
        }
    }

    componentDidMount() {
        document.title = 'Vaishant Kameswaran';
    }

    render() {
        return (
            <div className="home">
                <h1 id="titleText">Hey, I'm Vaishant!</h1>
                <div className="content">
                    <img src="/images/main.jpeg" alt="Vaishant Kameswaran" className="left" />
                    <span className="right">

                        <p>
                            I'm a first year computer science major at Georgia Tech interested in using technology to
                            improve lives. I'm currently working on assorted projects, and building up my portfolio.
                            Feel free to reach out to me!
                        </p>

                        <p>
                            {this.state.socialLinks.map(link => <span key={link.name}>{link.name}: <a href={link.url} target="_blank"  rel="noopener noreferrer">{link.text}</a></span>)}
                        </p>

                        {this.state.resumeURL
                            && <p>Check out <a href={this.state.resumeURL} target="_blank" rel="noopener noreferrer">my resumé</a>.</p>
                        }

                    </span>
                </div>
            </div>
        );
    }
}

export default PageHome;