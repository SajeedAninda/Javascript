// The Grade Assigner
// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.
function assignGrade(marks){
  if(marks>=80){
    console.log("Your Grade is A+");
  }
  else if(marks>=70){
    console.log("Your Grade is A");
  }
  else if(marks>=60){
    console.log("Your Grade is A-");
  }
  else if(marks>=50){
    console.log("Your Grade is B");
  }
  else if(marks>=40){
    console.log("Your Grade is C");
  }
  else if(marks>=33){
    console.log("Your Grade is D");
  }
  else if(marks<=32){
    console.log("Your Grade is F");
  }
  else{
    console.log("Invalid Marks")
  }
}
assignGrade(20);
assignGrade(50);
assignGrade(41);
assignGrade(89);
assignGrade(38);
assignGrade(63);
