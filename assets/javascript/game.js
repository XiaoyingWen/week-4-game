//get random integer between min and max inclusively
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var numberToGuess = 0;
var collectorTotalNumber = 0;
var numberOfWins = 0; 
var numberOfLoss = 0;

//reset all the vars except the number of wins and the number of loss
function initGame(){
  //reset the numbers
  numberToGuess = getRandomIntInclusive(19, 120);
  collectorTotalNumber = 0;
  //console.log('numberToGuess: ' + numberToGuess);
  //console.log('collectorTotalNumber: ' + collectorTotalNumber);
  
  //set the attr 'value' with new random number for each image
  $('.crystal-image').each(function(index){
    $(this).attr('value', getRandomIntInclusive(1, 12));
    console.log('image at ' +index + ': ' + $(this).attr('value'));
  });

  //display the number
  $("#numberToGuess").text(numberToGuess);
  $("#collectorTotalNumber").text(collectorTotalNumber);
}

//attach the calculation to the on-click listener for each image
$(".crystal-image").on("click", function() {
  //console.log("number clicked: " + $(this).attr('value'));

  var gameIsEnded = false;

  //increment the collectorTotalNumber by adding the assigned number upon user clicking.
  collectorTotalNumber += Number($(this).attr('value'));
  //console.log("collectorTotalNumber is: " + collectorTotalNumber);

  if (numberToGuess === collectorTotalNumber) {
    gameIsEnded = true;
    numberOfWins++;
    $("#numberOfWins").text(numberOfWins);
  } else if (numberToGuess < collectorTotalNumber) {
    gameIsEnded = true;
    numberOfLoss++;
    $("#numberOfLoss").text(numberOfLoss);
  }

  //reset the vars and start the game again
  if(gameIsEnded) {
    initGame();
  } else{
    $("#collectorTotalNumber").text(collectorTotalNumber);
  }
});

//set the var and display when the page is loaded
initGame();

//display the number of wins and the number of loss as 0 when the page is loaded or reloaded
$("#numberOfWins").text(numberOfWins);
$("#numberOfLoss").text(numberOfLoss);
