import { todo, setLocalStorage } from "./storageModule";
import { setAlertMessage } from "./alertModule";

function CompletedToDoItems(e) {
    if (e.parentElement.querySelector("div").style.textDecoration === "") {

      const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const iconPath = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
      );
      iconSvg.setAttribute('viewBox', '0 0 24 24');
      iconSvg.classList.add('todo-controls');
      iconPath.setAttribute(
        'd',
        'M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z'
      );
      iconSvg.appendChild(iconPath);
      
      
      const todoCheck = document.getElementById("todo-check");
      todoCheck.checked = true;
      const values = e.parentElement.querySelectorAll("#values");
      values.forEach((div) => {
        div.style.textDecoration = "line-through";
      });

      e.parentElement.querySelector("#icon-wrapper").prepend(iconSvg);
      e.parentElement.querySelector("svg.edit").remove();
  
      todo.forEach((element) => {
        if (
          e.parentElement.querySelector("div").innerText.trim() == element.item
        ) {
          element.status = true;
        }
      });
      setLocalStorage();
      setAlertMessage("Todo item Completed Successfully!");
    }
  }

  window.CompletedToDoItems = CompletedToDoItems;

  export let globalCompletedToDoItems = window.CompletedToDoItems;