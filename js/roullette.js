// Select the form using its ID
const form = document.getElementById("roulette-form");

// Add an event listener for the 'submit' event
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the input field
  const selectedNumber = document.getElementById('selected-number').value;
  const betAmount = document.getElementById('bet-amount').value;
  const rouletteResultDiv = document.getElementById('roulette-result');

	// This logs to console, then validates input. 
	// This *should* be replaced with a switch statement but I'm a bad programmer
	// yeah nested if-else loops - BAD - added to to-do list
	// also this validation isnt fully necessary, but is a good idea!
  console.log('Form submitted:', selectedNumber, betAmount);
	if (betAmount <= 0) {
		console.log('invalid bet: below 0');
		return
	} else if (betAmount >= 100) {
		console.log('invalid bet: exceeds my aribtrary limit of 100 tBNB');
		return
	} else if (selectedNumber == null) {
		console.log('please bet on a number!');
		return
	} else {
		//Handle the win case first
		//THIS IS NOT A GOOD RANDOM FUNCTION _ NOT UNIFORM
		let roll = Math.random() * 37;
		let rollRounded = Math.round(roll);
		if (selectedNumber == roll) {
		rouletteResultDiv.innerHTML = `Congrats! You bet on ${selectedNumber} and rolled ${rollRounded}`;
		} else {
		rouletteResultDiv.innerHTML = `Hahah loser, you bet on ${selectedNumber} and rolled ${rollRounded}`;
		}
	}




  // You can also add further processing here (e.g., send data to a server)
});

