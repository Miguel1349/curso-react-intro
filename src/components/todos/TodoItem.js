import { CompleteIcon } from '../icons/CompleteIcon';
import { DeleteIcon } from '../icons/DeleteIcon';
import { EditIcon } from '../icons/EditIcon';
import '../../css/todo-item.css';

function TodoItem(props) {
    return (
      <li className="list-group-item">
        <div className="input-group">
          <CompleteIcon
            completed={props.completed}
            onComplete={() => props.completeTodo(props.text)}
          />
          <input
            type="text"
            className={`form-control ${props.completed ? "task-done" : ""} input-complited`}
            value={props.text}
            readOnly={true}
          />
          <div className="input-group-append">
            <EditIcon />
            <DeleteIcon onDelete={() => props.deleteTodo(props.text)}/>
          </div>
        </div>
      </li>
    );
}

export { TodoItem };