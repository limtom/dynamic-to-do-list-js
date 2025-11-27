//Ensure HTML is already loaded
document.addEventListener("DOMContentLoaded", function () {
  //Get all element
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  //Add task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText.length < 1) {
      alert("Enter a task");
    } else {
      //Create a list item
      const list = document.createElement("li");
      list.textContent = taskText;

      //Remove btn
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.classList.add("remove-btn");
      removeBtn.addEventListener("click", function () {
        taskList.removeChild(list);
        taskList.removeChild(removeBtn);
      });
      //Append the button and the li item
      taskList.appendChild(list);
      taskList.appendChild(removeBtn);

      //lear the input
      taskInput.value = "";
    }
  }

  //Add Task calling
  addButton.addEventListener("click", addTask);

  //Implement enter key input
  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });
});
