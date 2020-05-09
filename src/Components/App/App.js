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
                longText: "Jukebot is a project I made with Jeff Raghav and Tiffany Yan during Hack&Roll 2017, the annual hackathon at the National University of Singapore. JukeBot is a robot that dances in response to music in its surroundings, and we built it using mBot, an Arduino, and assorted electronics. I personally coded the Arduino to coordinate input and output between the LED matrix and microphone. I also soldered and wired the components. This taught me a lot about the Arduino platform and the associated circuitry, since I had never really worked with these kinds of tools before. We ended up winning the prize for Most Entertaining Hack, and I had a great time!",
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
                longText: "Stonks is a project I made with Daksh Gupta, Karthik Subramanian, and Wei Xiong Toh during Hacklytics 2020, a data science hackathon at Georgia Tech. We scraped subreddits relevant to particular companies, and also obtained historical stock price data. We then processed this data and trained a machine learning model to predict the stock prices. I personally processed the language data from Reddit into sentiment vectors using SpaCy, and compiled the final training data with Pandas. This was my first time working with language data, and my first time analyzing datasets on such a large scale. I learnt a lot about language processing, and practical real-world data science!",
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