// Business Logic
function Exercise() {

}

// User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputLifestyle = $("input:radio[name=lifestyle]:checked").val();
    var inputCurrentExercise = $("input:radio[name=currentExercise]:checked").val();
    var inputPriorityExercise = $("input:radio[name=priorityExercise]:checked").val();
    var inputWeeklyExercise = $("input:radio[name=weeklyExercise]:checked").val();
    var inputExercisePriority = $("input:radio[name=exercisePriority]:checked").val();
    var inputExerciseType = $("input:checkbox[name=exerciseType]:checked").val();

    
  });
});
