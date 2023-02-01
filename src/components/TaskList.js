import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = ({ tasks, onUpdateTask, removeTask }) => {
  const getTaskListJSX = tasks.map((task) => {
    return (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        isComplete={task.isComplete}
        onUpdate={onUpdateTask}
        remove={removeTask}
      />
    );
  });
  return <ul className="tasks__list no-bullet">{getTaskListJSX}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onUpdateTask: PropTypes.func.isRequired,
  removeTask:PropTypes.func.isRequired,
};

export default TaskList;
