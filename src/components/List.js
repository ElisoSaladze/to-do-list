import React from 'react'
import '../styles/List.css'
import arrow from '../assets/Vector (2).svg'
import trash from '../assets/Trash.svg'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  const [click, handleClick] = useState(false);
  const [visible, setVisible] = useState(true);
  const removeElement = () => {
    setVisible((prev) => !prev);
  };
  return (
    visible && (<div className='list-div noSelect'>
        <div onClick={() => handleClick(!click)} className="click-div">
        {click ? <div className='delete-box2'>
        <img onClick={removeElement} src={trash} alt="trashcan" />
      </div> : <div className='delete-box'></div>}
        </div>
      <p>new list</p>
      <img onClick={() => navigate("/TodoPage")} className="arrow" src={arrow} alt="arrow"/>
    </div>)
  )
}

export default List
