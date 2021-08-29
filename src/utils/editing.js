/* eslint-disable max-classes-per-file */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
export default class EditTask {
  static updateTask = (arr, id, value) => {
    const bullet = arr.find((task) => task.id === id);
    if (bullet) {
      bullet.description = value;
    }
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
