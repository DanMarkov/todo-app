import { todo, setLocalStorage } from "./storageModule";
import { todoValue, todoDescription, todoDate, todoPriority, addUpdate, updateText } from "./initialModule";
import { setAlertMessage } from "./alertModule";

function UpdateToDoItems(e) {
    if (
      e.parentElement.parentElement.querySelector("div").style.textDecoration ===
      ""
    ) {
      window.dialog.showModal();
      const values = e.parentElement.parentElement.querySelectorAll("#values");
      todoValue.value = values[0].innerText;
      todoDescription.value = values[1].innerText;
      todoDate.value = values[2].innerText;
      todoPriority.value = values[3].innerText;


      updateText = e.parentElement.parentElement.querySelectorAll("#values");
      // updateText = e.parentElement.parentElement.querySelector("div");
      addUpdate.setAttribute("onclick", "UpdateOnSelectionItems()");
      todoValue.focus();
    }
}

window.UpdateToDoItems = UpdateToDoItems;

export let globalUpdateToDoItems = window.UpdateToDoItems;
  
function UpdateOnSelectionItems() {
  
    todo.forEach((element) => {
     if (element.item == updateText[0].innerText.trim()) {
        element.item = todoValue.value;
        element.description = todoDescription.value;
        element.dueDate = todoDate.value;
        element.priority = todoPriority.value;
      }
    });
    setLocalStorage();
  
    if (todoValue.value === "") {
      todoAlert.innerText = "Please enter your todo task!";
      todoValue.focus();
    } else {
      updateText[0].innerText = todoValue.value;
      updateText[1].innerText = todoDescription.value;
      updateText[2].innerText = todoDate.value;
      updateText[3].innerText = todoPriority.value;
      addUpdate.setAttribute("onclick", "CreateToDoItems()");
      addUpdate.setAttribute("id", "AddUpdateClick");
      todoValue.value = "";
      todoDescription.value = "";
      todoDate.value = "";
      todoPriority.value = "";
      setAlertMessage("Todo item Updated Successfully!");
    }

 }

 window.UpdateOnSelectionItems = UpdateOnSelectionItems;

 export let globalUpdateOnSelectionItems = window.UpdateOnSelectionItems;