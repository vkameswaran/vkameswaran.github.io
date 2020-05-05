import React from "react";
import "./PageHome.css";


class PageHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titleText: "Lorem ipsum dolor sit amet!",
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
            ]
        }

        this.typeText = this.typeText.bind(this);
    }

    componentDidMount() {
        document.getElementById("titleText").innerHTML = "";
        this.typeText(this.state.titleText, 0);
    }

    typeText(text, i) {
        const e = document.getElementById("titleText");
        console.log(text, i);
        if (i < text.length) {
            e.innerHTML += text[i];
            setTimeout(this.typeText.bind(e, text, i + 1), 75);
        }
    }

    render() {
        return (
            <div className="home">
                <h1 id="titleText">{this.state.titleText}</h1>
                {/* TODO: This title */}
                <div className="content">
                    <img src="/images/main.jpeg" alt="Vaishant Kameswaran" className="left" />
                    <span className="right">
                    <p>Lorem ipsum dolor sit amet consectitur apidiscing. Lorem ipsum dolor sit amet consectitur apidiscing. Lorem ipsum dolor sit amet consectitur apidiscing. Lorem ipsum dolor sit amet consectitur apidiscing.</p>
                    <p>Lorem ipsum dolor sit amet consectitur apidiscing. Lorem ipsum dolor sit amet consectitur apidiscing. Lorem ipsum dolor sit amet consectitur apidiscing. Lorem ipsum dolor sit amet consectitur apidiscing.</p>
                    <p>
                        {this.state.socialLinks.map(link => <span key={link.name}>{link.name}: <a href={link.url}>{link.text}</a></span>)}
                    </p>
                </span>
                </div>
            </div>
        );
    }
}

export default PageHome;