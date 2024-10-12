import { todo, setLocalStorage } from "./storageModule";
import { todoValue, addUpdate, updateText } from "./initialModule";
import { setAlertMessage } from "./alertModule";

function UpdateToDoItems(e) {
    if (
      e.parentElement.parentElement.querySelector("div").style.textDecoration ===
      ""
    ) {
      todoValue.value = e.parentElement.parentElement.querySelector("div").innerText;
      updateText = e.parentElement.parentElement.querySelector("div");
      addUpdate.setAttribute("onclick", "UpdateOnSelectionItems()");
      addUpdate.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      addUpdate.setAttribute("viewBox", "0 0 24 24");
      addUpdate.innerHTML = '<title>refresh</title><path d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" />';
      todoValue.focus();
    }
}

window.UpdateToDoItems = UpdateToDoItems;

export let globalUpdateToDoItems = window.UpdateToDoItems;
  
function UpdateOnSelectionItems() {
  
    todo.forEach((element) => {
     if (element.item == updateText.innerText.trim()) {
        element.item = todoValue.value;
      }
    });
    setLocalStorage();
  
    if (todoValue.value === "") {
      todoAlert.innerText = "Please enter your todo text!";
      todoValue.focus();
    } else {
      updateText.innerText = todoValue.value;
      addUpdate.setAttribute("onclick", "CreateToDoItems()");
      addUpdate.setAttribute("id", "AddUpdateClick");
      addUpdate.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      addUpdate.setAttribute("viewBox", "0 0 24 24");
      addUpdate.innerHTML = '<title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />';
      todoValue.value = "";
      setAlertMessage("Todo item Updated Successfully!");
    }

 }

 window.UpdateOnSelectionItems = UpdateOnSelectionItems;

 export let globalUpdateOnSelectionItems = window.UpdateOnSelectionItems;