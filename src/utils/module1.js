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
    const emptyState = document.getElementById('listContainer');
    const str = `<div class="emptyState"> 
      <p>What are your goals today? :)<p> 
    </div>`;
    emptyState.insertAdjacentHTML('afterbegin', str);
  } else {
    arr.forEach((task, index) => {
      const listContainer = document.getElementById('listContainer');
      const str = `<li id=${index + 1} class="task ${task.completed}">
          <input type="checkbox" id=check-${index + 1} class="status form-check-input me-2">
          <input type="text" id=task-${index + 1} class="todo" value='${task.description}'>
          <span id="dots-${index + 1}" class="dots"> <i class="fas fa-ellipsis-v"></i> </span>
          <span id="trash-${index + 1}" class="delete hide"><i class="fas fa-trash-alt"></i></span>
        </li>`;

      listContainer.insertAdjacentHTML('beforeend', str);

      if (task.completed === true) {
        const finished = document.getElementById(`task-${index + 1}`);
        const checks = document.getElementById(`check-${index + 1}`);
        checks.toggleAttribute('checked');
        finished.classList.toggle('completed');
      }
    });
  }
}

export { Status, Storage, renderList };