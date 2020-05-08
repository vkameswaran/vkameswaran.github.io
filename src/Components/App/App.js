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
                name: "Title Which Is Awesome",
                suburl: "/project1",
                shortText: "This is a short description of Project 1.",
                longText: "This is a longer description of Project 1, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 1, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 1, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 1, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 1, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning.",
                image: "/images/main.jpeg",
                date: "April 2020",
                sortId: "20200401",
                live: "https://www.google.com"
            },
            {
                name: "Title Which Is Awesome",
                suburl: "/project2",
                shortText: "This is a short description of Project 2.",
                longText: "This is a longer description of Project 2, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 2, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 2, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 2, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 2, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning.",
                image: "/images/main.jpeg",
                date: "April 2020",
                sortId: "20200402",
                live: "https://www.google.com"
            },
            {
                name: "Title Which Is Awesome",
                suburl: "/project3",
                shortText: "This is a short description of Project 3.",
                longText: "This is a longer description of Project 3, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 3, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 3, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 3, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 3, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning.",
                image: "/images/main.jpeg",
                date: "April 2020",
                sortId: "20200403",
                live: "https://www.google.com"
            },
            {
                name: "Title Which Is Awesome",
                suburl: "/project6",
                shortText: "This is a short description of Project 6.",
                longText: "This is a longer description of Project 6, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 6, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 6, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 6, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 6, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning.",
                image: "/images/main.jpeg",
                date: "April 2020",
                sortId: "20200406",
                live: "https://www.google.com"
            },
            {
                name: "Title Which Is Awesome",
                suburl: "/project7",
                shortText: "This is a short description of Project 7.",
                longText: "This is a longer description of Project 7, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 7, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 7, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 7, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 7, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning.",
                image: "/images/main.jpeg",
                date: "April 2020",
                sortId: "20200407",
                live: "https://www.google.com"
            },
            {
                name: "Title Which Is Awesome",
                suburl: "/project4",
                shortText: "This is a short description of Project 4.",
                longText: "This is a longer description of Project 4, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 4, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 4, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 4, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 4, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning.",
                image: "/images/main.jpeg",
                date: "April 2020",
                sortId: "20200404",
                live: "https://www.google.com"
            },
            {
                name: "Title Which Is Awesome",
                suburl: "/project5",
                shortText: "This is a short description of Project 5.",
                longText: "This is a longer description of Project 5, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 5, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 5, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 5, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning. This is a longer description of Project 5, wherein I go into a lot more detail about the " +
                    "whole process, along with my personal learning.",
                image: "/images/main.jpeg",
                date: "April 2020",
                sortId: "20200405",
                live: "https://www.google.com"
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