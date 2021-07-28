import React, { useState, useEffect } from "react";
import "./Task.css";
import Demo from "./Demo";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../Redux/Actions/Actions";
import { Button, Modal } from "react-bootstrap";

const Task = ({ task, setFilteredListTask, filter, TaskList }) => {
  const dispatch = useDispatch();

  const location = false;
  const bac = task.Progress === 100;
  //    Edit Modal

  const [showEdit, setShowEdit] = useState(false);
  const [name, setName] = useState(task.Name);
  const [progress, setProgress] = useState(task.Progress);
  const [description, setDescription] = useState(task.Description);

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
  }, [filter, setFilteredListTask, TaskList, task.Progress]);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  console.log("heloooooo", {
    id: task.id,
    Name: name,
    Progress: progress,
    Description: description,
  });

  //   show task
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handlUnshow = () => {
    setShow(false);
  };

  return (
    <div className={bac ? "TaskBackground" : "bla"}>
      <div className="task">
        <h2 className="taskName" onClick={handleShow}>
          {task.Name}
        </h2>

        <div className="icones">
          <i className="fas fa-edit" onClick={handleShowEdit}></i>

          <Modal show={showEdit} onHide={handleCloseEdit} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Task</Modal.Title>
            </Modal.Header>
            <Modal.Body className="Input">
              <input
                placeholder="Edit Task Name"
                onChange={handleChangeName}
              ></input>
              <Demo
                progress={task.Progress}
                setProgress={setProgress}
                location={!location}
              />
              <input
                placeholder="Edit Description"
                onChange={handleChangeDescription}
              ></input>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseEdit}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  handleCloseEdit();
                  dispatch(editTask(task.id, name, progress, description));
                }}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          <i
            className="fas fa-trash-alt"
            onClick={() => {
              dispatch(deleteTask(task.id));
            }}
          ></i>
        </div>
      </div>
      {show && (
        <div>
          <Demo
            progress={task.Progress}
            location={location}
            setProgress={setProgress}
          />
          <p>{task.Description}</p>
          <i className="fas fa-caret-square-up" onClick={handlUnshow}></i>
        </div>
      )}
    </div>
  );
};

export default Task;
