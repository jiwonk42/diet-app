//Define global variables
var score = 0;

//Business logic
//For Breakfast
var breakfastMenu = ["salad with ", "quinoa with ", " oatmeals with ", "broccoli ", "chicken breast ", "salmon ", " and lemon dressing ", "and sesame dressing ", "and roasted nuts"];

var breakfastMeal = [];

//Printing combination for breakfast
function printBreakfastMenu() {
	for (var i = 0; i < 3; i++) {
		for (var j = 3; j < 6; j++) {
			for (var k = 6; k < breakfastMenu.length; k++) {
				breakfastMeal.push(breakfastMenu[i] + breakfastMenu[j] + breakfastMenu[k]);
      }
    }
  }
}
printBreakfastMenu();

//Shuffle the breakfastMenuArray
function shuffle(breakfastMeal) {
  var count = breakfastMeal.length;
  var number = 0;
  var temp = 0;

  while (0!== count) {
    number = Math.floor(Math.random() * count);
    count--;

    temp = breakfastMeal[count];
    breakfastMeal[count] = breakfastMeal[number];
    breakfastMeal[number] = temp;
  }
  return breakfastMeal;
}
shuffle(breakfastMeal);

//For lunch
var lunchMenu = ["wheat sandwich with ","organic wraps with ", "brown rice with ", "chicken breasts ", "kale " , "organic avocado dressing ","and fruit salad" , "and greek yoghurt",
"and lentil soups"]

var lunchMeal = [];

//Printing combination for lunch
function printLunchMenu() {
	for (var i = 0; i < 3; i++) {
		for (var j = 3; j < 6; j++) {
			for (var k = 6; k < lunchMenu.length; k++) {
				lunchMeal.push(lunchMenu[i] + lunchMenu[j] + lunchMenu[k]);
      }
    }
  }
}
printLunchMenu();

//Shuffle the lunchMenuArray
function shuffle(lunchMeal) {
  var count = lunchMeal.length;
  var number = 0;
  var temp = 0;

  while (0!== count) {
    number = Math.floor(Math.random() * count);
    count--;

    temp = lunchMeal[count];
    lunchMeal[count] = lunchMeal[number];
    lunchMeal[number] = temp;
  }
  return lunchMeal;
}
shuffle(lunchMeal);

//For dinner
var dinnerMenu = ["seasoned chicken with ","veggie burger with ", "gluten-free spaghetti with ", "mashed potato ", "brussels sprouts " , "pesto sauce ","and fruit salad" , "and veggie salad", "and corn salad"];

var dinnerMeal = [];

//Printing combination for dinner
function printDinnerMenu() {
	for (var i = 0; i < 3; i++) {
		for (var j = 3; j < 6; j++) {
			for (var k = 6; k < dinnerMenu.length; k++) {
				dinnerMeal.push(dinnerMenu[i] + dinnerMenu[j] + dinnerMenu[k]);
      }
    }
  }
}
printDinnerMenu();

//Shuffle the dinnerMenuArray
function shuffle(dinnerMeal) {
  var count = dinnerMeal.length;
  var number = 0;
  var temp = 0;

  while (0!== count) {
    number = Math.floor(Math.random() * count);
    count--;

    temp = dinnerMeal[count];
    dinnerMeal[count] = dinnerMeal[number];
    dinnerMeal[number] = temp;
  }
  return dinnerMeal;
}
shuffle(dinnerMeal);

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

    if (inputWeight === "2") { // Gain Weight
      $("input:checkbox[name=eatMore]:checked").each(function() {
        $("#gainParagraph").show();
        if ($(this).val() === "1") {
          $("#vegetableGain").show();
        } else if ($(this).val() === "3") {
          $("#fruitGain").show();
        } else if ($(this).val() === "5") {
          $("#cerealGain").show();
        } else if ($(this).val() === "7") {
          $("#meatGain").show();
        } else { // value = "9"
          $("#sweetsGain").show();
        }
      });
    } else if (inputWeight === "1") { // Lose Weight
      $("input:checkbox[name=eatLess]:checked").each(function() {
        $("#loseParagraph").show();
        if ($(this).val() === "9") {
          $("#vegetableLoss").show();
        } else if ($(this).val() === "7") {
          $("#fruitLoss").show();
        } else if ($(this).val() === "5") {
          $("#cerealLoss").show();
        } else if ($(this).val() === "3") {
          $("#meatLoss").show();
        } else { // value = "1"
          $("#sweetsLoss").show();
        }
      });
    }

    //Create new object using constructor
     var userChoice = new Choice([inputBreakfast,inputLunch,inputDinner,inputStatus,inputSavvy,inputFiber,inputCondition],inputGoals,[inputWeight,inputNumber])

    //Apply prototypes to new object
    userChoice.scoreHabit();
    userChoice.scoreGoal();
    userChoice.scoreNumber();
  });
});
