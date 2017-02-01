// Business Logic
//Constructor to calculate score
function Exercise(totalScore) {
  this.totalScore = totalScore;
  this.result = "";
}
//prototype to assess the frequency of exercise
Exercise.prototype.results = function() {
  if(this.totalScore >=19 && this.totalScore <= 27) {
    this.result = "high intensity";
  } else if(this.totalScore >= 11 && this.totalScore <= 18) {
    this.result = "medium";
  } else {
    this.result = "low";
  }
  return this.result;
}
//Create function to make combination of exercises
var exerciseTypes = ["30 min ", "45 min ", "60 min ", "foam roll stretching ", "jogging ", "biking ", "and circuit training ", "and weight lifting", "and rock climbing"]
var newExercise = [];
var n = 0;
var p = 0;
function printExercise() {

  for(i = 0; i<3; i ++) {
    for(j=3; j <7; j++) {
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
//Get user input and retrieve value into variables
    var inputLifestyle = parseInt($("input:radio[name=lifestyle]:checked").val());
    var inputCurrentExercise = parseInt($("input:radio[name=currentExercise]:checked").val());
    var inputPriorityExercise = parseInt($("input:radio[name=priorityExercise]:checked").val());
    var inputWeeklyExercise = parseInt($("input:radio[name=weeklyExercise]:checked").val());
    var inputExercisePriority = parseInt($("input:radio[name=exercisePriority]:checked").val());
    var inputExerciseType = parseInt($("input:checkbox[name=exerciseType]:checked").val());
    $("input:checkbox[name=exerciseType]:checked").each(function() {
      inputExerciseType += parseInt($(this).val());
      var suggestedExercise = "";
    
      if ($(this).val() === "1" || $(this).val() === "2") {
      } else if ($(this).val() === "3" || $(this).val() === "4") {
      } else {
      }
    });


  });
});
