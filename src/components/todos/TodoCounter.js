import React from "react";
import "../../css/todo-count.css";
import { TodoContext } from "./TodoContext";

/*const styles = {
  fontSize: '24px',
  textAlign: 'center',
  margin: 0,
  padding: '48px'
}*/

function TodoCounter() {
  const {totalTodos: total, completedTodos: completed} = React.useContext(TodoContext);
    return (
      <div className="row text-center">
        <div className="col">    
          <h1 className="ballet-title">
            { total === completed ? "Has completado todas tus tareas" : `Has completado  ${completed}  de  ${total}  TODOS` }
          </h1>
        </div>
      </div>
    );
}

export { TodoCounter };