export let todo = JSON.parse(localStorage.getItem("todo-list"));

export function setLocalStorage() {
    localStorage.setItem("todo-list", JSON.stringify(todo));
  }
  
