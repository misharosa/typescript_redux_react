import React from 'react';
import './App.css';
import UserList from "./components/UserList";
import {TodoList} from "./components/TodoList";

export const App = () => {
  return (
    <div className="App">
      <UserList />
        <hr/>
        <hr/>
      <TodoList />
    </div>
  );
}
