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

  return (
    <div>
      {filter === "Task complited" ||
      filter === "Task toDo" ||
      filter === "Show all"
        ? filteredListTask
            .filter((task) =>
              task.Name.toUpperCase().includes(inputText.toUpperCase())
            )
            .map((task) => (
              <Task
                task={task}
                key={task.id}
                setFilteredListTask={setFilteredListTask}
                filter={filter}
                TaskList={TaskList}
              />
            ))
        : TaskList.filter((task) =>
            task.Name.toUpperCase().includes(inputText.toUpperCase())
          ).map((task) => (
            <Task
              task={task}
              key={task.id}
              setFilteredListTask={setFilteredListTask}
              filter={filter}
              TaskList={TaskList}
            />
          ))}
    </div>
  );
};

export default ListTask;
