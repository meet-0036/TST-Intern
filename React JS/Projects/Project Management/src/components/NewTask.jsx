import { useState, useRef } from "react";

import Modal from "./Modal.jsx";

export default function NewTask({ onAdd }) {
  const modalTask = useRef();

  // when we try to add task enteredTask = undefined
  // Warn: component is changing an uncontrolled input to be controlled.(sol: enteredTask = "")
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      modalTask.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
      <Modal ref={modalTask} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-2">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Please enter Task name</p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={handleChange}
          value={enteredTask}
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
    </>
  );
}
