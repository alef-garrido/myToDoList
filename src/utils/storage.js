/* eslint-disable max-classes-per-file */

export default class Storage {
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
