/* eslint-disable no-restricted-globals */
/* eslint-disable no-restricted-syntax */

import './style.css';
import Storage from './utils/storage.js';
import Render from './utils/rendering.js';
import EditTask from './utils/editing.js';

const bullets = Storage.getFromStorage();

window.addEventListener('load', Render.renderList(bullets));

// EVENT LISTENERS

// Event Add-Task
const addTask = document.querySelector('#addTask');
addTask.addEventListener('submit', (e) => {
  const text = document.getElementById('text').value;
  e.preventDefault();
  EditTask.add(bullets, text);
  Storage.saveToStorage(bullets);
  document.getElementById('text').value = '';
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
    Storage.saveToStorage(bullets);
  }
});

// Events for Edit Description
const inputs = Array.from(document.querySelectorAll('.todo'));
inputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    const id = parseInt(e.target.parentElement.id, 10);
    const { value } = e.target;
    EditTask.updateTask(bullets, id, value);
    Storage.saveToStorage(bullets);
  });
});

const tasks = Array.from(document.querySelectorAll('.todo'));
for (let task = 0; task < tasks.length; task += 1) {
  const id = parseInt(task, 10) + 1;
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
    const index = parseInt(e.target.parentElement.parentElement.id, 10);
    EditTask.deleteTask(bullets, index - 1);
    EditTask.updateId(bullets);
    Storage.saveToStorage(bullets);
    Render.renderList(bullets);
    location.reload();
  }
});

// Event Clear all completed tasks
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
  Storage.saveToStorage(EditTask.clearCompleted(bullets));
  EditTask.updateId(bullets);
  Render.renderList(bullets);
  location.reload();
});
