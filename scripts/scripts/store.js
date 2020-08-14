import item from './item.js';
let items = [];
let hideCheckedItems = false;

function findById(id){
    return store.items.find(function(element){
        return element.id == id;
    });
}

function addItem(name){
    try{
        item.validateName(name);
        let thisItem = item.create(name);
        console.log(thisItem);
        items.push(thisItem);
    }
    catch(e){
        console.log(`Cannot add item: ${e.message}`);
    }

}

function findAndToggleChecked(id){
    let thisItem = this.findById(id);
    thisItem.checked = |thisItem.checked
}


function findAndUpdateName(id, newName){
    try{
        item.validateName(newName);
        let thisItem = findById(id);
        thisItem.name = newName;

    } catch(e){
        console.log(`Cannot update name: ${error.message}`);
    }
}


function findAndDelete(id){
    items = items.filter(function(e){
        return (e.id != id);
    })
}


function toggleCheckedFilter(){
    hideCheckedItems = !hideCheckedItems;
}


export default{
    items,
    hideCheckedItems,
    findAndUpdateName,
    findAndToggleChecked,
    addItem,
    findById,
    toggleCheckedFilter,
    findAndDelete


  };