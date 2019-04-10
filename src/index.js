const formEl = document.querySelector("#create-task-form");
const listEl = document.querySelector("#tasks");

// add a single task
function addTask(task) {
  // 	create LI
  const todoEl = document.createElement("li");
  const cb = document.createElement("input");
  cb.type = "checkbox";
  cb.checked = false;
  //  create button
  const btn = document.createElement("button");
  btn.innerHTML = "Delete";
  btn.className = "delete";
  btn.style = "danger";

  //  add the text to the LI
  todoEl.innerText = task.text;
  todoEl.className = "todo";
  //  append button to the LI
  todoEl.appendChild(cb);

  todoEl.appendChild(btn);

  //  append LI to list
  listEl.appendChild(todoEl);
//DELETE BUTTON
  const delBtn = todoEl.querySelector(".delete");
  delBtn.addEventListener("click", function(e) {
    deleteTask(task).then(() => todoEl.remove());
  });
}




function addTasks(tasks) {
  tasks.forEach(addTask);
}

// listen to form submission

formEl.addEventListener("submit", event => {
  event.preventDefault();
  const text = formEl.text.value;
  addTask({"text": text});
  createTask({"text" : text})
  formEl.reset();
});



getTasks().then(addTasks);

