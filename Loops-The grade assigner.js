// Check the results of your assignGrade function from the conditionals exercise by logging every value from 60 to 100: your log should show "For 88, you got a B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc., logging each grade point in the range.

function assignGrade(marks){
  if(marks>=90){
    return 'A';
  }
  else if(marks>=80){
    return 'B';
  }
  else if(marks>=70){
    return 'C';
  }
  else if(marks>=60){
    return 'D';
  }
  else{
    return "You have failed"
  }
}

for(let i=60;i<100;i++){
  console.log(`For ${i} you have got ${assignGrade(i)}`);
}