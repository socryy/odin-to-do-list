export function addProject() {
  const projectForm = document.querySelector("form#addProjectForm");
  projectForm.style.display == "none"
    ? (projectForm.style.display = "block")
    : (projectForm.style.display = "none");
}
