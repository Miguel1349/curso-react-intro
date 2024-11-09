import { ReactComponent as DoneSVG } from '../../images/done.svg';
import { ReactComponent as DeleteSVG } from '../../images/delete.svg';
import { ReactComponent as EditSVG } from '../../images/edit.svg';
import '../../css/todo-item.css';

const iconTypes = {
    "done": color => <DoneSVG className="local-icon" fill={color} />,
    "delete": color => <DeleteSVG className="btn" fill={color} />,
    "edit": color => <EditSVG className="btn" fill={color} />
}

function TodoIcon({ type, color, onClick }) {
    return (
        <span onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon }