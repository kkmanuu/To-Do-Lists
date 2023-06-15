// eslint-disable-next-line import/named
import './style.css';
import add from './modules/add.js';
import taskRemaining from './modules/taskFunctions.js';
import {
  addButton, taskInput, container, clearChecked,
} from './modules/taskClass.js';
import { save, retrieve } from './modules/storage.js';

// Add event listener to the checkbox
container.addEventListener('change', (event) => {
  const taskId = event.target.id.split('-')[1];
  const task = taskRemaining.tasks[taskId - 1];
  task.completed = event.target.checked;
  save(); 
});

// Implement the "Clear all completed" button functionality
clearChecked.addEventListener('click', () => {
  taskRemaining.deleteCompleted();
  save(); 
});

// Load tasks from local storage on page load
window.addEventListener('DOMContentLoaded', () => {
  retrieve(); 
  taskRemaining.display(); 
});

// Add event listener to the "Add" button
addButton.addEventListener('click', (event) => {
  event.preventDefault();
  const task = add(event);
  taskRemaining.add(task);
  taskRemaining.display(); 
  save(); 
});