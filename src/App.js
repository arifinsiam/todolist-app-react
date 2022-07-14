import React, { useEffect, useState } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [ inputText, setInputText ] = useState('');
  const [ todos, setTodos ] = useState([]);
  const [ status, setStatus ] = useState('all');
  const [ fileredTodos, setFilteredTodos ] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo=> todo.completed===true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo=> todo.completed===false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  // useEffect(() => {
  //   filterHandler();
  //   saveLocalTodos();
  // }, [todos, status])

  // useEffect(()=> {
  //   getLocalTodos();
  // }, [] )

  // save to local
  // const saveLocalTodos = () => {
  //   localStorage.setItem('todos', JSON.stringify([todos]))
  // }
  // const getLocalTodos = () => {
  //   if (localStorage.getItem('todos')===null) {
  //     localStorage.setItem('todos', JSON.stringify())
  //   }else{
  //     let todoLocal = JSON.parse(localStorage.getItem('todos'))
  //     setTodos(todoLocal);
  //   }
  // }

  return (
    <div>
      <header>
        <h1>My TO-DO List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList 
        fileredTodos={fileredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
