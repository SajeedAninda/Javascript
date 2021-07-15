// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celsiusToFahrenheit(celcius){
  let celciusTofahrenteit=(celcius*9/5)+32;
  console.log(`${celcius}°C is ${celciusTofahrenteit}°F`);
}
celsiusToFahrenheit(45);
celsiusToFahrenheit(23);
celsiusToFahrenheit(15);

function fahrenheitToCelsius(fahrenheit){
  let fahrenheitToCelcius=(fahrenheit - 32) * 5 / 9;
  console.log(`${fahrenheit}°F is ${fahrenheitToCelcius}°C`);
}

fahrenheitToCelsius(98.11);
fahrenheitToCelsius(690);
fahrenheitToCelsius(104);
