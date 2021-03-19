var myArr = [2, 4, 0, 8, 10];
myArr[2] = 6;

function myArrayFunction(arr) {
    var myItems = [...myArr];
    return myItems;
}

console.log(myArrayFunction());
module.exports = myArrayFunction;