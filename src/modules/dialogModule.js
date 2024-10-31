export const dialog = document.getElementById("project-dialog");
export const open = document.getElementById("open");
export const cancel = document.getElementById("cancel");
export const close = document.getElementById("close");


export let openModel = open.addEventListener("click", () => {
    dialog.showModal();
});

export let cancelModel = cancel.addEventListener("click", () => {
    dialog.close();
});

export let closeMondel = close.addEventListener("click", () => {
    dialog.close();
});