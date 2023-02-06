import React from 'react'
import '../styles/Select.css'
const Select = ({setStatus}) => {
  const statusHandler = (event) => {
    setStatus(event.target.value);
  }
  return (
    <div className='select'>
        <select onChange={statusHandler} className='select-op'>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
    </div>
  )
}

export default Select
