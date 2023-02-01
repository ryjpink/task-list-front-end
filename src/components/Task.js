import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({id, title, isComplete, onUpdate, remove}) => {
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  const updatetaskonclick = ()=>{
    const updatedtask ={
      id : id,
      title: title,
      isComplete: !isComplete,
    }
    onUpdate(updatedtask);
  }

  return (
    <li className="tasks__item" id={id}>
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={updatetaskonclick}
      >
        {title}
      </button>
      <button className="tasks__item__remove button" onClick={()=>{remove(id)}}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Task;
