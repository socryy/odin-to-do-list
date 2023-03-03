import { projects } from "./projects";

function getProjectIndex(x) {
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

    // Reset input field
    document.querySelector("#addTaskInput").value = "";
  });

  // Count to make unique checkboxes IDs
  let count = 0;

  // Form to add tasks
  const addTaskForm = document.querySelector("#addTaskForm");

  // Event listener to add tasks to projects
  addTaskForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting
    let taskName = document.querySelector("input#addTaskInput").value;

    // Prevents form from being submitted empty
    if (taskName === "") {
      alert("Task name can't be empty!");
      return;
    }

    // Hide form and Show the add task button
    addTaskForm.style.display = "none";
    addTaskButton.style.display = "flex";

    // Get project name
    const projectName = document.querySelector("#projectTitle").textContent;

    console.log("TASK NAME: " + taskName);
    console.log("Proj name: " + projectName);
    console.log(projects);

    // Get project's index
    let projectIndex = getProjectIndex(projectName);

    // Add task to project
    projects[projectIndex].tasks.push(taskName);

    // Display tasks
    const projectDisplay = document.querySelector("#projectDisplay");
    const displayDiv = document.createElement("div");
    projectDisplay.appendChild(displayDiv);

    // Add checkbox
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    displayDiv.appendChild(taskCheckbox);

    // Add task title
    const taskTitle = document.createElement("label");
    const taskTitleText = document.createElement("div");
    taskTitle.appendChild(taskTitleText);
    displayDiv.appendChild(taskTitle);

    taskTitleText.textContent =
      projects[projectIndex].tasks[projects[projectIndex].tasks.length - 1];

    taskCheckbox.id = "taskCheckbox" + count;
    taskCheckbox.className = "cb";
    taskTitle.className = "taskTitle";
    taskTitleText.className = "taskTitleText";
    taskTitle.htmlFor = "taskCheckbox" + count;
    count++;

    // Add input to change task name
    const editDiv = document.createElement("div");
    editDiv.id = "editDiv";
    displayDiv.appendChild(editDiv);

    const editTitleInput = document.createElement("input");
    editTitleInput.id = "editTitleInput";
    editDiv.appendChild(editTitleInput);

    const editDivButtons = document.createElement("div");
    editDivButtons.id = "editDivButtons";
    editDiv.appendChild(editDivButtons);

    const editCancelButton = document.createElement("button");
    editCancelButton.id = "editCancelButton";
    editCancelButton.textContent = "Cancel";
    editDivButtons.appendChild(editCancelButton);

    editCancelButton.addEventListener("click", () => {
      // Hide edit input
      editDiv.style.display = "none";

      // Show task again
      taskTitle.style.display = "flex";

      // Reset input text
      editTitleInput.value = "";

      // reset items alignment to default
      displayDiv.style.alignItems = "center";

      // Show edit task icon
      editTaskIcon.style.opacity = "1";
    });

    const editAddButton = document.createElement("button");
    editAddButton.id = "editAddButton";
    editAddButton.textContent = "Add";
    editDivButtons.appendChild(editAddButton);

    editAddButton.addEventListener("click", () => {
      // Get task's new name
      const inputValue = editTitleInput.value;

      if (inputValue === "") {
        alert("New task name can't be empty");
        return;
      }

      // Replace task name on 'projects' tasks array
      const taskIndex = taskCheckbox.id.split("x")[1];
      projects[getProjectIndex(projectName)].tasks[taskIndex] = inputValue;

      // Replace task old name with new one
      taskTitle.textContent = inputValue;

      // Hide edit input
      editDiv.style.display = "none";

      // Show task again
      taskTitle.style.display = "flex";

      // Reset input text
      editTitleInput.value = "";

      // reset items alignment to default
      displayDiv.style.alignItems = "center";

      // Show edit task icon
      editTaskIcon.style.opacity = "1";
    });

    // Add edit task icon
    const editTaskIcon = document.createElement("i");
    editTaskIcon.id = "editTaskIcon";
    editTaskIcon.style.visibility = "hidden";
    editTaskIcon.className = "fa-regular fa-pen-to-square";
    editTaskIcon.style.fontSize = "1.5vw";
    displayDiv.appendChild(editTaskIcon);

    // Event listener to edit tasks
    editTaskIcon.addEventListener("click", () => {
      // Hide task name
      taskTitle.style.display = "none";

      // Show edit input
      editDiv.style.display = "flex";

      // Hide edit task icon
      editTaskIcon.style.opacity = "0";

      // change items alignment to keep them at the top of the div when editing
      displayDiv.style.alignItems = "flex-start";
    });

    // Add priority select
    const selectDiv = document.createElement("div");
    selectDiv.className = "selectPriority";
    displayDiv.appendChild(selectDiv);

    const selectTag = document.createElement("select");
    selectDiv.appendChild(selectTag);

    const priorityOption = document.createElement("option");
    priorityOption.value = "0";
    priorityOption.textContent = "Priority";
    selectTag.appendChild(priorityOption);

    const lowOption = document.createElement("option");
    lowOption.value = "1";
    lowOption.textContent = "Low";
    selectTag.appendChild(lowOption);

    const mediumOption = document.createElement("option");
    mediumOption.value = "2";
    mediumOption.textContent = "Medium";
    selectTag.appendChild(mediumOption);

    const highOption = document.createElement("option");
    highOption.value = "3";
    highOption.textContent = "High";
    selectTag.appendChild(highOption);

    // Event listener to detect priority selected
    selectDiv.addEventListener("input", (e) => {
      e.target.value === "0"
        ? (displayDiv.style.borderLeft = "0.4vw solid transparent")
        : e.target.value === "1"
        ? (displayDiv.style.borderLeft = "0.4vw solid #F7BE6D")
        : e.target.value === "2"
        ? (displayDiv.style.borderLeft = "0.4vw solid #FA9C1B")
        : (displayDiv.style.borderLeft = "0.4vw solid #F05E16");
    });

    // Add calendar to pick due date
    const calendarInput = document.createElement("input");
    calendarInput.className = "calendarInput";
    calendarInput.type = "date";
    displayDiv.appendChild(calendarInput);

    // Add closing icon to tasks
    const closingIcon = document.createElement("i");
    closingIcon.id = "closingIcon";
    closingIcon.style.visibility = "hidden";
    closingIcon.className = "fa-solid fa-xmark";
    closingIcon.style.fontSize = "1.5vw";
    displayDiv.appendChild(closingIcon);

    // Close icon listener to appear on mouseover/disappear on mouseout
    displayDiv.addEventListener("mouseover", function () {
      closingIcon.style.visibility = "visible";
      editTaskIcon.style.visibility = "visible";
    });

    displayDiv.addEventListener("mouseout", function () {
      closingIcon.style.visibility = "hidden";
      editTaskIcon.style.visibility = "hidden";
    });

    // Remove task from screen
    closingIcon.addEventListener("click", function () {
      displayDiv.remove();
      document.querySelector("#container").style.backgroundColor =
        "rgb(0,0,0,.5";
    });

    // Reset task name input
    document.querySelector("input#addTaskInput").value = "";

    // 'All Tasks' event listener
    AllTasksButton;

    console.log("PROJECTS: " + projects);
  });
}
