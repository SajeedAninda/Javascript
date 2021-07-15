// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

function mixUp(a,b){
  console.log(b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2))
}
mixUp("Pog","Donut");