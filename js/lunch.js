var lunchMenu = ["wheat sandwich with ","organic wraps with ", "brown rice with ", "chicken breasts ", "kale " , "organic avocado dressing ","and fruit salad" , "and greek yoghurt",
"and lentil soups"]

var lunchMeal = [];
var number = 0;
var temp = 0;

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
console.log(lunchMeal);

//Shuffle the lunchMenuArray
var count = lunchMeal.length;

function shuffle(lunchMeal) {
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
