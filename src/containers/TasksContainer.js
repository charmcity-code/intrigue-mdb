import React, { Component } from "react";
import { MDBCol } from "mdbreact";

import Tasks from "../components/Tasks";
import EntityDetails from "./EntityDetails";

class TasksContainer extends Component {
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
      <MDBCol md='12'>
        <input
          className='form-control'
          placeholder='Search'
          input
          type='text'
          onChange={this.filterTasks}
        />
      </MDBCol>
    );

    const showTasks = this.state.tasks.map((task, index) => {
      index = index + 1;
      return (
        <Tasks
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
        <Tasks
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

export default TasksContainer;
