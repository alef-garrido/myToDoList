import './style.css';
import * as module from './utils/module1.js';
import EditTask from './utils/editing.js';

class Task {
  constructor(arr, text) {
    this.id = arr.length + 1;
    this.description = text;
    this.completed = false;
  }
}

const bullets = module.Storage.getFromStorage();

window.addEventListener('load', module.renderList(bullets));

function add() {
  const text = document.getElementById('text').value;

  bullets.push(new Task(bullets, text));
  module.Storage.saveToStorage(bullets);
  module.renderList(bullets);
  document.getElementById('text').value = '';
}

const addTask = document.querySelector('#addTask');
addTask.addEventListener('submit', (e) => {
  e.preventDefault();
  add();
  location.reload()
});

// Status Update
const taskList = document.querySelector('#listContainer');
taskList.addEventListener('change', (e) => {
  if (e.target.classList.contains('status')) {
    const { id } = e.target.parentElement; 
    let taskBody = document.getElementById(`task-${id}`)
    module.Status.toggleBullet(bullets, parseInt(id, 10));
    module.Storage.saveToStorage(bullets);      
    taskBody.classList.toggle('completed') 
    module.Storage.saveToStorage(bullets)  
  }
  
});

// Edit Description

const inputs = Array.from(document.querySelectorAll('.todo'))
inputs.forEach(input => {
  input.addEventListener('input', (e) => {  
    const id = parseInt(e.target.parentElement.id);
    const value = e.target.value;
    EditTask.updateTask(bullets, id, value);
    module.Storage.saveToStorage(bullets); 
    
    //   e.target.addEventListener('change', (e) => {
    //     const id = parseInt(e.target.parentElement.id);
    //     const value = e.target.value;
    //     EditTask.updateTask(bullets, id, value);
    //     module.Storage.saveToStorage(bullets); 
    //     module.renderList(bullets)
    // })
})
})
  
