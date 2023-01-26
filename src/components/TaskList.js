import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = ({ tasks }) => {
  const getTaskListJSX = (tasks) => {
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
        />
      );
    });
  };
  // return <ul className="tasks__list no-bullet">{getTaskListJSX(tasks)}</ul>;
  return (<ul className="tasks__list no-bullet">
    <Task key={tasks[0].id} id={tasks[0].id} title={tasks[0].title} isComplete={tasks[0].isComplete}/>
    <Task key={tasks[1].id} id={tasks[1].id} title={tasks[1].title} isComplete={tasks[1].isComplete}/>
   </ul>);
  };

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default TaskList;
