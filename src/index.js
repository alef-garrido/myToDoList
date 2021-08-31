/* eslint-disable no-restricted-globals */
/* eslint-disable no-restricted-syntax */

import './style.css';
import * as Local from './utils/storage.js';
import Render from './utils/rendering.js'
import EditTask from './utils/editing.js';

const bullets = Local.Storage.getFromStorage();

window.addEventListener('load', Render.renderList(bullets));


// EVENT LISTENERS

const addTask = document.querySelector('#addTask');
addTask.addEventListener('submit', (e) => {
  e.preventDefault();
  EditTask.add(bullets);
  Local.Storage.saveToStorage(bullets);
  Render.renderList(bullets);
  location.reload();
});

// Status Update
const taskList = document.querySelector('#listContainer');
taskList.addEventListener('change', (e) => {
  if (e.target.classList.contains('status')) {
    const { id } = e.target.parentElement;
    const taskBody = document.getElementById(`task-${id}`);
    Local.Status.toggleBullet(bullets, parseInt(id, 10));
    // Local.Storage.saveToStorage(bullets);
    taskBody.classList.toggle('completed');
    Local.Storage.saveToStorage(bullets);
  }
});

// Edit Description
const inputs = Array.from(document.querySelectorAll('.todo'));
inputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    const id = parseInt(e.target.parentElement.id);
    const { value } = e.target;
    EditTask.updateTask(bullets, id, value);
    Local.Storage.saveToStorage(bullets);
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
  Local.Storage.saveToStorage(bullets);
  Render.renderList(bullets);
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
  Local.Storage.saveToStorage(bullets);
  Render.renderList(bullets);
});
