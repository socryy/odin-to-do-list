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

  const allTasksOption = document.createElement("div");
  allTasksOption.id = "allTasksOption";
  allTasksOption.textContent = "All Tasks";
  sidebarOptions.appendChild(allTasksOption);

  const todayOption = document.createElement("div");
  todayOption.id = "todayOption";
  todayOption.textContent = "Today";
  sidebarOptions.appendChild(todayOption);

  const weekOption = document.createElement("div");
  weekOption.id = "weekOption";
  weekOption.textContent = "Week";
  sidebarOptions.appendChild(weekOption);

  // Create sidebar 'project'
  const sidebarProject = document.createElement("div");
  sidebarProject.id = "sidebarProject";
  sidebar.appendChild(sidebarProject);

  const sidebarProjectTitle = document.createElement("div");
  sidebarProjectTitle.id = "sidebarProjectTitle";
  sidebarProjectTitle.textContent = "Projects";
  sidebarProject.appendChild(sidebarProjectTitle);

  const addProjectButton = document.createElement("button");
  addProjectButton.id = "addProjectButton";
  addProjectButton.textContent = "+ Add Project";
  sidebarProject.appendChild(addProjectButton);

  // Create body's content
  const content = document.createElement("div");
  content.id = "content";
  main.appendChild(content);

  // Create footer
  const footer = document.createElement("div");
  footer.id = "footer";
  container.appendChild(footer);

  const footerText = document.createElement("div");
  footerText.id = "footerText";
  footerText.textContent = "Copyright © The Odin Project 2023";
  footer.appendChild(footerText);
}
