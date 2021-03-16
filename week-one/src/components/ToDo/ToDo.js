import { useState } from "react";
import "/src/components/ToDo/todo.css";

export const ToDo = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const addHandler = (event) => {
    setInput(event.target.value);
  };

  const clickHandler = () => {
    setTask([...task, { name: input, completed: false }]);
    setInput("");
    console.log(task);
  };

  const removeHandler = (todo) => {
    let removedTask = task.filter((filteredTask) => filteredTask !== todo);
    setTask(removedTask);
  };

  const completedHandler = (todo) => {
    todo.completed = !todo.completed;
    setTask([...task]);
  };

  return (
    <div>
      <h1>To Do List </h1>

      <input className="input-box" value={input} onChange={addHandler} placeholder="Enter Task" />
      <button className="ctr" onClick={clickHandler}> Add </button>

      {task.map((todo) => {
        return (
          <div>
            <li>
              {" "}
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none"
                }}
                className ="todo input-box"
              >
                {" "}
                {todo.name}{" "}
              </span>
              <button  className ="task" onClick={() => completedHandler(todo)}>
                ✅
              </button>
              <button className ="task" onClick={() => removeHandler(todo)}>
                🗑️
              </button>
              
            </li>
            <br /><br />
          
          </div>
        );
      })}
    </div>
  );
};
