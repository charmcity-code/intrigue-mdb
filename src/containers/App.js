import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavbarPage from "../components/NavbarPage";
import Default from "../containers/Default";
import TasksContainer from "./TasksContainer";
import ConfigContainer from "./ConfigContainer";
import EntityContainer from "./EntityContainer";
import ResultsContainer from "./ResultsContainer";
import IssuesContainer from "./IssuesContainer";

class App extends Component {
  render() {
    return (
      <main>
        <NavbarPage />
        <Switch>
          <Route path='/' component={Default} exact />
          <Route path='/config' component={ConfigContainer} />
          <Route path='/tasks' component={TasksContainer} />
          <Route path='/entities' component={EntityContainer} />
          <Route path='/results' component={ResultsContainer} />
          <Route path='/issues' component={IssuesContainer} />
        </Switch>
      </main>
    );
  }
}

export default App;
