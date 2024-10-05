import "./styles.css";
import { todo, setLocalStorage } from "./modules/storageModule";

const todoValue = document.getElementById("todoText");
const todoAlert = document.getElementById("Alert");
const listItems = document.getElementById("list-items");
const addUpdate = document.getElementById("AddUpdateClick");

let updateText;

if (!todo) {
  todo = [];
}

export function CreateToDoItems() {
    if (todoValue.value === "") {
      todoAlert.innerText = "Please enter your todo text!";
      todoValue.focus();
      }
  
      let li = document.createElement("li");
      const todoItems = `<div title="Hit Double Click and Complete" ondblclick="lib.CompletedToDoItems(this)">${todoValue.value}</div><div>
                      <svg class="edit todo-controls" onclick="lib.UpdateToDoItems(this)"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
                      <svg class="delete todo-controls" onclick="lib.DeleteToDoItems(this)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M18,19C18,20.66 16.66,22 15,22H8C6.34,22 5,20.66 5,19V7H4V4H8.5L9.5,3H13.5L14.5,4H19V7H18V19M6,7V19C6,20.1 6.9,21 8,21H15C16.1,21 17,20.1 17,19V7H6M18,6V5H14L13,4H10L9,5H5V6H18M8,9H9V19H8V9M14,9H15V19H14V9Z" /></svg>`;
      li.innerHTML = todoItems;
      listItems.appendChild(li);
  
      if (!todo) {
        todo = [];
      }
      let itemList = { item: todoValue.value, status: false };
      todo.push(itemList);
      setLocalStorage();
    // }
    todoValue.value = "";
    setAlertMessage("Todo item Created Successfully!");
  }

   function ReadToDoItems() {
    todo.forEach((element) => {
      let li = document.createElement("li");
      let style = "";
      if (element.status) {
        style = "style='text-decoration: line-through'";
      }
      const todoItems = `<div ${style} title="Hit Double Click and Complete" ondblclick="lib.CompletedToDoItems(this)">${
        element.item
      }
      ${
        style === ""
          ? ""
          : '<svg xmlns="http://www.w3.org/2000/svg" class="todo-controls" viewBox="0 0 24 24"><title>check-bold</title><path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" /></svg>' 
          
      }</div><div>
      ${
        style === ""
          ? '<svg class="edit todo-controls" onclick="lib.UpdateToDoItems(this)"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>'
          : ""
      }
      <svg class="delete todo-controls" onclick="lib.DeleteToDoItems(this)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M18,19C18,20.66 16.66,22 15,22H8C6.34,22 5,20.66 5,19V7H4V4H8.5L9.5,3H13.5L14.5,4H19V7H18V19M6,7V19C6,20.1 6.9,21 8,21H15C16.1,21 17,20.1 17,19V7H6M18,6V5H14L13,4H10L9,5H5V6H18M8,9H9V19H8V9M14,9H15V19H14V9Z" /></svg>`;
      li.innerHTML = todoItems;
      listItems.appendChild(li);
    });
  }
  ReadToDoItems();

  export function UpdateToDoItems(e) {
    if (
      e.parentElement.parentElement.querySelector("div").style.textDecoration ===
      ""
    ) {
      todoValue.value = e.parentElement.parentElement.querySelector("div").innerText;
      updateText = e.parentElement.parentElement.querySelector("div");
      addUpdate.setAttribute("onclick", "lib.UpdateOnSelectionItems()");
      addUpdate.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      addUpdate.setAttribute("viewBox", "0 0 24 24");
      addUpdate.innerHTML = '<title>refresh</title><path d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" />';
      todoValue.focus();
    }
  }
  
  export function UpdateOnSelectionItems() {
  
    todo.forEach((element) => {
      if (element.item == updateText.innerText.trim()) {
        element.item = todoValue.value;
      }
    });
    setLocalStorage();
  
    updateText.innerText = todoValue.value;
    addUpdate.setAttribute("onclick", "lib.CreateToDoItems()");
    addUpdate.setAttribute("id", "AddUpdateClick");
    addUpdate.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    addUpdate.setAttribute("viewBox", "0 0 24 24");
    addUpdate.innerHTML = '<title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />';
    todoValue.value = "";
    setAlertMessage("Todo item Updated Successfully!");
  }

  export function DeleteToDoItems(e) {
    let deleteValue =
      e.parentElement.parentElement.querySelector("div").innerText;
  
    if (confirm(`Are you sure. Due you want to delete this ${deleteValue}!`)) {
      e.parentElement.parentElement.setAttribute("class", "deleted-item");
      todoValue.focus();
  
      todo.forEach((element) => {
        if (element.item == deleteValue.trim()) {
          todo.splice(element, 1);
        }
      });
  
      setTimeout(() => {
        e.parentElement.parentElement.remove();
      }, 1000);
  
      setLocalStorage();
    }
  }

  export function CompletedToDoItems(e) {
    if (e.parentElement.querySelector("div").style.textDecoration === "") {
      const svg = document.createElement("svg");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.innerHTML = '<title>check-bold</title><path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"';
      svg.className = "todo-controls";
      e.parentElement.querySelector("div").style.textDecoration = "line-through";
      e.parentElement.querySelector("div").appendChild(svg);
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

  export function setAlertMessage(message) {
    todoAlert.removeAttribute("class");
    todoAlert.innerText = message;
    setTimeout(() => {
      todoAlert.classList.add("toggleMe");
    }, 1000);
  }

