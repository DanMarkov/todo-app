import { todo, projects, setLocalProjectStorage, setLocalStorage } from "./storageModule";
import { projectValue, todoValue } from "./initialModule";


function DeleteToDoItems(e) {
    let deleteValue =
      e.parentElement.parentElement.querySelector("div").innerText;
  
    if (confirm(`Are you sure. Due you want to delete this ${deleteValue}!`)) {
      e.parentElement.parentElement.setAttribute("class", "deleted-item");
      todoValue.focus();

      projects.forEach((element) => {
        if (element.project == deleteValue.trim()) {
          projects.splice(element, 1);
        }
      });
  
      todo.forEach((element) => {
        if (element.item == deleteValue.trim()) {
          todo.splice(element, 1);
        }
      });
  
      setTimeout(() => {
        e.parentElement.parentElement.remove();
      }, 1000);
  
      setLocalProjectStorage();
      setLocalStorage();
    }
  }

  window.DeleteToDoItems = DeleteToDoItems;
  export let globalDeleteToDoItems = window.DeleteToDoItems;