import { TodoCounter } from "./components/todos/TodoCounter";
import { TodoSearch } from "./components/todos/TodoSearch";
import { TodoList } from "./components/todos/TodoList"
import { TodoItem } from './components/todos/TodoItem';
import { CreateTodoButton } from './components/todos/CreateTodoButton';
import { TodosLoading } from './components/todos/TodosLoading';
import { TodosError } from './components/todos/TodosError';
import { EmptyTodos } from './components/todos/EmptyTodos';
import React from 'react';
import { TodoContext } from "./components/todos/TodoContext";
import { Modal } from "./components/todos/Modal";

function App() {
  const {
    openModal,
    updateModal,
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <div className="row main-container">
        <div className="col">
          <div className="row">
            <TodoSearch />
            <CreateTodoButton />
          </div>
          <div className="row">
            <TodoContext.Consumer>
              {({
                  loading,
                  error,
                  searchedTodos,
                  completeTodo,
                  deleteTodo
                }) => (
              <TodoList>
                {
                  loading &&
                  <>
                    <TodosLoading />
                    <TodosLoading />
                    <TodosLoading />
                  </>
                }
                { error && <TodosError /> }
                { (!loading && searchedTodos.length === 0 ) && <EmptyTodos /> }
                {
                  searchedTodos.map(todo => (
                    <TodoItem
                      key={todo.text}
                      completed={todo.completed}
                      text={todo.text}
                      onComplete={() => completeTodo(todo.text)}
                      onDelete={() => deleteTodo(todo.text)}
                    />
                  ))
                }
                </TodoList>              
              )}
            </TodoContext.Consumer>
          </div>
        </div>
      </div>
      { openModal && (
        <Modal updateModal={ updateModal } setSearchValue={setSearchValue}>
          { searchValue }
        </Modal>)
      }
    </React.Fragment>
  );
}

export default App;
