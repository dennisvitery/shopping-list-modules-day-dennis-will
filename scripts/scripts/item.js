function validateName(name){
    if(name == '')
    throw new TypeError("Name must not be blank.");
    console.log(name);
}

function create(name){
    let item = {
        id: cuid(),
        name: name,
        checked: false
    };
    return item;
}
export default{
    validateName,
    create
};