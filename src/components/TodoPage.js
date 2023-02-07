import React from 'react'
import dots from '../assets/DotsThreeVertical.svg'
import arrow_left from '../assets/ARROW_LEFT.svg'
import '../styles/TodoPage.css'
import Todo from './Todo'
import { useNavigate } from "react-router-dom";
import Select from './Select'
import { useState } from 'react'

const TodoPage = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [status, setStatus] = useState("all");
    return (
    <div className='parent-div'>
      <div className='header-div'>
        <div className='go-back'>
          <button onClick={() => navigate("/to-do-list/")}><img src={arrow_left} alt="arrow-left" /></button>
          <h3>New List</h3>
        </div>
        <div className='div-button'>
            <button onClick={() => setClick(!click)} className='three-dots'>
                <img src={dots} alt="dots" />
            </button>
            {click ? <Select setStatus={setStatus}/> : null}
        </div>        
      </div>
      <Todo status={status}/>
    </div>
  )
}

export default TodoPage
