import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./AddTask.css";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/Actions/Actions";

const AddTask = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("No Name");
  const [progress, setProgress] = useState(0);
  const [description, setDescription] = useState(
    "learn the task and it's featurs"
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeProgress = (e) => {
    e.target.value >= 100
      ? setProgress(100)
      : e.target.value < 0
      ? setProgress(0)
      : setProgress(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const reset = () => {
    setProgress(0);
    setDescription("learn the task and it's featurs");
  };
  const handelClickAdd = () => {
    name !== "No Name"
      ? dispatch(
          addTask({
            id: Math.random(),
            Name: name,
            Progress: progress,
            Description: description,
          })
        )
      : reset();
  };
  const handelClickSave = () => {
    handleClose();
    handelClickAdd();
    reset();
  };
  return (
    <div>
      <div className="AddTask" onClick={handleShow}>
        <span className="span">
          <span className="plus">+</span>ADDTASK
        </span>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new Task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="Input">
          <input placeholder="Task Name" onChange={handleChangeName}></input>
          <input
            placeholder="Progress rate"
            type="number"
            onChange={handleChangeProgress}
          ></input>
          <input
            placeholder="Description"
            onChange={handleChangeDescription}
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelClickSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddTask;
