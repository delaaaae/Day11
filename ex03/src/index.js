var myPetsArray = ["Dog", "Cat"];
var myNewPets = ["Bird", "Fish"];
var firstPet = myNewPets;
var lastPet = myNewPets;


function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    myNewPets.pop();
    myNewPets.unshift(myPetsArray[1]);
    myNewPets.unshift("Lion");
    return myNewPets;

}

console.log(myArrayFunction(myNewPets));
module.exports = myArrayFunction;