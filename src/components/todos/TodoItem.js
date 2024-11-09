import { CompleteIcon } from '../icons/CompleteIcon';
import { DeleteIcon } from '../icons/DeleteIcon';
import { EditIcon } from '../icons/EditIcon';
import '../../css/todo-item.css';

function TodoItem({ text, completed, onComplete, onDelete}) {
    return (
      <li className="list-group-item">
        <div className="input-group">
          <CompleteIcon
            completed={completed}
            onComplete={onComplete}
          />
          <input
            type="text"
            className={`form-control ${completed ? "task-done" : ""} input-complited`}
            value={text}
            readOnly={true}
          />
          <div className="input-group-append">
            <EditIcon />
            <DeleteIcon onDelete={onDelete}/>
          </div>
        </div>
      </li>
    );
}

export { TodoItem };