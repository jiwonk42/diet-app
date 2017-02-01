var dinnerMenu = ["seasoned chicken with ","veggie burger with ", "gluten-free spaghetti with ", "mashed potato ", "brussels sprouts " , "pesto sauce ","and fruit salad" , "and veggie salad", "and corn salad"];

var dinnerMeal = [];
var number = 0;
var temp = 0;

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
console.log(dinnerMeal);

//Shuffle the dinnerMenuArray
var count = dinnerMeal.length;

function shuffle(dinnerMeal) {
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
