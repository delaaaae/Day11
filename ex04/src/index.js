var monitorsListArray = ["Apple", "Peach", "Berry"];
var monitorsList = [];
monitorsListArray[0].push(monitorsList);

function myMonitorsFunction(arr) {
  var newMonitorsList = [...monitorsListArray];
  monitorsList.length = 3;

for (i = 0; i < monitorsList.length; i++) {
  monitorsList[i] = i;
} 
  return monitorsList;
}

console.log(myMonitorsFunction(monitorsList));
module.exports = myMonitorsFunction;
