import {ref, set, get, push, child, remove, update} from 'firebase/database'     //201k (gzipped: 58.8k)
import {db} from '../lib/firebase/config/firebaseInit'
import { createStore, removeFromStore, updateStore } from './store';



let observers = [];

export function subscribe(fn){
observers.push(fn);
console.log(observers)
}

export function notify(data){
    observers.forEach((observer) => observer(data));
}

export async function getToDoData(){
    const dbRef = ref(db, 'todos');
    const response = await get(dbRef);
    let payload = await response.val();
    //console.log(payload); //use for testing
    payload = Object.entries(payload);
    //console.log(payload); //use for testing
    let toDoItems = payload.map((item) => {
        return {...item[1], uid: item[0]}
    })

    if (await createStore(toDoItems)){
        notify(toDoItems);
    }
    //console.log(toDoItems);
    

}


export function deleteToDo(uid){
    const dbRef = ref(db, `todos/${uid}`);
    remove(dbRef);
    const store = removeFromStore(uid);
    notify(store);
}

export function updateToDo(updatedToDo){
    let payload = updatedToDo;
    const dbRef = ref(db, `todos/${payload.uid}`);
    update(dbRef, payload);
    const store = updateStore(payload);
    notify(store);
}

export function createToDo(createNewToDo){
    let payload = createNewToDo;
    const dbRef = ref(db, `todos`);
    push(dbRef, payload);
    const store = updateStore(payload);
    notify(store);
    console.log("createToDo");
}