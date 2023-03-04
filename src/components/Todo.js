import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/react-fontawesome'
import React from 'react'

export const Todo = ({task}) => {
  return (
    <div className='Todo'>
      <p>{task.task}</p>
      <div>
        <FontAwesomeIcon icon = {faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  )
}

export default Todo
