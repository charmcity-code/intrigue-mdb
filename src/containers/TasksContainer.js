import React, { Component } from "react";
import Searchbar from "../components/Searchbar";
import Tasks from "../components/Tasks";
import EntityDetails from "./EntityDetails";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

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

  filterInput = (e) => {
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
    const showTasks = this.state.tasks.map((task, index) => {
      index = index + 1;
      return (
        <Tasks
          key={index}
          pretty_name={task.pretty_name}
          description={task.description}
          clicked={() => this.taskSelectedHandler(index)}
        />
      );
    });

    const filteredTasks = this.state.filtered.map((task, index) => {
      return (
        <Tasks
          key={index}
          pretty_name={task.pretty_name}
          type={task.type}
          clicked={() => this.taskSelectedHandler(index)}
        />
      );
    });
    const show = this.state.filtered.length === 0 ? showTasks : filteredTasks;
    const style = { right: "2%" };
    return (
      <div>
        <Searchbar filter={this.filterInput} />

        <MDBContainer>
          <MDBRow>
            <MDBCol md='6'>{show}</MDBCol>
            <MDBCol md='6' className='position-fixed' style={style}>
              <EntityDetails index={this.state.selectedTask} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default TasksContainer;
