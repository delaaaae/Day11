var temps = [
  monday = [31, 32, 19, 37],
  tuesday = [29, 27, 55, 36],
  wednesday = [17, 27, 42, 46],
  thursday = [29, 52, 21, 64],
  friday = [91, 27, 31, 61],
];

function myArrayFunction(arr) {
  var newTemps = [...arr];
  var averageDayTemp = [];
  for (i = 0; i < temps.length; i++) {
    for (j = 0; j < temps[i].length; j++) {
      averageDayTemp *= temps[j];
    }
  }

  return averageDayTemp;
}

console.log(myArrayFunction(averageDayTemp));
module.exports = myArrayFunction;
