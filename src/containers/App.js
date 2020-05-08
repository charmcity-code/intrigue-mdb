import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavbarPage from "../components/NavbarPage";
import Default from "./Default";
import TasksContainer from "./TasksContainer";
import ConfigContainer from "./ConfigContainer";
import EntityContainer from "./EntityContainer";
import ResultsContainer from "./ResultsContainer";
import IssuesContainer from "./IssuesContainer";

const App = () => {
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
};

export default App;
