// Business Logic
var tableExercise = ""
var newExercise = [];
var n = 0;
var p = 0;
var limit = 0;

//Create function to make combination of exercises
var exerciseTypes = ["15 min ", "20 min ", "30 min ", "foam roll stretching ", "jogging ", "biking ", "and circuit training ", "and weight lifting", "and rock climbing"]

function printExercise() {
  for(i = 0; i<3; i ++) {
    for(j=3; j <6; j++) {
      for (k=6; k < exerciseTypes.length; k++) {
        newExercise.push(exerciseTypes[i] + exerciseTypes[j] + exerciseTypes[k])
      }
    }
  }
}
printExercise();
//Create functions to shuffle the combinations
var e = newExercise.length;

function exerciseShuffle() {
  while(0 !== e) {

    n = Math.floor(Math.random() * e);
    e--;

    p = newExercise[e];
    newExercise[e] = newExercise[n];
    newExercise[n] = p;
  }
  return newExercise;
}
exerciseShuffle(newExercise);

function makeTable2low () {
  for( index = 0; index < 5; index+=2) {
tableExercise += "<tr>" + "<td>" + newExercise[index] + "</td>" + "<td>" + newExercise[index+1] + "</td>" + "</tr>" }
}

function makeTable2medium () {
  for( index = 0; index < 7; index+=2) {
tableExercise += "<tr>" + "<td>" + newExercise[index] + "</td>" + "<td>" + newExercise[index+1] + "</td>" + "</tr>" }
}

function makeTable2intense () {
  for( index = 0; index < 10; index+=2) {
tableExercise += "<tr>" + "<td>" + newExercise[index] + "</td>" + "<td>" + newExercise[index+1] + "</td>" + "</tr>" }
}
//Create table for suggestion for 4 day routine
function makeTable4low () {
  for( index = 0; index < 5; index+=4) {
tableExercise += "<tr>" + "<td>" + newExercise[index] + "</td>" + "<td>" + newExercise[index+1] + "</td>" + "<td>" + newExercise[index+2] + "</td>" + "<td>" + newExercise[index+3] + "</td>" + "</tr>" }
}

function makeTable4medium () {
  for( index = 0; index < 9; index+=4) {
tableExercise += "<tr>" + "<td>" + newExercise[index] + "</td>" + "<td>" + newExercise[index+1] + "</td>" + "<td>" + newExercise[index+2] + "</td>" + "<td>" + newExercise[index+3] + "</td>" + "</tr>" }
}

function makeTable4intense () {
  for( index = 0; index < 14; index+=4) {
tableExercise += "<tr>" + "<td>" + newExercise[index] + "</td>" + "<td>" + newExercise[index+1] + "</td>" + "<td>" + newExercise[index+2] + "</td>" + "<td>" + newExercise[index+3] + "</td>" + "</tr>" }
}
//Create table for suggestion for 6 day routine
function makeTable6low () {
  for( index = 0; index < 11; index+=6) {
tableExercise += "<tr>" + "<td>" + newExercise[index] + "</td>" + "<td>" + newExercise[index+1] + "</td>" + "<td>" + newExercise[index+2] + "</td>" + "<td>" + newExercise[index+3] + "</td>" +  "<td>" + newExercise[index+4] + "</td>" + "<td>" + newExercise[index+5] + "</td>" +"</tr>" }
}

function makeTable6medium () {
  for( index = 0; index < 18; index+=6) {
tableExercise += "<tr>" + "<td>" + newExercise[index] + "</td>" + "<td>" + newExercise[index+1] + "</td>" + "<td>" + newExercise[index+2] + "</td>" + "<td>" + newExercise[index+3] + "</td>" +  "<td>" + newExercise[index+4] + "</td>" + "<td>" + newExercise[index+5] + "</td>" +"</tr>" }
}

function makeTable6intense () {
  for( index = 0; index < 23; index+=6) {
tableExercise += "<tr>" + "<td>" + newExercise[index] + "</td>" + "<td>" + newExercise[index+1] + "</td>" + "<td>" + newExercise[index+2] + "</td>" + "<td>" + newExercise[index+3] + "</td>" +  "<td>" + newExercise[index+4] + "</td>" + "<td>" + newExercise[index+5] + "</td>" +"</tr>" }
}
// User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
//Get user input and retrieve value into variables
    var inputLifestyle = parseInt($("input:radio[name=lifestyle]:checked").val());
    var inputCurrentExercise = parseInt($("input:radio[name=currentExercise]:checked").val());
    var inputPriorityExercise = parseInt($("input:radio[name=priorityExercise]:checked").val());
    var inputWeeklyExercise = parseInt($("input:radio[name=weeklyExercise]:checked").val());
    console.log(inputWeeklyExercise);
    var totalScore = 0; var result = ""
    var totalScore = inputLifestyle+inputCurrentExercise+inputPriorityExercise+inputWeeklyExercise;
    function makeResult() {
      if(totalScore >=16 && totalScore <= 24) {
        result = "high intensity";
      } else if(totalScore >= 8 && totalScore <= 15) {
        result = "medium";
      } else {
        result = "low";
      }
      return result;
    }
    makeResult();

    function outputResult() {
      tableExercise = ""
      $("#weeklyRoutine").text("")
      if (inputWeeklyExercise === 1) {
        if (result === "low" ) {
          makeTable2low (newExercise)
        } else if (result === "medium") {
          makeTable2medium(newExercise)
        } else {makeTable2intense(newExercise)}
         $("#weeklyRoutine").append("<table>"+"<tr>"+"<th>Day One</th>"+"<th>Day Two</th>"+"</tr>"+tableExercise+"</table>")
      } else if (inputWeeklyExercise === 2) {
        if (result === "low") {
          makeTable4low(newExercise)
        } else if (result=== "medium") {
          makeTable4medium(newExercise)
        } else {makeTable4intense(newExercise) }
        $("#weeklyRoutine").append("<table>"+"<tr>"+"<th>Day One</th>"+"<th>Day Two</th>"+"<th>Day Three</th>"+"<th>Day Four</th>"+"</tr>"+tableExercise+"</table>")
      } else {
        if (result === "low" ) {
          makeTable6low (newExercise)
        } else if (result === "medium") {
          makeTable6medium(newExercise)
        } else {makeTable6intense(newExercise)}
        $("#weeklyRoutine").append("<table>"+"<tr>"+"<th>Day One</th>"+"<th>Day Two</th>"+"<th>Day Three</th>"+"<th>Day Four</th>"+"<th>Day Five</th>"+"<th>Day Six</th>"+"</tr>"+tableExercise+"</table>")
      }
    }
    outputResult()




  });
});
