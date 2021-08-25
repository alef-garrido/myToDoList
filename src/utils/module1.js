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

export { Status, Storage };