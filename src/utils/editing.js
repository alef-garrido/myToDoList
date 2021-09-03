/* eslint-disable max-classes-per-file */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

export class Task {
  constructor(arr, text, status = false) {
    this.id = arr.length + 1;
    this.description = text;
    this.completed = status;
  }

  summary() {
    return {
      id: this.id,
      body: this.description,
      status: this.completed,
    };
  }
}

export class EditTask {
  static updateTask = (arr, id, value) => {
    const bullet = arr.find((task) => task.id === id);
    if (bullet) {
      bullet.description = value;
    }
  }

  static add = (arr, text) => {
    arr.push(new Task(arr, text));
  }

   static deleteTask = (arr, index) => {
     arr.splice(index, 1);
   }

   static updateId(arr) {
     arr.forEach((task, index) => {
       task.id = index + 1;
     });
   }

   static toggleBullet = (arr, id) => {
     const bullet = arr.find((task) => task.id === id);
     if (bullet) {
       bullet.completed = !bullet.completed;
     }
   }

   static clearCompleted = (arr) =>  {
     return arr.filter((task) => task.completed !== true)
   }
}

