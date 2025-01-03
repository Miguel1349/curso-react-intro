import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => { 
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        }
        else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);      
      }
      catch (error) {
        setError(true);
        setLoading(true);
      }
    }, 3000);
  }, []);

  const saveItem = newItem => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error
  };
}

export { useLocalStorage };

/*const defaulTodos = [
  {
    text: 'Cortar cebolla',
    completed: false
  },
  {
    text: 'Tomar el curso de React',
    completed: true
  },
  {
    text: 'Llorar con la arepera',
    completed: false
  },
  {
    text: 'Correr sin dejar rastro',
    completed: false
  }
];

localStorage.setItem('TODOS_V1', defaulTodos)
localStorage.removeItem('TODOS_V1')*/;