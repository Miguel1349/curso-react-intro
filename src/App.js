import { TodoCounter } from "./components/todos/TodoCounter";
import { TodoSearch } from "./components/todos/TodoSearch";
import { TodoList } from "./components/todos/TodoList"
import { TodoItem } from './components/todos/TodoItem';
import { CreateTodoButton } from './components/todos/CreateTodoButton';
import { TodosLoading } from './components/todos/TodosLoading';
import { TodosError } from './components/todos/TodosError';
import { EmptyTodos } from './components/todos/EmptyTodos';
import React from 'react';
import { Modal } from "./components/todos/Modal";
import { useTodos } from "./hooks/useTodos";
import './index.css';

function App() {
  const {
    loading,
    error,
    searchValue,
    setSearchValue,
    completedTodos,
    totalTodos,
    searchedTodos,
    openModal,
    completeTodo,
    deleteTodo,
    addTodo,
    updateModal
  } = useTodos();

  return (
    <React.Fragment>
      <TodoCounter
        completedTodos={completedTodos}
        totalTodos={totalTodos}
      />
      <div className="row main-container">
        <div className="col">
          <div className="row">
            <TodoSearch 
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              loading={loading}
            />
            <CreateTodoButton 
              updateModal={updateModal}
              searchValue={searchValue} 
              addTodo={addTodo}
            />
          </div>
          <div className="row">
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
              searchedTodos.map(todo => {
                return (
                <TodoItem 
                  key={todo.text}
                  completed={todo.completed}
                  text={todo.text}
                  completeTodo={completeTodo}
                  deleteTodo={deleteTodo}
                />
              );})
            }
            </TodoList>         
          </div>
        </div>
      </div>
      { openModal && (
        <Modal updateModal={updateModal } setSearchValue={setSearchValue}>
          { searchValue }
        </Modal>)
      }
    </React.Fragment>
  );
}

export default App;
