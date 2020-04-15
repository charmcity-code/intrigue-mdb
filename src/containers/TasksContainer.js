import React, { useState, useEffect } from "react";
import Searchbar from "../components/Searchbar";
import Tasks from "../components/Tasks";
import EntityDetails from "./EntityDetails";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const TasksContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

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

  const taskSelectedHandler = (index) => {
    setSelectedTask(index);
  };

  const showTasks = tasks.map((task, index) => {
    index = index + 1;
    return (
      <Tasks
        key={index}
        pretty_name={task.pretty_name}
        description={task.description}
        clicked={() => taskSelectedHandler(index)}
      />
    );
  });

  const filteredTasks = filtered.map((task, index) => {
    return (
      <Tasks
        key={index}
        pretty_name={task.pretty_name}
        description={task.description}
        clicked={() => taskSelectedHandler(index)}
      />
    );
  });
  const show = filtered.length === 0 ? showTasks : filteredTasks;
  const style = { right: "2%" };
  return (
    <div>
      <Searchbar filter={filterInput} />
      <MDBContainer>
        <MDBRow>
          <MDBCol md='6'>{show}</MDBCol>
          <MDBCol md='6' className='position-fixed' style={style}>
            <EntityDetails index={selectedTask} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default TasksContainer;
