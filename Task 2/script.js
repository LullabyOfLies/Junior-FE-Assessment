const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function updateLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTaskToUI(task));
}

function addTaskToUI(task) {
  const li = document.createElement('li');
  li.innerHTML = `
    <input type="checkbox">
    <span>${task}</span>
    <button>Delete</button>
  `;
  taskList.appendChild(li);
}

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTaskToUI(taskText);
    updateLocalStorage(getTasksFromUI());
    taskInput.value = '';
  }
}

function getTasksFromUI() {
  const tasks = [];
  const taskElements = document.querySelectorAll('li span');
  taskElements.forEach(task => tasks.push(task.textContent));
  return tasks;
}

function deleteTask(event) {
  if (event.target.tagName === 'BUTTON') {
    const li = event.target.closest('li');
    li.remove();
    updateLocalStorage(getTasksFromUI());
  }
}

function toggleCompleted(event) {
  if (event.target.tagName === 'INPUT') {
    const span = event.target.nextElementSibling;
    span.classList.toggle('completed');
    updateLocalStorage(getTasksFromUI());
  }
}

addTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);
taskList.addEventListener('change', toggleCompleted);

loadTasks();
