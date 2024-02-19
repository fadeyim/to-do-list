import { getToDoData } from './lib/firebase/api';
import { toDoItemTemplate } from './templates/toDoItem';




let store = [];
async function appInit() {
const toDos = await getToDoData();
console.log(toDos);
}
appInit();




// async function appInit() {
// 	const appData = await getToDoData();
// 	// Interactive Templating
// 	console.log();
// 	const toDoItems = Object.values(appData).map((obj) => {
// 		return toDoItemTemplate(obj.todo);
// 	});

// 	const div = document.createElement('div');
// 	toDoItems.forEach((markup) => {
// 		div.appendChild(markup);
// 	});
// 	document.querySelector('main').append(markup);
// }

// appInit();
