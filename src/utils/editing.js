export default class EditTask {
  static updateTask = (arr, id, value) => {
   const bullet = arr.find((task) => task.id == id)
   if (bullet) {
      bullet.description = value;
   }
 }
}

