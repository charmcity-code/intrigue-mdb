import React, { useState, useEffect } from "react";
import Searchbar from "../components/Searchbar";
import Tasks from "../components/Tasks";
import EntityDetails from "./EntityDetails";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const TasksContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedTask, setSelectedTask] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7777/api/v1/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data.result);
      });
  }, []);

  const filterInput = (e) => {
    const updatedTasks = tasks.filter((task) => {
      return (
        task.pretty_name.toLowerCase().search(e.target.value.toLowerCase()) !==
        -1
      );
    });
    setFiltered(updatedTasks);
  };

  const taskSelectedHandler = (task, e) => {
    e.preventDefault();
    setSelectedTask(task);
  };

  const showTasks = tasks.map((task, index) => {
    return (
      <Tasks
        key={index}
        pretty_name={task.pretty_name}
        description={task.description}
        clicked={(e) => taskSelectedHandler(task, e)}
      />
    );
  });

  const filteredTasks = filtered.map((task, index) => {
    return (
      <Tasks
        key={index}
        pretty_name={task.pretty_name}
        description={task.description}
        clicked={(e) => taskSelectedHandler(task, e)}
      />
    );
  });
  const show = filtered.length === 0 ? showTasks : filteredTasks;
  const style = { right: "2%" };

  // const entityType = selectedTask.type;
  // const entityName = selectedTask.pretty_name;
  // const entityOptions = selectedTask.allowed_options;
  return (
    <div>
      <Searchbar filter={filterInput} />
      <MDBContainer style={{ paddingTop: "100px" }}>
        <MDBRow>
          <MDBCol md='6'>{show}</MDBCol>
          <MDBCol md='6' className='position-fixed' style={style}>
            <EntityDetails
              type={selectedTask.type}
              name={selectedTask.pretty_name}
              options={selectedTask.allowed_options}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default TasksContainer;
