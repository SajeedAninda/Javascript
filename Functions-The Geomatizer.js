// The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".

// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumfrence(radius){
  let pie=3.1416;
  let circumference=2*pie*radius;
  console.log(`The circumference is ${circumference}`);
}

calcCircumfrence(18.222);

function calcArea(radius){
  let pie=3.1416;
  let area=pie*radius*radius;
  console.log(`The Area is ${area}`);
}

calcArea(8.168);