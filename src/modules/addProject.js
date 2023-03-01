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

    //Add icon
    const projectIcon = document.createElement("i");
    projectIcon.className = "fa-solid fa-arrow-right";
    newProject.appendChild(projectIcon);

    // Add project's name
    newProject.appendChild(newProjectText);

    // Reset project input value
    document.querySelector("input#addProjectInput").value = "";

    const projectsPreview = document.querySelector("#sidebarProjectsPreview");
    projectsPreview.appendChild(newProject);

    // Create object to store the project and its tasks
    const project = new Project(projectName);
    projects.push(project);
    console.log("Proj: " + projects[projects.length - 1].name);

    // Event listener for clicks on added projects
    newProject.addEventListener("click", function () {
      const projectTitle = document.querySelector("#projectTitle");
      const addTaskButton = document.querySelector("#addTaskButton");

      // Display project name on page's title
      projectTitle.textContent = projectName;

      // Show button to add tasks to project
      addTaskButton.style.display = "flex";
    });
  });
}
