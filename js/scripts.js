//Define global variables
var score = 0;
//Business logic
//Make original constructor
function Choice(habit,goals,number){
  this.habit = habit;
  this.goals = goals;
  this.number = number;
}
//Make prototype for radio question score
Choice.prototype.scoreHabit = function () {
  score = 0;
  for (var i = 0; i < this.habit.length; i++) {
    if(this.habit[i] === "1") {
      score+=1
    } else if (this.habit[i] === "3") {
      score+=3
    } else if (this.habit[i] === "5") {
      score+=5
    } else if (this.habit[i] === "7") {
      score+=5
    } else if (this.habit[i] === "2") {
      score+=2
    } else if (this.habit[i] === "4") {
      score+=4
    } else {
      score+=6
    }
  };
};
//Make prototype for checkbox questions:
Choice.prototype.scoreGoal = function () {
  for (var i = 0; i < this.goals.length; i++) {
    if(this.goals[i] === "9") {
      score+=9
    } else if (this.goals[i] === "7") {
      score+=7
    } else if (this.goals[i] === "5") {
      score+=5
    } else if (this.goals[i] === "3") {
      score+=3
    } else if (this.goals[i] === "1") {
      score+=1
    }
  }
};
//Make prototype for input field
Choice.prototype.scoreNumber= function () {
  if (this.number[0] === "1") {
    score -= (this.number[1]/2)
  } else { score += (this.number[1]/2)}
};

// user logic goes here
$(document).ready(function(){
$("form").submit(function(event){
  event.preventDefault();
//Make radio input into variable
 var inputBreakfast = $("input:radio[name=breakfast]:checked").val();
 var inputLunch = $("input:radio[name=lunch]:checked").val();
 var inputDinner = $("input:radio[name=dinner]:checked").val();
 var inputStatus = $("input:radio[name=status]:checked").val();
 var inputSavvy= $("input:radio[name=savvy]:checked").val();
 var inputFiber = $("input:radio[name=fiber]:checked").val();
 var inputCondition = $(".conditionMed option:selected").val();
// Push checkbox input into an array
 var inputGoals = [];
 $("input:checkbox[name=eatMore]:checked").each(function() {
   inputGoals.push($(this).val());
 });
 $("input:checkbox[name=eatLess]:checked").each(function() {
   inputGoals.push($(this).val());
 });
 // Get dropdown menu input
 var inputWeight = $(".weightQn option:selected").val();
 var inputNumber= parseInt($("input#weightQn").val());

//Create new object using constructor
 var userChoice = new Choice([inputBreakfast,inputLunch,inputDinner,inputStatus,inputSavvy,inputFiber,inputCondition],inputGoals,[inputWeight,inputNumber])

//Apply prototypes to new object
userChoice.scoreHabit();
userChoice.scoreGoal();
userChoice.scoreNumber();
  });
});
