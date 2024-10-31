import { projects, todo, setLocalProjectStorage, setLocalStorage } from "./storageModule";
import { projectValue, todoValue, todoDescription, todoDate, todoPriority, addProjectUpdate, addUpdate, updateText, todoAlert } from "./initialModule";
import { setAlertMessage } from "./alertModule";
import { dialog, open, openModel } from "./dialogModule";

function updateProjectItems(e) {
  openModel;
  const div = e.parentElement.parentElement.querySelector("div");
  projectValue.value = div.innerText;

  updateText = e.parentElement.parentElement.querySelector("div");
  addProjectUpdate.setAttribute("onclick", "UpdateOnSelectionProjects()");
  projectValue.focus();
}

window.updateProjectItems = updateProjectItems;
export let globalUpdateProjectItems = window.updateProjectItems;

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
      addUpdate.setAttribute("onclick", "UpdateOnSelectionItems()");
      todoValue.focus();
    }
}

window.UpdateToDoItems = UpdateToDoItems;
export let globalUpdateToDoItems = window.UpdateToDoItems;

function UpdateOnSelectionProjects() {
  projects.forEach((element) => {
    if (element.project == updateText.innerText.trim()) {
      element.project = projectValue.value;
    }
  });
  setLocalProjectStorage();

  if (projectValue.value === "") {
    todoAlert.innerText = "Please enter your project name!";
    projectValue.focus();
  } else {
    updateText.innerText = projectValue.value;
    addProjectUpdate.setAttribute("onclick", "createProjectItems();");
    addProjectUpdate.setAttribute("id", "AddProjectUpdateClick");
    projectValue.value = "";
    setAlertMessage("Project Title Updated Successfully!");
  }
}

window.UpdateOnSelectionProjects = UpdateOnSelectionProjects;
export let globalUpdateOnSelectionProjects = window.UpdateOnSelectionProjects;
  
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