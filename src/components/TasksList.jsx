import { useSelector } from "react-redux";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);
  return <div>{tasks.map(task => (
    <div key={task.id}><h3>{task.title}</h3></div>
  ))}</div>;
};

export default TasksList;
