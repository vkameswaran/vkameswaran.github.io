import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import NavigationBar from "../NavigationBar/NavigationBar";
import PageHome from "../PageHome/PageHome";
import PageProjects from "../PageProjects/PageProjects";
import PageProjectDetail from "../PageProjectDetail/PageProjectDetail";
import PageError from "../PageError/PageError";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        currentPage: "Home",
        pages: [
            {
                name: "Home",
                linkCategory: "logo",
                navText: "Vaishant Kameswaran",
                url: "/",
                component: PageHome
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
                    text: "See our code on Github"
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
        ]
    }
  }

  render() {
    return (
        <div className="app">
          <NavigationBar pages={this.state.pages.filter(p => p.linkCategory !== "none")} />
          <main>
              <Switch>

                  {/* Path to pages */}
                  {this.state.pages.map(p =>
                      <Route
                          path={p.url}
                          render={() => (<p.component projects={(p.name === "Projects") && this.state.projects.sort((p1, p2) => p2.sortId - p1.sortId)} />)}
                          exact
                          key={p.name}
                      />)}

                  {/* Path to projects */}
                  {this.state.projects.map(p =>
                      <Route
                          path={"/projects" + p.suburl}
                          render={() => <PageProjectDetail project={p} />}
                          exact
                          key={p.name}
                      />)
                  }

                  {/* Catch other paths (404) */}
                  <Route component={PageError} />

              </Switch>
          </main>

        </div>
    );
  }

}

export default App;