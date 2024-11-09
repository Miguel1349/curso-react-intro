import React from "react";
import { TodoContext } from "./TodoContext";

function CreateTodoButton() {
    const { updateModal, searchValue, addTodo } = React.useContext(TodoContext);

    const createTodo = () => {
        addTodo(searchValue);
        updateModal(true);
    }

    return(
        <div className="col-md">
            <button
                className="btn btn-outline-primary btn-sm btn-block"
                onClick={createTodo}
            >
                Crear Nuevo
            </button>
        </div>
    );
}

export { CreateTodoButton };