import taskRemaining from './taskFunctions.js';

export const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(taskRemaining.tasks));
};

export const retrieveTasks = () => {
  const retrievedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (retrievedTasks === null) {
    return;
  }
  taskRemaining.tasks = retrievedTasks;
};
