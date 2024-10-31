export let projects = JSON.parse(localStorage.getItem("project-list"));

export let todo = JSON.parse(localStorage.getItem("todo-list"));

export function setLocalProjectStorage() {
  localStorage.setItem("project-list", JSON.stringify(projects));
}

export function setLocalStorage() {
  localStorage.setItem("todo-list", JSON.stringify(todo));
}
  
