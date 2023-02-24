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
    console.log("sS");
  });
}
