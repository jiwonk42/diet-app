// Business Logic
function Exercise(totalScore) {
  this.totalScore = totalScore;
  this.result = "";
}

var ExerciseTypes = {
  rehab : ["20 min stretch", "15 min foam roll stretch"],
  low : ["20 min walk", "10 min jog"],
  resistence : ["30 min weight lighting"],
  activities : ["30 min biking", "60 min hiking", "60 min rock climbing"],
  core : ["45 min pilates", "60 min yoga"],
  high : ["30 min circut training", "15 min interval sprinting"]
}

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

// User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputLifestyle = parseInt($("input:radio[name=lifestyle]:checked").val());
    var inputCurrentExercise = parseInt($("input:radio[name=currentExercise]:checked").val());
    var inputPriorityExercise = parseInt($("input:radio[name=priorityExercise]:checked").val());
    var inputWeeklyExercise = parseInt($("input:radio[name=weeklyExercise]:checked").val());
    var inputExercisePriority = parseInt($("input:radio[name=exercisePriority]:checked").val());
    var inputExerciseType = parseInt($("input:checkbox[name=exerciseType]:checked").val());

    var inputExerciseType = 0;
    var exerciseTypeArray = [];
    var totalExercise = inputWeeklyExercise + inputExercisePriority + inputExerciseType;
    var scoreResult = new Exercise(totalExercise);

    $("input:checkbox[name=exerciseType]:checked").each(function() {
      inputExerciseType += parseInt($(this).val());
      var suggestedExercise = "";

      if ($(this).val() === "1") { // Rehabilitation
        suggestedExercise = ExerciseTypes.rehab;
      } else if ($(this).val() === "2") { // Low Intensity Training
        suggestedExercise = ExerciseTypes.low;
      } else if ($(this).val() === "3") { // Resistence Training
        suggestedExercise = ExerciseTypes.resistence;
      } else if ($(this).val() === "4") { // Activities
        suggestedExercise = ExerciseTypes.activities;
      } else if ($(this).val() === "5") { // Core Strength
        suggestedExercise = ExerciseTypes.core;
      } else { // High Intensity Training
        suggestedExercise = ExerciseTypes.high;
      }
      exerciseTypeArray.push(suggestedExercise);
    });


    // for(var i=0; i< exerciseTypeArray.length; i++) {
    //   //if(exerciseTypeArray[i] === 21)
    //   eachValue += parseInt();
    // }



  });
});
