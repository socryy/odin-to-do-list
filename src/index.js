import { loadHomepage } from "./modules/homepage";
import { addProject } from "./modules/addProject";

loadHomepage();

const addProjectButton = document.querySelector("button#addProjectButton");
addProjectButton.addEventListener("click", function () {
  addProject();
});
