// The Pluralizer
// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(num,noun){
  if(num!=1 && noun!="sheep" && noun!="geese"){
    console.log(`There are ${num} ${noun}'s`);
  }
  else{
    console.log(`There is ${num} ${noun}`);
  }
}
pluralize(5,"Duck");
pluralize(1, "Chicken");