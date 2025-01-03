import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
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

    return {
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
    }
}

export { useTodos };