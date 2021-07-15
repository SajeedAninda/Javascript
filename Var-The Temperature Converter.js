// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

// °C to °F	Divide by 5, then multiply by 9, then add 32
// °F to °C	Deduct 32, then multiply by 5, then divide by 9

let celcius=32;
let celciusTofahrenteit=(celcius*9/5)+32;
console.log(`${celcius}°C is ${celciusTofahrenteit}°F`);

// Again 

let fahrenheit=89.6;
let fahrenheitToCelcius=(fahrenheit - 32) * 5 / 9;
console.log(`${fahrenheit}°F is ${fahrenheitToCelcius}°C`);