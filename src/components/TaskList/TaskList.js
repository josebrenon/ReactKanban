import React from "react";
import "./tasklist.css";
import { PropTypes } from "prop-types";
import plusIcon from "../../img/plus-icon.svg";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask,
}) {
  //   const [count, setCount] = useState(0);

  //   const increment = () => {
  //     setCount((currentCount) => {
  //       return currentCount + 1;
  //     });
  //   };
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        <button onClick={addTask} className="btn">
          <img src={plusIcon} />
          Adicionar Tarefa
        </button>
        {/* {count}
        <button onClick={increment}>Incrementar</button> */}
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
