import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task))
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <br />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        ></textarea>
        <br />
        <button>Save</button>
      </form>
    </>
  );
};

export default TaskForm;
