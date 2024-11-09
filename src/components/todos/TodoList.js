function TodoList({ children }) {
    return (
        <div className="col-md">
            <ul className="list-group list-group-flush">
                { children }
            </ul>
        </div>
    );
}

export { TodoList };