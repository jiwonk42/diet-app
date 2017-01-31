// business logic
function choice(habit,goals,number){
  this.habit = habit;
  this.goals = goals;
  this.number = number;
}


// user logic goes here
$(document).ready(function(){
$("form").submit(function(event){
  event.preventDefault();
//Make input into variables
 var inputBreakfast = $("input:radio[name='breakfast']:selected").val();
 var inputLunch = $("input:radio[name='lunch']:selected").val();
 var inputDinner = $("input:radio[name='dinner']:selected").val();
 var inputStatus = $("input:radio[name='status']:selected").val();
 var inputSavvy= $("input:radio[name='savvy']:selected").val();
 var inputFiber = $("input:radio[name='fiber']:selected").val();
 var inputCondition = $(".conditionMed option:selected").val();
 var inputEatMore = $("input:checkbox[name='eatMore']:selected").val();
 var inputEatLess = $("input:checkbox[name='eatLess']:selected").val();
 var inputWeight = $(".weightQn option:selected").val();
 var inputNumber= parseInt($("input#weightQn").val());

 var userChoice = new choice([inputBreakfast,inputLunch,inputDinner,inputStatus,inputSavvy,inputFiber,inputCondition],[inputEatMore,inputEatLess],[inputWeight,inputNumber])


  });
});
