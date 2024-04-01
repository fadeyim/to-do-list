import { createToDo } from "../models/toDoListModel"
import { getStore } from "../models/store"



let dialog
let closeButton
let exitButton
let form
let uid

export function createToDoController() {
    const todo = getStore().find((item) => item.uid === uid)
    dialog = document.querySelector('#create-to-do');
    exitButton = dialog.querySelector('#exit');
    closeButton = dialog.querySelector('#close');
    form = dialog.querySelector('form');
    configUi();
    configureListeners();
    dialog.showModal();
}

function configUi(item) {
    dialog.querySelector('#todo').value;
    dialog.querySelector('#category').value;
    dialog.querySelector('#status').value;
}

function configureListeners() {
    exitButton.addEventListener('click', onCloseDialog);
    closeButton.addEventListener('click', onCloseDialog);
    form.addEventListener('submit', createNewTodo);
}

function createNewTodo(e) {
    e.preventDefault();
    // console.log(uid); for testing only
    const todo = e.currentTarget.todo.value.trim();
    const category = e.currentTarget.category.value.trim();
    const status = e.currentTarget.status.value.trim();

    createToDo({
        todo,
        category,
        status,
    })
}

function onCloseDialog() {
    dialog.close();
}