import { projects } from "./addProject";

function getIndex(x) {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].name === x) {
      return i;
    }
  }
}

export function addTask() {
  const addTaskButton = document.querySelector("#addTaskButton");

  // Task button event listener
  addTaskButton.addEventListener("click", () => {
    // Hide add task btn
    addTaskButton.style.display = "none";

    // Show form
    addTaskForm.style.display = "flex";
  });

  // Cancel button event listener
  const cancelButton = document.querySelector("#addTaskCancelButton");

  cancelButton.addEventListener("click", function () {
    // Hide form
    addTaskForm.style.display = "none";

    // Show the add task button
    addTaskButton.style.display = "flex";
  });

  // Event listener to add tasks
  const addButton = document.querySelector("#addTaskAddButton");

  addButton.addEventListener("click", function () {
    let taskName = document.querySelector("input#addTaskInput").value;
    console.log("TASK NAME: " + taskName);

    // Hide form
    addTaskForm.style.display = "none";

    // Show the add task button
    addTaskButton.style.display = "flex";

    // Get project name
    const projectName = document.querySelector("#projectTitle").textContent;

    console.log("Proj name: " + projectName);

    // Get index
    const index = getIndex(projectName);

    // Add task
    projects[index].tasks.push(taskName);

    // Display tasks
    console.log(projects);

    // Reset task name input
    document.querySelector("input#addTaskInput").value = "";
  });
}
