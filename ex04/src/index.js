var monitorsListArray = ["Apple", "Peach", "Berry"];
var monitorsList = [];



function myMonitorsFunction(arr) {
  var newMonitorsList = [...arr];
  for (var i = 0; i < newMonitorsList.length; i++){
  }
  return newMonitorsList;
}

console.log(myMonitorsFunction(monitorsList));
module.exports = myMonitorsFunction;
