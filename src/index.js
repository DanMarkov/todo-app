import "./styles.css";
import { todoValue, todoAlert, listItems, addUpdate, updateText} from "./modules/initialModule";
import { todo, setLocalStorage } from "./modules/storageModule";
import { globalCreateProjectItems, globalCreateToDoItems } from "./modules/createModule";
import { ReadToDoItems } from "./modules/readModule";
import { globalUpdateProjectItems, globalUpdateToDoItems, globalUpdateOnSelectionProjects, globalUpdateOnSelectionItems } from "./modules/updateModule";
import { globalDeleteToDoItems } from "./modules/deleteModule";
import { globalCompletedToDoItems } from "./modules/completedModule";
import { setAlertMessage } from "./modules/alertModule";
import { dialog, open, cancel, close, openModel, cancelModel, closeMondel } from "./modules/dialogModule";




if (!todo) {
  todo = [];
}

ReadToDoItems();





