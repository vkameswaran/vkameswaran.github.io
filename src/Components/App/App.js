import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';

import PageHome from "../PageHome/PageHome";
import PageProjects from "../PageProjects/PageProjects";
import PageProjectDetail from "../PageProjectDetail/PageProjectDetail";
import PageError from "../PageError/PageError";
import PageWork from "../PageWork/PageWork";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Home",
            pages: [
                {
                    name: "Home",
                    linkCategory: "navlink",
                    navText: "Home",
                    url: "/",
                    component: PageHome
                },
                {
                    name: "Work",
                    linkCategory: "navlink",
                    navText: "Work",
                    url: "/work",
                    component: PageWork,
                },
                {
                    name: "Projects",
                    linkCategory: "navlink",
                    navText: "Projects",
                    url: "/projects",
                    component: PageProjects,
                },
            ],
            projects: [
                {
                    name: "JukeBot",
                    suburl: "/jukebot",
                    shortText: "A dancing robot that reacts to music in its surroundings.",
                    longText: "Jukebot is a project I made with Jeff Raghav and Tiffany Yan during Hack&Roll 2017, the annual hackathon at the National University of Singapore. JukeBot is a robot that dances in response to music in its surroundings, and we built it using mBot, an Arduino, and assorted electronics. I personally coded the Arduino to coordinate input and output between the LED matrix and the microphone. I also soldered and wired the components. This taught me a lot about the Arduino platform and the associated circuitry since I had never really worked with these kinds of tools before. We ended up winning the prize for Most Entertaining Hack, and I had a great time!",
                    image: "/images/projects/jukebot.jpg",
                    date: "January 2017",
                    sortId: "20170101",
                    links: [{
                        link: "https://devpost.com/software/84-jukebot",
                        text: "See this project on Devpost"
                    }],
                },
                {
                    name: "Stonks",
                    suburl: "/stonks",
                    shortText: "An algorithm that predicts stock prices using social media.",
                    longText: "Stonks is a project I made with Daksh Gupta, Karthik Subramanian, and Wei Xiong Toh during Hacklytics 2020, a data science hackathon at Georgia Tech. We scraped subreddits relevant to particular companies and also obtained historical stock price data. We then processed this data and trained a machine learning model to predict the stock prices. I personally processed the language data from Reddit into sentiment vectors using SpaCy and compiled the final training data with Pandas. This was my first time working with language data, and my first time analyzing datasets on such a large scale. I learned a lot about language processing and practical real-world data science!",
                    image: "/images/projects/stonks.png",
                    date: "February 2020",
                    sortId: "20200201",
                    links: [{
                        link: "https://devpost.com/software/stonks-i431j0",
                        text: "See this project on Devpost"
                    }, {
                        link: "https://github.com/karkir0003/Stonks",
                        text: "See our code on GitHub"
                    }],
                },
                {
                    name: "Shopping Slots",
                    suburl: "/shopping-slots",
                    shortText: "A web app that checks for available grocery delivery slots.",
                    longText: "Shopping Slots is an app I put together after learning about React development on Codecademy. In Singapore, in these uncertain times, it can sometimes be difficult to get groceries delivered, since the availability of delivery slots seems to come and go at random. This app scrapes grocery websites periodically to notify the user when a slot opens up. I originally coded this in Python, but then rewrote it in JavaScript to make it available online. This was the first installable Progressive Web App I made entirely on my own using React, and I learned a lot about JavaScript development through this process.",
                    image: "/images/projects/shoppingslots.png",
                    date: "April 2020",
                    sortId: "20200401",
                    links: [{
                        link: "https://shoppingslots.surge.sh/",
                        text: "See this project live"
                    }],
                },
                {
                    name: "GT CourseBot",
                    suburl: "/coursebot",
                    shortText: "A dialog agent that finds Georgia Tech class prerequisites.",
                    longText: "This project started as a simple Python script that I wrote for myself, but I built it into a full-fledged dialog agent as part of a project for LING 4015. Course prerequisites at Georgia Tech can sometimes be difficult and time-consuming to locate online. However, with CourseBot, users can simply ask for the prerequisites of a Georgia Tech course using natural language, and get results back in a few seconds. The backend was written in Python (FastAPI and BeautifulSoup) and hosted using Heroku, and the dialog agent was developed and trained using Google DialogFlow. This was my first experience building a real-world dialog agent, even with a high-level tool like DialogFlow, meaning I had to learn about intents, entities, and how to establish conversational flows. This also allowed me to practice building and using APIs.\n",
                    image: "/images/projects/coursebot.png",
                    date: "October 2020",
                    sortId: "20201001",
                    links: [{
                        link: "https://gtcoursebot.surge.sh/",
                        text: "See this project live"
                    }],
                },
                {
                    name: "Movie Suggestions",
                    suburl: "/movie-suggestions",
                    shortText: "A series of short Python scripts to search a movie dataset.",
                    longText: "This project was a small experiment I worked on during the summer of 2020. I found a movie dataset online, and wanted to use it to build something useful and interesting. I wrote a few different scripts to process and search the dataset. Perhaps the most useful feature I created is the ability to enter a movie's name, and return other 'similar' movies, based on the actors and crew members that worked on it. I wrote everything in Python, using the pandas and json packages. This project helped me gain more experience working with pandas, and manipulating datasets in Python.\n",
                    image: "/images/projects/movie_suggestions.png",
                    date: "July 2020",
                    sortId: "20200701",
                    links: [{
                        link: "https://github.com/vkameswaran/movie_suggestions",
                        text: "See my code on GitHub"
                    }],
                },
            ],
            work: [
                {
                    name: "Data Science Intern @ McLaren Applied Technologies",
                    sortId: "20170601",
                    shortText: "Validated, standardized, and formatted client datasets, using Microsoft Excel, to allow further analysis by the data science team. Handled data used in public transport and healthcare research."
                },
                {
                    name: "Undergrad TA @ Georgia Tech",
                    sortId: "20200501",
                    shortText: "TA for Data Structures and Algorithms. Held weekly office hours, reviewed exams and homework assignments, corrected homework submissions, and worked with other TAs to answer student questions on Piazza."
                },
                {
                    name: "Data Scientist @ Mentra",
                    sortId: "20201201",
                    shortText: "Worked in a small data science team to explore natural language data, build classification models, and create algorithms to match neurodiverse candidates to jobs. Used Python packages such as Pandas, NumPy, and scikit-learn. Interviewed, recruited, and managed student volunteers on campus."
                },
                {
                    name: "SDE 1 Intern @ Amazon",
                    sortId: "20210601",
                    shortText: "Designed and implemented internal tools, built on AWS, to support the operations of a confidential project. Analyzed different design options to arrive at the optimal choice, weighing simplicity and future extensibility. Learned to write code in Kotlin, and gained experience designing, implementing, and testing code within a large company. Received a return offer."
                },
                {
                    name: "SWE Intern @ HubSpot",
                    sortId: "20220601",
                    shortText: "Worked on the team responsible for the availability and dynamic rendering of webpages hosted on HubSpot’s CMS. Learned about Kafka, Cloudflare Workers, Jinja templates, and the design of large-scale systems serving hundreds of millions of requests per day. Implemented new features and wrote tests in Java."
                },
                {
                    name: "Co-Founder @ Greptile (YC W24)",
                    sortId: "20230501",
                    shortText: "AI that understands your codebase, available as an API."
                }
            ]
        }
    }

    transitionOut = async (e) => {
        e.preventDefault();
        let url = e.target.attributes["href"].value.substring(2);

        // If we are navigating to the same page, don't do the animation
        if (this.props.history.location.pathname.substring(1) === url) {
            return
        }

        window.scrollTo(0, 0);
        let pageContents = document.getElementsByTagName("main")[0];
        pageContents.style.opacity = 0;

        let title = document.getElementsByTagName("h1")[0];
        for (let i = 0, j = title.innerText.length; i < j; i++) {
            title.innerText = title.innerText.substring(0, title.innerText.length - 1) || '\xa0';
            await new Promise(r => setTimeout(r, 500 / j));
        }

        this.props.history.push("/" + url)
    };

    transitionIn = async (pageHeading) => {
        let title = document.getElementsByTagName("h1")[0];
        for (let i = 0, j = pageHeading.length; i <= j; i++) {
            title.innerText = pageHeading.substring(0, i) || '\xa0';
            await new Promise(r => setTimeout(r, 500 / j));
        }

        let pageContents = document.getElementsByTagName("main")[0];
        pageContents.style.opacity = 1
    };

    render() {
        return (
            <div className="app">
                <Switch>

                    {/* Path to pages */}
                    {this.state.pages.map(p =>
                        <Route
                            path={p.url}
                            render={
                                () => (<p.component
                                    projects={(p.name === "Projects") && this.state.projects.sort((p1, p2) => p2.sortId - p1.sortId)}
                                    work={(p.name === "Work") && this.state.work.sort((p1, p2) => p2.sortId - p1.sortId)}
                                    globalPages={this.state.pages.filter(p => p.linkCategory !== "none")}
                                    pageTransitionFunction={this.transitionOut}
                                    transitionIn={this.transitionIn}
                                />)}
                            exact
                            key={p.name}
                        />)}

                    {/* Path to projects */}
                    {this.state.projects.map(p =>
                        <Route
                            path={"/projects" + p.suburl}
                            render={() => <PageProjectDetail
                                project={p}
                                globalPages={this.state.pages.filter(p => p.linkCategory !== "none")}
                                pageTransitionFunction={this.transitionOut}
                                transitionIn={this.transitionIn}
                            />}
                            exact
                            key={p.name}
                        />)
                    }

                    {/* Catch other paths (404) */}
                    <Route component={PageError} />

                </Switch>
            </div>
        );
    }

}

export default withRouter(App);
