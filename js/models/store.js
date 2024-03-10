let store;
let instance;

const createStore = async (todos) => {
    if(instance){
        throw new Error('New Isntance cannot be created!!')
    }

    instance = 1;

    store = todos;

    if(store.length){
        return true;
    }
}
1

const getStore = () => {
    return store;1
}

const removeFromStore = (uid) => {
    store = store.filter((item) => item.uid !== uid)
    return store;
}

export{getStore, createStore, removeFromStore}