import React, { useState, useEffect } from "react";
import Searchbar from "../components/Searchbar";
import Tasks from "../components/Tasks";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const TasksContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [filtered, setFiltered] = useState([]);

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

  const showTasks = tasks.map((task, index) => {
    return (
      <Tasks
        key={index}
        name={task.pretty_name}
        description={task.description}
        type={task.type}
        references={task.references}
        options={task.allowed_options}
      />
    );
  });

  const filteredTasks = filtered.map((task, index) => {
    return (
      <Tasks
        key={index}
        name={task.pretty_name}
        description={task.description}
        type={task.type}
        references={task.references}
        options={task.allowed_options}
      />
    );
  });
  const show = filtered.length === 0 ? showTasks : filteredTasks;

  return (
    <div>
      <Searchbar filter={filterInput} />
      <MDBContainer style={{ paddingTop: "100px" }}>
        <MDBRow>
          <MDBCol md='8' className='offset-md-2'>
            {show}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default TasksContainer;
