import Task from './taskClass.js';
import taskRemaining from './taskFunctions.js';

const add = (event) => {
  const newTask = new Task(taskInput.value);
  if (taskInput.value === '') {
    event.preventDefault();
  } else {
    taskRemaining.add(newTask);
    taskInput.value = '';
  }
};

export default add;
