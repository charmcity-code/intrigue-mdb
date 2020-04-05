import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavbarPage from "../components/NavbarPage";
import TasksContainer from "./TasksContainer";
import ConfigContainer from "./ConfigContainer";

class App extends Component {
  render() {
    return (
      <main>
        <NavbarPage />
        <Switch>
          {/* <Route path="/" component={Home} exact /> */}
          <Route path='/config' component={ConfigContainer} />
          <Route path='/tasks' component={TasksContainer} />
        </Switch>
      </main>
    );
  }
}

export default App;
