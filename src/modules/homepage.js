export function loadHomepage() {
  // Create page's container
  const container = document.createElement("div");
  container.id = "container";

  // Append container to page's body
  const body = document.querySelector("body");
  body.appendChild(container);

  // Create header
  const header = document.createElement("div");
  header.id = "header";
  container.appendChild(header);

  const headerText = document.createElement("div");
  headerText.id = "headerText";
  headerText.textContent = "To-Do List";
  header.appendChild(headerText);

  // Create container's body
  const main = document.createElement("div");
  main.id = "main";
  container.appendChild(main);

  // Create body's sidebar
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  main.appendChild(sidebar);

  // Create sidebar options
  const sidebarOptions = document.createElement("div");
  sidebarOptions.id = "sidebarOptions";
  sidebar.appendChild(sidebarOptions);

  // All tasks option
  const allTasksOption = document.createElement("div");
  allTasksOption.id = "allTasksOption";
  sidebarOptions.appendChild(allTasksOption);

  const allTasksIcon = document.createElement("i");
  allTasksIcon.className = "fa-solid fa-house";
  allTasksOption.appendChild(allTasksIcon);

  const allTasksText = document.createElement("div");
  allTasksText.className = "optionText";
  allTasksText.textContent = "All Tasks";
  allTasksOption.appendChild(allTasksText);

  // Today option
  const todayOption = document.createElement("div");
  todayOption.id = "todayOption";
  sidebarOptions.appendChild(todayOption);

  const todayIcon = document.createElement("div");
  todayIcon.className = "fa-solid fa-calendar-day";
  todayOption.appendChild(todayIcon);

  const todayText = document.createElement("div");
  todayText.className = "optionText";
  todayText.textContent = "Today";
  todayOption.appendChild(todayText);

  // Week option
  const weekOption = document.createElement("div");
  weekOption.id = "weekOption";
  sidebarOptions.appendChild(weekOption);

  const weekIcon = document.createElement("div");
  weekIcon.className = "fa-solid fa-calendar-week";
  weekOption.appendChild(weekIcon);

  const weekText = document.createElement("div");
  weekText.className = "optionText";
  weekText.textContent = "Week";
  weekOption.appendChild(weekText);

  // Create sidebar 'project'
  const sidebarProject = document.createElement("div");
  sidebarProject.id = "sidebarProject";
  sidebar.appendChild(sidebarProject);

  const sidebarProjectTitle = document.createElement("div");
  sidebarProjectTitle.id = "sidebarProjectTitle";
  sidebarProjectTitle.textContent = "Projects";
  sidebarProject.appendChild(sidebarProjectTitle);

  // Create sidebar project's preview
  const sidebarProjectsPreview = document.createElement("div");
  sidebarProjectsPreview.id = "sidebarProjectsPreview";
  sidebarProject.appendChild(sidebarProjectsPreview);

  const addProjectButton = document.createElement("button");
  addProjectButton.id = "addProjectButton";
  addProjectButton.textContent = "+ Add Project";
  sidebarProject.appendChild(addProjectButton);

  const addProjectForm = document.createElement("form");
  addProjectForm.id = "addProjectForm";
  addProjectForm.style.display = "none";
  sidebarProject.appendChild(addProjectForm);

  const addProjectInput = document.createElement("input");
  addProjectInput.id = "addProjectInput";
  addProjectInput.required = true;
  addProjectForm.appendChild(addProjectInput);

  const projectButtons = document.createElement("div");
  projectButtons.id = "projectButtons";
  addProjectForm.appendChild(projectButtons);

  const projectCancelButton = document.createElement("button");
  projectCancelButton.id = "projectCancelButton";
  projectCancelButton.textContent = "Cancel";
  projectCancelButton.type = "button";
  projectButtons.appendChild(projectCancelButton);

  const projectAddButton = document.createElement("button");
  projectAddButton.id = "projectAddButton";
  projectAddButton.textContent = "Add";
  projectButtons.appendChild(projectAddButton);

  // Create body's content
  const content = document.createElement("div");
  content.id = "content";
  main.appendChild(content);

  const projectTitle = document.createElement("div");
  projectTitle.id = "projectTitle";
  content.appendChild(projectTitle);

  const projectDisplay = document.createElement("div");
  projectDisplay.id = "projectDisplay";
  content.appendChild(projectDisplay);

  const addTaskButton = document.createElement("button");
  addTaskButton.id = "addTaskButton";
  addTaskButton.textContent = "+ Add Task";
  addTaskButton.style.display = "none";
  content.appendChild(addTaskButton);

  // Create form to add tasks
  const addTaskForm = document.createElement("form");
  addTaskForm.id = "addTaskForm";
  addTaskForm.style.display = "none";
  content.appendChild(addTaskForm);

  const addTaskInput = document.createElement("input");
  addTaskInput.id = "addTaskInput";
  addTaskForm.appendChild(addTaskInput);

  const addTaskButtons = document.createElement("div");
  addTaskButtons.id = "addTaskButtons";
  addTaskForm.appendChild(addTaskButtons);

  const cancelButton = document.createElement("button");
  cancelButton.type = "button";
  cancelButton.textContent = "Cancel";
  cancelButton.id = "addTaskCancelButton";
  addTaskButtons.appendChild(cancelButton);

  const addButton = document.createElement("button");
  addButton.type = "submit";
  addButton.textContent = "Add";
  addButton.id = "addTaskAddButton";
  addTaskButtons.appendChild(addButton);

  // Create footer
  const footer = document.createElement("div");
  footer.id = "footer";
  container.appendChild(footer);

  const footerText = document.createElement("div");
  footerText.id = "footerText";
  footerText.textContent = "Copyright © The Odin Project 2023";
  footer.appendChild(footerText);
}
