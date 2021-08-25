export default function renderList(arr) {
  arr.forEach((task) => {
    const listContainer = document.getElementById('listContainer');
    const taskRow = document.createElement('li');
    const checkmark = document.createElement('input');
    const text = document.createElement('p');
    const dots = document.createElement('span');

    checkmark.setAttribute('type', 'checkbox');
    checkmark.classList.add('form-check-input', 'me-2');
    text.textContent = task.description;
    dots.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
    taskRow.append(checkmark, text, dots);
    taskRow.id = task.index;
    listContainer.appendChild(taskRow);
  });
}