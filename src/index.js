import "./styles.css";
import { todoValue, todoAlert, listItems, addUpdate, updateText} from "./modules/initialModule";
import { todo, setLocalStorage } from "./modules/storageModule";
import { globalCreateToDoItems } from "./modules/createModule";
import { ReadToDoItems } from "./modules/readModule";
import { globalUpdateToDoItems, globalUpdateOnSelectionItems } from "./modules/updateModule";
import { globalDeleteToDoItems } from "./modules/deleteModule";
import { globalCompletedToDoItems } from "./modules/completedModule";
import { setAlertMessage } from "./modules/alertModule";




if (!todo) {
  todo = [];
}

ReadToDoItems();





