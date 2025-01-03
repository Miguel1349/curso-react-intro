import React from "react";
import "../../css/todo-count.css";


function TodoCounter({totalTodos: total, completedTodos: completed}) {
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