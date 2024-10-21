import { todo } from "./storageModule";
import { listItems} from "./initialModule";


export function ReadToDoItems() {
    todo.forEach((element) => {
      let li = document.createElement("li");
      let style = "";
      let idValue = 'id="values"';
      let checkboxStyle = "";
      if (element.status) {
        checkboxStyle = "checked";
        style = "style='text-decoration: line-through'";
      }
      const todoItems = `<input type="checkbox" onclick="CompletedToDoItems(this)" id="todo-check" name="todo-check" ${checkboxStyle}/>
      <div ${idValue} ${style} title="Hit Double Click and Complete" ondblclick="CompletedToDoItems(this)">${
        element.item
      }</div>
      
      <div ${idValue} ${style} title="Hit Double Click and Complete" ondblclick="CompletedToDoItems(this)">${
        element.description
      }</div>
      

      <div ${idValue} ${style} title="Hit Double Click and Complete" ondblclick="CompletedToDoItems(this)">${
        element.dueDate
      }</div>
      
      <div ${idValue} ${style} title="Hit Double Click and Complete" ondblclick="CompletedToDoItems(this)">${
        element.priority
      }</div>

      <div id="icon-wrapper">
      
          ${
            style === ""
              ? ""
              : '<svg xmlns="http://www.w3.org/2000/svg" class="todo-controls" viewBox="0 0 24 24"><title>check-bold</title><path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" /></svg>' 
              
          }
      
          ${
            style === ""
              ? '<svg class="edit todo-controls" onclick="UpdateToDoItems(this)"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>'
              : ""
          }  

          <svg class="delete todo-controls" onclick="DeleteToDoItems(this)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M18,19C18,20.66 16.66,22 15,22H8C6.34,22 5,20.66 5,19V7H4V4H8.5L9.5,3H13.5L14.5,4H19V7H18V19M6,7V19C6,20.1 6.9,21 8,21H15C16.1,21 17,20.1 17,19V7H6M18,6V5H14L13,4H10L9,5H5V6H18M8,9H9V19H8V9M14,9H15V19H14V9Z" /></svg>
      </div>`;
      li.innerHTML = todoItems;
      listItems.appendChild(li);
    });
 }