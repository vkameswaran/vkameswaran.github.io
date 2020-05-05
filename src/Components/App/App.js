import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import NavigationBar from "../NavigationBar/NavigationBar";
import PageHome from "../PageHome/PageHome";
import PageProjects from "../PageProjects/PageProjects";
import PageResume from "../PageResume/PageResume";
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
                component: PageProjects
            },
            {
                name: "Resumé",
                linkCategory: "navlink",
                navText: "Resumé",
                url: "/resume",
                component: PageResume
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
                  {this.state.pages.map(p => <Route path={p.url} component={p.component} exact key={p.name} />)}
                  <Route component={PageError} />
              </Switch>
          </main>

        </div>
    );
  }

}

export default App;