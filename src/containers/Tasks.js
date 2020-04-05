import React, { Component } from "react";
import { MDBInput, MDBCol } from "mdbreact";

import Task from "../components/Tasks";
import EntityDetails from "../containers/EntityDetails";

class TaskContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      filtered: [],
      selectedTask: null,
    };
  }

  getTasks() {
    fetch("http://localhost:7777/tasks.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ tasks: data });
      })
      .catch(console.log());
  }

  taskSelectedHandler = (index) => {
    this.setState({ selectedTask: index });
  };

  filterTasks = (e) => {
    console.log(e.target.value);
    const updatedTasks = this.state.tasks.filter((task) => {
      return (
        task.pretty_name.toLowerCase().search(e.target.value.toLowerCase()) !==
        -1
      );
    });
    this.setState({ filtered: updatedTasks });
  };

  componentDidMount() {
    this.getTasks();
  }

  render() {
    const searchbar = (
      <MDBCol
        style={{
          marginLeft: "15%",
          marginRight: "15%",
        }}
      >
        <MDBInput
          placeholder='Search'
          input
          type='text'
          onChange={this.filterTasks}
          className=' mr-sm-2'
        />
      </MDBCol>
    );

    const showTasks = this.state.tasks.map((task, index) => {
      index = index + 1;
      return (
        <Task
          key={index}
          pretty_name={task.pretty_name}
          type={task.type}
          passive={task.passive}
          description={task.description}
          reference={task.references}
          clicked={() => this.taskSelectedHandler(index)}
          allowed_types={task.allowed_types}
          examples={task.example_entities}
        />
      );
    });

    const filteredTasks = this.state.filtered.map((task, index) => {
      return (
        <Task
          key={index}
          pretty_name={task.pretty_name}
          type={task.type}
          passive={task.passive}
          description={task.description}
          reference={task.references}
          allowed_types={task.allowed_types}
          examples={task.example_entities}
        />
      );
    });
    const show = this.state.filtered.length === 0 ? showTasks : filteredTasks;

    return (
      <div>
        {searchbar}
        <EntityDetails index={this.state.selectedTask} />
        {show}
      </div>
    );
  }
}

export default TaskContainer;
