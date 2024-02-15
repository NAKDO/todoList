import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import TodoList from './component/todoList';

function App() {

  


  return (
    <div className={'todolistWrap'}>
      <TodoHead></TodoHead>
      <TodoContent></TodoContent>
    </div>
  )
}

function TodoHead(){
  return (
    <div className={'headingArea'}>
      <h1 className={'heading__h1'}>TodoList</h1>
      <p className={'desctext'}>Enter your to-do and Complete!!</p>
    </div>
  )
}

function TodoContent() {
  return (
    <div className={'listArea'}>
      <div className={'listBox'}>
        <h2 className={'heading__note'}>NOTE.</h2>
        <TodoList></TodoList>
      </div>
    </div>
  )
}

export default App;
