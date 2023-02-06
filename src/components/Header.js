import React from 'react'
import { useState } from 'react'
import List from '../components/List'
import girl from '../assets/girl.svg'
import plus from '../assets/PlusCircle.svg'
import '../styles/Header.css'

const Header = () => {
  const [createList, setCreateList] = useState([]);
  const onAddBtnClick = event => {
    setCreateList(createList.concat(<List key={createList.length} />));
  };

  return (
    <div className='parent-div'>
        <div className='header-div'>
            <header>
                <h1>TO DO | YOUR LISTS</h1>
            </header>
            <button className='list' onClick={onAddBtnClick}>
            <img src={plus} alt="circle" /> Add new List
            </button>
        </div>
        <div className='starter'>
          <img src={girl} alt="girl" />
          <h2>Start creating lists (T_T)</h2>
        </div>
        {createList}
    </div>
  )
}

export default Header
