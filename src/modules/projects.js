// Project's object constructor
function Project(name) {
  return {
    tasks: [],
    name,
  };
}

// Projects array
export const projects = [];

export function addProject() {
  // Show add project form
  const addProjectButton = document.querySelector("button#addProjectButton");
  const projectForm = document.querySelector("form#addProjectForm");

  addProjectButton.addEventListener("click", function () {
    projectForm.style.display = "flex";
    addProjectButton.style.display = "none";
  });

  // Cancel button (show/hide forms) event listener
  const cancelButton = document.querySelector("button#projectCancelButton");
  cancelButton.addEventListener("click", () => {
    projectForm.style.display = "none";
    addProjectButton.style.display = "flex";

    // Reset input field text
    document.querySelector("#addProjectInput").value = "";
  });

  // Add project event listener
  const addProjectForm = document.querySelector("form#addProjectForm");
  addProjectForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Hide form and show again button to add projects
    projectForm.style.display = "none";
    addProjectButton.style.display = "flex";

    const projectName = document.querySelector("input#addProjectInput").value;
    const newProject = document.createElement("button");
    const newProjectText = document.createElement("div");
    newProjectText.textContent = projectName;

    // Add arrow icon
    const projectIcon = document.createElement("i");
    projectIcon.className = "fa-solid fa-arrow-right";
    newProject.appendChild(projectIcon);

    // Add project's name
    newProject.appendChild(newProjectText);

    // Add 'X' mark icon
    const closingIcon = document.createElement("i");
    closingIcon.className = "fa-solid fa-xmark";
    closingIcon.style.display = "none";
    closingIcon.style.marginLeft = "auto";
    closingIcon.id = "closeProjectButton";
    newProject.appendChild(closingIcon);

    // Show 'X' on project's mouse over
    newProject.addEventListener("mouseover", () => {
      closingIcon.style.display = "flex";
    });

    // Hide 'X' on project's mouse out
    newProject.addEventListener("mouseout", () => {
      closingIcon.style.display = "none";
    });

    const projectTitle = document.querySelector("#projectTitle");
    const addTaskButton = document.querySelector("#addTaskButton");

    // Reset project input value
    document.querySelector("input#addProjectInput").value = "";

    const projectsPreview = document.querySelector("#sidebarProjectsPreview");
    projectsPreview.appendChild(newProject);

    // Create object to store the project and its tasks
    const project = new Project(projectName);
    projects.push(project);

    // Event listener for clicks on added projects
    newProject.addEventListener("click", function () {
      // Display project name on page's title
      projectTitle.textContent = projectName;

      // Show button to add tasks to project
      addTaskButton.style.display = "flex";
    });

    // Event listener to remove projects/tasks when 'X' icon is clicked
    closingIcon.addEventListener("click", function () {
      document.querySelector("#projectTitle").innerHTML = "aa";
      newProject.remove();
      projectTitle.textContent = "";
      addTaskButton.style.display = "none";
      console.log("pass");
    });
  });
}
