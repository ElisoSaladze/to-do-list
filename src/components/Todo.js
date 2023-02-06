import React from 'react'
import { useState, useEffect } from 'react'
import plus from '../assets/CheckPlus.svg'
import '../styles/Todo.css'
import TodoLi from './TodoLi'

const Todo = ({status}) => {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTOdoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}]);
    setInputText("");
  };
  
  
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default: 
        setFilteredTodos(todos);
        break;
    }
  }
  useEffect(() => {
    filterHandler();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  return (
    <div className='todo-parent'>
    <div className='todo-div noSelect'>
      <div className='todo-div-child'>
        <form onChange={inputTextHandler}>
          <input value={inputText} type="text" placeholder='Write Text' id="wtext" name="Write Text"/>
        </form>
      </div>
      <button onClick={submitTOdoHandler} className='click-btn' type='submit'>
        <img src={plus} alt="plus" />
      </button>
    </div>
    <ul>
      {filteredTodos.map((todo) => (
        <TodoLi 
        setTodos={setTodos} 
        todos={todos} 
        key={todo.id} 
        todo = {todo}
        text={todo.text}
        status={status}/>
      ))}
    </ul>
    </div>
  )
}

export default Todo
