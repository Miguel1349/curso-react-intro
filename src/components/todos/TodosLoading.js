import React from 'react';
import '../../css/loading-todos.css';

function TodosLoading() {
    return (
      <li className="list-group-item">
        <div className="input-group">
          <div className="icon-skeleton"></div>
          <div className="form-control input-text-skeleton">
          </div>
          <div className="input-group-append">
            <div className="icon-skeleton"></div>
            <div className="icon-skeleton"></div>
          </div>
        </div>
      </li>
    );
}

export { TodosLoading };