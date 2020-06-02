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
    let exampleEntity =
      !task.example_entities[0] ||
      !task.example_entities[0].details ||
      !task.example_entities[0].details.name
        ? ""
        : task.example_entities[0].details.name;

    console.log(task.name, exampleEntity);

    return (
      <Tasks
        key={index}
        pretty_name={task.pretty_name}
        description={task.description}
        type={task.type}
        references={task.references}
        options={task.allowed_options}
        allowed_types={task.allowed_types}
        entity_name={exampleEntity}
      />
    );
  });

  const filteredTasks = filtered.map((task, index) => {
    let exampleEntity =
      !task.example_entities[0] ||
      !task.example_entities[0].details ||
      !task.example_entities[0].details.name
        ? {}
        : task.example_entities[0].details.name;

    return (
      <Tasks
        key={index}
        pretty_name={task.pretty_name}
        description={task.description}
        type={task.type}
        references={task.references}
        options={task.allowed_options}
        allowed_types={task.allowed_types}
        entity_name={exampleEntity}
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
