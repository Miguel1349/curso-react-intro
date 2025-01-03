import React from 'react';

function TodoSearch({searchValue, setSearchValue, loading}) {
  return (
    <div className="col-md">
      <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-sm" >TODO</span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Cortar cebolla"
          value={searchValue}
          onChange={event => setSearchValue(event.target.value)}
          disabled={loading}
        />
      </div>
    </div>
  );
}

export { TodoSearch };