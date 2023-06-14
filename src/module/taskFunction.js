import { container } from './taskClass.js';
import bin from '../images/bin.png';

class Tasks {
  constructor() {
    this.tasks = [];
  }

  init = () => {
    container.innerHTML = '';
  };

  add = (task) => {
    this.tasks.push(task);
    this.saveTasks();
  };

  delete = (index) => {
    this.tasks.splice(index, 1);
    this.updateIndexes();
    this.saveTasks();
  };

  edit = (index, newDescription) => {
    this.tasks[index].description = newDescription;
    this.saveTasks();
  };

  updateIndexes = () => {
    this.tasks.forEach((task, index) => {
      task.index = index + 1;
    });
  };

  display = () => {
    this.init();
    this.tasks.forEach((task, index) => {
      const taskItem = document.createElement('li');
      taskItem.classList.add('each-task');
      taskItem.id = index;
      taskItem.innerHTML = `
        <input type="checkbox" id="task-${task.index}" name="task-${task.index}" ${
        task.completed ? 'checked' : ''
      }>
        <p contenteditable="true" class="task-to-be-done">${task.description}</p>
        <img src="${bin}" alt="" class="bin">
      `;
      container.appendChild(taskItem);
    });
  };

  deleteCompleted = () => {
    this.tasks = this.tasks.filter((task) => !task.completed);
    this.updateIndexes();
    this.saveTasks();
  };

  saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  };

  retrieveTasks = () => {
    const retrievedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (retrievedTasks === null) {
      return;
    }
    this.tasks = retrievedTasks;
  };
}

const taskRemaining = new Tasks();
export default taskRemaining;
