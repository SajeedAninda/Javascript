// What number's bigger?
// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(a,b){
  if (a>b){
    console.log(`${a} is the bigger number and ${b} is the smaller number`);
  }
  else{
    console.log(`${b} is the bigger number and ${a} is the smaller number`);
  }
}

greaterNum(10,17);
greaterNum(88,7);
greaterNum(62,93);
greaterNum(76,11);


