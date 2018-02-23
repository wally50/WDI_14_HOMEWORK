export default function calcScore(password) {

  let score = 0;
  let charTest = false;

  function hasLowerCase(password) {return (/[a-z]/.test(password));}
  function hasUpperCase(password) {return (/[A-Z]/.test(password));}
  function hasNumbers(password) {return (/[0-9]/.test(password));}
  function hasNonAlpaNum(password) {return (/[^(a-zA-Z)^(0-9)\s]/.test(password));}

  function splCharTest(password) {
    function testFunction(char) {
      if (char === "^" || char === "(" || char === ")") { charTest = true;}
    }
    password.split("").forEach(testFunction);
    if (charTest === true) {return true;}
  }


  if( password.length > 0) {
    if (password.length > 7) {
      score = score + 1;
    }
    if (hasLowerCase(password)) {
      score = score + 1;
    }
    if (hasUpperCase(password)) {
      score = score + 1;
    }
    if (hasNumbers(password)) {
      score = score + 1;
    }
    if (hasNonAlpaNum(password) || splCharTest(password)) {
      score = score + 1;
    }
  }

  let rating = "";
  if(score === 1){rating = "pathetic password (1)";}
  if(score === 2){rating = "weak password (2)";}
  if(score === 3){rating = "moderate password (3)";}
  if(score === 4){rating = "Good password (4)";}
  if(score === 5){rating = "Very good password (5)";}



  return rating;
}
