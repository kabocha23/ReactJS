var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);
// var lets you redefine and even change the type

// can be reassigned, but block scoped
let nameLet = 'Jen';
console.log('nameLet', nameLet);

// cannot be reassigned
const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName(){
    var petName = 'Hal';
    return petName;
}

// Block Scoped vs Function Scoped

var fullName = 'Andrew Mead';

if (fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);
// var can be accessed outside of the curly brackets in the if (or for loop) statements

if (fullName){
    const firstName = fullName.split(' ')[0];
    let lastName = fullName.split(' ')[1];
    console.log(firstName);
    console.log(lastName);
}
console.log(firstName);
console.log(lastName);
// const and let can NOT be accessed outside of the curly brackets in the if (or for loop) statements