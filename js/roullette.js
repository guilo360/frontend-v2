// Select the form using its ID
const form = document.getElementById("roulette-form");

// Add an event listener for the 'submit' event
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the input field
  const selectedNumber = document.getElementById('selected-number').value;
  const betAmount = document.getElementById('bet-amount').value;

  // Do something with the input value (e.g., log it to the console)
  console.log('Form submitted:', selectedNumber, betAmount);

  // You can also add further processing here (e.g., send data to a server)
});

