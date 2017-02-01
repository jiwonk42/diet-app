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

// User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var limit = 0;
    var tableExercise = ""
//Get user input and retrieve value into variables
    var inputLifestyle = parseInt($("input:radio[name=lifestyle]:checked").val());
    var inputCurrentExercise = parseInt($("input:radio[name=currentExercise]:checked").val());
    var inputPriorityExercise = parseInt($("input:radio[name=priorityExercise]:checked").val());
    var inputWeeklyExercise = parseInt($("input:radio[name=weeklyExercise]:checked").val());
    console.log(inputWeeklyExercise);
    var totalScore = 0; var result = ""
    var totalScore = inputLifestyle+inputCurrentExercise+inputPriorityExercise+inputWeeklyExercise;
//Assess User's Answer
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
    console.log(totalScore);
    console.log(result);

    //Create a table for suggestion for 2 day routine REFACTORING with nested for loops
    function findLimit2 () {
      if(result === "low") {
        limit += 5
      } else if (result === "medium") {
        limit += 7
      } else { limit += 10 }; return limit;
    }
    function makeTable2() {
      var maxLimit = findLimit2()
      for( index = 0; index < maxLimit ; index+=2) {
    tableExercise += "<tr>" + "<td>" + newExercise[index] + "</td>" + "<td>" + newExercise[index+1] + "</td>" + "</tr>" }
    }

    //Create table for suggestion for 4 day routine
    function findLimit4 () {
      if(result === "low") {
        limit += 5
      } else if (result === "medium") {
        limit += 9
      } else {
        limit += 14
      };return limit;
    }
    function makeTable4() {
      var maxLimit = findLimit4();
        for( index = 0; index < maxLimit; index+=4) {
      tableExercise += "<tr>" + "<td>" + newExercise[index] + "</td>" + "<td>" + newExercise[index+1] + "</td>" + "<td>" + newExercise[index+2] + "</td>" + "<td>" + newExercise[index+3] + "</td>" + "</tr>" }
    }

    //Create table for suggestion for 6 day routine
    function findLimit6 () {
      if(result === "low") {
        limit += 11
      } else if (result === "medium") {
        limit += 18
      } else { limit += 23 }; return limit;
    }
    function makeTable6() {
      var maxLimit = findLimit6();
      for( index = 0; index < maxLimit; index+=6) {
    tableExercise += "<tr>" + "<td>" + newExercise[index] + "</td>" + "<td>" + newExercise[index+1] + "</td>" + "<td>" + newExercise[index+2] + "</td>" + "<td>" + newExercise[index+3] + "</td>" +  "<td>" + newExercise[index+4] + "</td>" + "<td>" + newExercise[index+5] + "</td>" +"</tr>" }
    }


    function outputResult() {
      tableExercise = ""
      $("#weeklyRoutine").text("")
      if (inputWeeklyExercise === 1) {
        makeTable2(newExercise);
        console.log(tableExercise);
         $("#weeklyRoutine").append("<table>"+"<tr>"+"<th>Day One</th>"+"<th>Day Two</th>"+"</tr>"+tableExercise+"</table>")
      } else if (inputWeeklyExercise === 2) {
        makeTable4(newExercise);
        $("#weeklyRoutine").append("<table>"+"<tr>"+"<th>Day One</th>"+"<th>Day Two</th>"+"<th>Day Three</th>"+"<th>Day Four</th>"+"</tr>"+tableExercise+"</table>")
      } else {
        makeTable6(newExercise);
        $("#weeklyRoutine").append("<table>"+"<tr>"+"<th>Day One</th>"+"<th>Day Two</th>"+"<th>Day Three</th>"+"<th>Day Four</th>"+"<th>Day Five</th>"+"<th>Day Six</th>"+"</tr>"+tableExercise+"</table>")
      }
    }
    outputResult()
  });
});
