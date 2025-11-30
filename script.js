//Ensure HTML is already loaded
document.addEventListener("DOMContentLoaded", function () {
  // Load task
  loadTasks();

  //Get all element
  const addButton = document.getElementById("add-task-btn");

  //Add Task calling
  addButton.addEventListener("click", function () {
    addTask(taskInput.value.trim());
  });

  //Implement enter key input
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask(taskInput.value.trim());
    }
  });
});

const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

//Add task
function addTask(task, save = true) {
  const taskText = task;
  if (taskText.length < 1) {
    alert("Enter a task");
    return;
  }
  //Create a list item
  const list = document.createElement("li");
  list.textContent = taskText;

  //Remove btn
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");

  //Listen for event on the remove button
  removeBtn.addEventListener("click", function (event) {
    // const storedTasks = JSON.parse(localStorage.getItem("task"));
    // let find = storedTasks.filter((task) =>
    //   task.indexOf(event.target.parentElement.textContent)
    // );
    // console.log(find);
    // console.log(event.target.parentElement.textContent);
    taskList.removeChild(list);
  });
  //Append the button and the li item
  taskList.appendChild(list);
  list.appendChild(removeBtn);

  //clear the input
  taskInput.value = "";

  if (save) {
    //Get the stored task from local storage
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    storedTasks.push(taskText);

    //Save to local storage
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }
}

function loadTasks() {
  //Check for stored task
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  //Display stored task
  storedTasks.forEach(function (task) {
    addTask(task, false);
  });
}
