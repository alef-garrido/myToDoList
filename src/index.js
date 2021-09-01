/* eslint-disable no-restricted-globals */
/* eslint-disable no-restricted-syntax */

import './style.css';
import * as Local from './utils/storage.js';
import Render from './utils/rendering.js'
import EditTask from './utils/editing.js';

const bullets = Local.Storage.getFromStorage();

window.addEventListener('load', Render.renderList(bullets));


// EVENT LISTENERS

//Event Add-Task
const addTask = document.querySelector('#addTask');
addTask.addEventListener('submit', (e) => {
  e.preventDefault();
  EditTask.add(bullets);
  Local.Storage.saveToStorage(bullets);
  Render.renderList(bullets);
  location.reload();
});

// Event Status Update
const taskList = document.querySelector('#listContainer');
taskList.addEventListener('change', (e) => {
  if (e.target.classList.contains('status')) {
    const { id } = e.target.parentElement;
    const taskBody = document.getElementById(`task-${id}`);
    EditTask.toggleBullet(bullets, parseInt(id, 10));
    taskBody.classList.toggle('completed');
    Local.Storage.saveToStorage(bullets);
  }
});

// Events for Edit Description
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

// Event Delete-task
const listContainer = document.getElementById('listContainer');
listContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash-alt')) {
    const index = parseInt(e.target.parentElement.parentElement.id);
    EditTask.deleteTask(bullets, index - 1);
    EditTask.updateId(bullets);
    Local.Storage.saveToStorage(bullets);
    Render.renderList(bullets);
    location.reload();
  }
});

// Event Clear all completed tasks
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
    for (const i in bullets) {
      while (bullets[i].completed === true) {
        EditTask.deleteTask(bullets, i);
      }
    }
    EditTask.updateId(bullets);
    Local.Storage.saveToStorage(bullets);
    Render.renderList(bullets);
    location.reload();
});
