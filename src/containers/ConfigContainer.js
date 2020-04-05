import React, { Component } from "react";
import Config from "../components/Config";
import jsonData from "./testConfig.json";

class ConfigContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: [],
    };
  }

  getConfig() {
    this.setState({ config: jsonData });
  }

  componentDidMount() {
    this.getConfig();
  }

  render() {
    const showConfig = this.state.config.map((config, index) => (
      <Config
        key={index}
        setting={config.setting}
        password={config.value}
        details={config.comment}
      />
    ));

    return <div>{showConfig}</div>;
  }
}

export default ConfigContainer;
