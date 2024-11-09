import React from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
      item: todos,
      saveItem: saveTodos,
      loading,
      error
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    const searchedTodos = todos.filter(todo => todo.text.toUpperCase().includes(searchValue.toUpperCase()));
    const [openModal, setOpenModal] = React.useState(false);
  
    const completeTodo = text => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex( todo => todo.text === text);
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      saveTodos(newTodos);
    }
  
    const deleteTodo = text => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex( todo => todo.text === text);
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    }

    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        text: text,
        completed: false
      });
      saveTodos(newTodos);
    }

    const updateModal = status => setOpenModal(status);

    return(
        <TodoContext.Provider value={
            {
              loading,
              error,
              completedTodos,
              searchValue,
              setSearchValue,
              searchedTodos,
              completeTodo,
              totalTodos,
              deleteTodo,
              openModal,
              updateModal,
              addTodo
            }
        }>
            {
              children
            }
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };