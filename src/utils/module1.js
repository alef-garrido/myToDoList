/* eslint-disable max-classes-per-file */

class Storage {
  static saveToStorage(arr) {
    localStorage.setItem('todoList', JSON.stringify(arr));
  }

  static getFromStorage() {
    let tasks;
    if (localStorage.getItem('todoList') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('todoList'));
    }
    return tasks;
  }
}

class Status {
  static toggleBullet = (arr, id) => {
    const bullet = arr.find((task) => task.id === id);
    if (bullet) {
      bullet.completed = !bullet.completed;
    }
  }
}


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
      const taskBody = document.createElement('input');
      const dots = document.createElement('span');

      checkmark.setAttribute('type', 'checkbox');
      checkmark.classList.add('status', 'form-check-input', 'me-2');
      checkmark.checked = task.completed;
      taskBody.setAttribute('type', 'text');
      taskBody.classList.add('todo');
      taskBody.id = `task-${index+1}`
      taskBody.value = task.description;
      dots.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
      taskRow.append(checkmark, taskBody, dots);
      taskRow.id = index + 1;
      taskRow.classList.add('task', `${task.completed}` )
      listContainer.appendChild(taskRow);
      if (task.completed === true) {
        taskBody.classList.add('completed')
      }
     });
  }
}

export { Status, Storage, renderList };