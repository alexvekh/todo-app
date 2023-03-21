import logo from './logo.svg';
import './App.css';
import { Fragment, useEffect, useState } from 'react';
import TodoItem from './components/todoItem';

function App() {
  const [todoItems, setTodoItems] = useState(null);

  useEffect(() => {
    // Do something on load
    console.log("Hey, I've loaded up");

    if (!todoItems) {
      fetch(`http://localhost:8080/api/todoItems`).then((response) => 
      response.json()
      ).then(data => {
        console.log("Todo items list: ", data);
        setTodoItems(data);
      });
    }
  }, [todoItems]); 

  //ternary operator
  // something ? (do item 1) : (do item 2) 

  function addNewTodoItem(){
    fetch('http:localhost:8080/api/todoItems')
  }

  return ( 
    <>
      <div>
        <button onclick={addNewTodoItem}>Add New Item</button>
      </div>
      <div>
        {todoItems 
        ? todoItems.map((todoItem) => {
          return <TodoItem key={todoItem.id} data={todoItem} />;
        }) : "loading data ... "}
      </div>
    </>
);
}

export default App;
