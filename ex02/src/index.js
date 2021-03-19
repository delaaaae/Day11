var temps = [monday, tuesday, wednesday, thursday, friday];
    var monday = [31, 32, 19, 37];
    var tuesday = [29, 27, 55, 36];
    var wednesday = [17, 27, 42, 46];
    var thursday = [29, 52, 21, 64];
    var friday = [91, 27, 31, 61];
var arrayLength = temps.length;

for (i = 0; i < temps.length; i++) {
    console.log(temps[i]);
}

    function myArrayFunction(arr) {
        var newTemps = [...temps];
        var averageDayTemp = [29.75, 36.75, 41.5, 52.5];
        

        return averageDayTemp;
    }

    console.log(myArrayFunction());
    module.exports = myArrayFunction;


