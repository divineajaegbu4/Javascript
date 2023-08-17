//Challenge Area

let gradeCalc = function(studentScore, totalPossibleScore) {
  const A = "90 - 70";
  const B= "80 -89";
  const C = "70 -79";
  const D = "60 -69";
  const F = "0 - 50";

  const score = (studentScore / totalPossibleScore) * 100;
  let scoreMessage;


  if(score <= 75) {
    scoreMessage = C
  }else if (score >= 85) {
    scoreMessage = B
  }else if(score >= 95) {
    scoreMessage = A
  }else if(score === 0) {
    scoreMessage = F
  }else {
    scoreMessage = D
  }

  return `You got a ${scoreMessage} (${score}%)!`;

}


const gradeCalcValue = gradeCalc(15, 20);

console.log("gradeCalc ", gradeCalcValue);