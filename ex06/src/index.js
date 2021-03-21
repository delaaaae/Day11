function multiplyArrayFunction(myArray) {
    var product = 1;
    for (var i = 0; i < myArray.length; i += 1){
        for (var j = 0; j < myArray[i].length; j += 1) {
            product *= myArray[i][j];
            
        }
    }
    return product;
}
console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]]));
module.exports = multiplyArrayFunction;