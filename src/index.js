/* eslint-disable no-restricted-globals */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable radix */
import './style.css';
import * as module from './utils/module1.js';
import EditTask from './utils/editing.js';

const bullets = module.Storage.getFromStorage();

window.addEventListener('load', module.renderList(bullets));

// EVENT LISTENERS

const addTask = document.querySelector('#addTask');
addTask.addEventListener('submit', (e) => {
  e.preventDefault();
  EditTask.add(bullets);
  module.Storage.saveToStorage(bullets);
  module.renderList(bullets);
  location.reload();
});

// Status Update
const taskList = document.querySelector('#listContainer');
taskList.addEventListener('change', (e) => {
  if (e.target.classList.contains('status')) {
    const { id } = e.target.parentElement;
    const taskBody = document.getElementById(`task-${id}`);
    module.Status.toggleBullet(bullets, parseInt(id, 10));
    module.Storage.saveToStorage(bullets);
    taskBody.classList.toggle('completed');
    module.Storage.saveToStorage(bullets);
  }
});

// Edit Description
const inputs = Array.from(document.querySelectorAll('.todo'));
inputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    const id = parseInt(e.target.parentElement.id);
    const { value } = e.target;
    EditTask.updateTask(bullets, id, value);
    module.Storage.saveToStorage(bullets);
  });
});

const tasks = Array.from(document.querySelectorAll('.todo'));
for (const task in tasks) {
  const id = parseInt(task) + 1;
  const bulletRow = document.getElementById(`${id}`);

  const trash = document.getElementById(`trash-${id}`);
  const dots = document.getElementById(`dots-${id}`);

  bulletRow.addEventListener('focusin', () => {
    bulletRow.classList.toggle('editing');
    trash.classList.toggle('hide');
    dots.classList.toggle('hide');
  });
  bulletRow.addEventListener('focusout', () => {
    setTimeout(() => {
      bulletRow.classList.toggle('editing');
      trash.classList.toggle('hide');
      dots.classList.toggle('hide');
    }, 100);
  });
}

// Update id/index
function updateId() {
  bullets.forEach((task, index) => {
    task.id = index + 1;
  });
  module.Storage.saveToStorage(bullets);
  module.renderList(bullets);
  location.reload();
}

// Delete task
const listContainer = document.getElementById('listContainer');
listContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash-alt')) {
    const index = parseInt(e.target.parentElement.parentElement.id);
    EditTask.deleteTask(bullets, index - 1);
    updateId();
  }
});

// Clear all completed tasks
const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', () => {
  EditTask.clearCompleted(bullets);
  updateId();
  module.Storage.saveToStorage(bullets);
  module.renderList(bullets);
});
