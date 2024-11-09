import React from "react";
import { TodoIcon } from './TodoIcon';

function CompleteIcon({ completed, onComplete }) {
    return (
        <TodoIcon
            type="done"
            color={completed ? "green" : "gray" }
            onClick={onComplete}
        />
    );
}

export { CompleteIcon }