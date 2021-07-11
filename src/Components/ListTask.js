import React, { useEffect } from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

const ListTask = ({
  inputText,
  filteredListTask,
  setFilteredListTask,
  filter,
}) => {
  const TaskList = useSelector((state) => state.TaskList);

  useEffect(() => {
    switch (filter) {
      case "Task complited":
        setFilteredListTask(TaskList.filter((task) => task.Progress === 100));
        break;
      case "Task toDo":
        setFilteredListTask(TaskList.filter((task) => task.Progress < 100));
        break;
      default:
        setFilteredListTask(TaskList);
    }
  });

  return (
    <div>
      {filteredListTask
        .filter((task) =>
          task.Name.toUpperCase().includes(inputText.toUpperCase())
        )
        .map((task) => (
          <Task task={task} key={task.id} />
        ))}
    </div>
  );
};

export default ListTask;
