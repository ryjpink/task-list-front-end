import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  const [complete, setComplete] = useState(props.isComplete); 
  const buttonClass = complete ? 'tasks__item__toggle--completed' : '';

  const remove = (id)=>{
    const element = document.getElementById(id);
    console.log(id);
    element.remove();

  }

  return (
    <li className="tasks__item" id={props.id}>
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => setComplete(!complete)}
      >
        {props.title}
      </button>
      <button className="tasks__item__remove button" onClick={()=>{remove(props.id)}}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default Task;
