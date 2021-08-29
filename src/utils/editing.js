export default class EditTask {
  static updateTask = (arr, id, value) => {
   const bullet = arr.find((task) => task.id == id)
   if (bullet) {
      bullet.description = value;
   }
 }

   static deleteTask = (arr, index) => {
      arr.splice(index, 1)
   }

   static clearCompleted = (arr) => {
      for (let task in arr) {
         while (arr[task].completed === true) {
           this.deleteTask(arr, task)
         }
       }
   } 

}


