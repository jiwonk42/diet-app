// Business Logic
function Exercise(totalScore) {
  this.totalScore = totalScore;
  this.result = "";
}

Exercise.prototype.results = function() {
  if(this.totalScore >=28 && this.totalScore <= 37) {
    this.result = "high intensity";
  } else if(this.totalScore >= 17 && this.totalScore <= 27) {
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
    $("input:checkbox[name=exerciseType]:checked").each(function() {
      inputExerciseType += parseInt($(this).val());
    });

    var totalExercise = inputLifestyle + inputCurrentExercise + inputPriorityExercise + inputWeeklyExercise + inputExercisePriority + inputExerciseType;

    var scoreResult = new Exercise(totalExercise);

    console.log(scoreResult.results());

  });
});
