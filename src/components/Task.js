import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({id, title, isComplete, onUpdate}) => {
  const [complete, setComplete] = useState(isComplete); 
  const buttonClass = complete ? 'tasks__item__toggle--completed' : '';

  

  return (
    <li className="tasks__item" id={id}>
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => setComplete(!complete)}
      >
        {title}
      </button>
      <button className="tasks__item__remove button" onClick={()=>{onUpdate(id)}}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Task;
