// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

function DrEvil(amount){
if(amount==1000){
console.log(`${amount} dollars (pinky)`);
}
else{
  console.log(`${amount} dollars`);
}
}
DrEvil(10)
DrEvil(1000)