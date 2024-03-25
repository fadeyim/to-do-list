import { updateToDoController } from '../controllers/updateToDoController';
import { deleteToDoController } from '../controllers/deleteToDoController';
import { subscribe } from '../models/toDoListModel';
import { toDoItemTemplate } from '../templates/toDoItemTemplate';

let view;

// const testObject = {
//     uid: 12345,
//     todo: 'Pick up shoes',
//     category: 'work',
//     status: 'pending',
// } // use for test data only

subscribe(render);

export function toDoListView() {
    view = document.querySelector('#to-do-list');
    view.addEventListener('click', onHandleClick)
    //render();
}

function render(data) {
    const div = document.createElement('div');
    const toDoList = document.querySelector('#item-container');
    toDoList.replaceChildren();
    //const testToDo = div.prepend(toDoItemTemplate(testObject));

    data.forEach((element) => {
        div.prepend(toDoItemTemplate(element))
    });
    toDoList.append(div);
}

function onHandleClick(e) {
    switch (e.target.id) {
        case 'delete':
            deleteToDoController(e.target.dataset.uid)
            break
        case 'edit':
            console.log(e.target.dataset.uid)
            updateToDoController(e.target.dataset.uid)
            break
        default:
            null
    }
}