/* eslint-disable max-classes-per-file */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

class Task {
  constructor(arr, text) {
    this.id = arr.length + 1;
    this.description = text;
    this.completed = false;
  }
}

export default class EditTask {
  static updateTask = (arr, id, value) => {
    const bullet = arr.find((task) => task.id === id);
    if (bullet) {
      bullet.description = value;
    }
  }

  static add = (arr) => {
    const text = document.getElementById('text').value;
    arr.push(new Task(arr, text));
    document.getElementById('text').value = '';
  }

   static deleteTask = (arr, index) => {
     arr.splice(index, 1);
   }

   static clearCompleted = (arr) => {
     for (const task in arr) {
       while (arr[task].completed === true) {
         this.deleteTask(arr, task);
       }
     }
   }
}
