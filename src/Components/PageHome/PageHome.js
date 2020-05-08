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
            resumeURL: "http://www.africau.edu/images/default/sample.pdf"
        }
    }

    componentDidMount() {
        document.title = 'Vaishant Kameswaran';
    }

    render() {
        // TODO: Write the intro text
        return (
            <div className="home">
                <h1 id="titleText">Lorem ipsum dolor sit amet!</h1>
                <div className="content">
                    <img src="/images/main.jpeg" alt="Vaishant Kameswaran" className="left" />
                    <span className="right">
                        <p>Lorem ipsum dolor sit amet consectitur apidiscing. Lorem ipsum dolor sit amet consectitur apidiscing. Lorem ipsum dolor sit amet consectitur apidiscing. Lorem ipsum dolor sit amet consectitur apidiscing.</p>
                        <p>
                            {this.state.socialLinks.map(link => <span key={link.name}>{link.name}: <a href={link.url} target="_blank"  rel="noopener noreferrer">{link.text}</a></span>)}
                        </p>
                        <p>Check out <a href={this.state.resumeURL} target="_blank" rel="noopener noreferrer">my resumé</a>.</p>
                    </span>
                </div>
            </div>
        );
    }
}

export default PageHome;