import "./style.css";
import * as module from "./utils/module1.js";
import EditTask from "./utils/editing.js";

class Task {
  constructor(arr, text) {
    this.id = arr.length + 1;
    this.description = text;
    this.completed = false;
  }
}

const bullets = module.Storage.getFromStorage();

window.addEventListener("load", module.renderList(bullets));

// Add a new task
function add() {
  const text = document.getElementById("text").value;

  bullets.push(new Task(bullets, text));
  module.Storage.saveToStorage(bullets);
  module.renderList(bullets);
  document.getElementById("text").value = "";
}

const addTask = document.querySelector("#addTask");
addTask.addEventListener("submit", (e) => {
  e.preventDefault();
  add();
  location.reload();
});


// Status Update
const taskList = document.querySelector("#listContainer");
taskList.addEventListener("change", (e) => {
  if (e.target.classList.contains("status")) {
    const { id } = e.target.parentElement;
    let taskBody = document.getElementById(`task-${id}`);
    module.Status.toggleBullet(bullets, parseInt(id, 10));
    module.Storage.saveToStorage(bullets);
    taskBody.classList.toggle("completed");
    module.Storage.saveToStorage(bullets);
  }
});


// Edit Description
const inputs = Array.from(document.querySelectorAll(".todo"));
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    const id = parseInt(e.target.parentElement.id);
    const value = e.target.value;
    EditTask.updateTask(bullets, id, value);
    module.Storage.saveToStorage(bullets);
  });
});

const tasks = Array.from(document.querySelectorAll(".todo"));
for (let task in tasks) {
  let id = parseInt(task) + 1;
  const bulletRow = document.getElementById(`${id}`);

  const trash = document.getElementById(`trash-${id}`);
  const dots = document.getElementById(`dots-${id}`);

  bulletRow.addEventListener("focusin", () => {
    bulletRow.classList.toggle("editing");
    trash.classList.toggle("hide");
    dots.classList.toggle("hide");
  });
  bulletRow.addEventListener("focusout", () => {
    setTimeout(() => {
      bulletRow.classList.toggle("editing");
      trash.classList.toggle("hide");
      dots.classList.toggle("hide");
    }, 100);
  });
}


// Update id/index
function updateId() {
  bullets.forEach((task, index) => {
    task.id =  index + 1
  })
  module.Storage.saveToStorage(bullets)
  module.renderList(bullets)
  location.reload()
}


// Delete task
const listContainer = document.getElementById('listContainer')
listContainer.addEventListener('click', (e) => {
  if(e.target.classList.contains('fa-trash-alt')) {
    const index = parseInt(e.target.parentElement.parentElement.id)
    EditTask.deleteTask(bullets, index -1)
    updateId()
  }
})

// Clear all completed tasks
const clearBtn = document.querySelector('.clearBtn')
clearBtn.addEventListener('click', () => {
  EditTask.clearCompleted(bullets)
  updateId()
  module.Storage.saveToStorage(bullets)
  module.renderList(bullets)
})


