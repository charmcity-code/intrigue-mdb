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
    fetch("http://localhost:7777/tasks.json")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
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
    index = index + 1;
    return (
      <Tasks
        key={index}
        pretty_name={task.pretty_name}
        description={task.description}
        clicked={(e) =>
          taskSelectedHandler(
            [task.type, task.pretty_name, task.allowed_types],
            e
          )
        }
      />
    );
  });

  const filteredTasks = filtered.map((task, index) => {
    return (
      <Tasks
        key={index}
        pretty_name={task.pretty_name}
        description={task.description}
        clicked={(e) =>
          taskSelectedHandler(
            [task.type, task.pretty_name, task.allowed_types],
            e
          )
        }
      />
    );
  });
  const show = filtered.length === 0 ? showTasks : filteredTasks;
  const style = { right: "2%" };
  return (
    <div>
      <Searchbar filter={filterInput} />
      <MDBContainer style={{ paddingTop: "100px" }}>
        <MDBRow>
          <MDBCol md='6'>{show}</MDBCol>
          <MDBCol md='6' className='position-fixed' style={style}>
            <EntityDetails task={selectedTask} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default TasksContainer;
