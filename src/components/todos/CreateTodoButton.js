import React from "react";

function CreateTodoButton({ updateModal, searchValue, addTodo }) {

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