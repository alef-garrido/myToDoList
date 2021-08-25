import './style.css';
import * as module from './utils/module1.js';

class Task {
  constructor(arr, text) {
    this.id = arr.length + 1;
    this.description = text;
    this.completed = false;
  }
}

const bullets = module.Storage.getFromStorage();

function renderList(arr) {
  const list = document.getElementById('listContainer');
  list.innerHTML = '';
  if (arr.length === 0) {
    const container = document.getElementById('listContainer');
    const stateContainer = document.createElement('div');
    const mssg = document.createElement('p');
    mssg.textContent = 'What are your goals today? :)';
    stateContainer.appendChild(mssg);
    stateContainer.classList.add('emptyState');
    container.appendChild(stateContainer);
  } else {
    arr.forEach((task, index) => {
      const listContainer = document.getElementById('listContainer');
      const taskRow = document.createElement('li');
      const checkmark = document.createElement('input');
      const text = document.createElement('p');
      const dots = document.createElement('span');

      checkmark.setAttribute('type', 'checkbox');
      checkmark.classList.add('status', 'form-check-input', 'me-2');
      checkmark.checked = task.completed;
      text.textContent = task.description;
      dots.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
      taskRow.append(checkmark, text, dots);
      taskRow.id = index + 1;
      listContainer.appendChild(taskRow);
    });
  }
}

window.addEventListener('load', renderList(bullets));

function add() {
  const text = document.getElementById('text').value;

  bullets.push(new Task(bullets, text));
  module.Storage.saveToStorage(bullets);
  renderList(bullets);
  document.getElementById('text').value = '';
}

const addTask = document.querySelector('#addTask');
addTask.addEventListener('submit', (e) => {
  e.preventDefault();
  add();
});

const taskList = document.querySelector('#listContainer');
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('status')) {
    const { id } = e.target.parentElement;
    module.Status.toggleBullet(bullets, parseInt(id, 10));
    module.Storage.saveToStorage(bullets);
    renderList(bullets);
  }
});