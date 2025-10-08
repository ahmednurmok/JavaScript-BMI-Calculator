function yourbmi(weight) {
    console.log("your BMI is " + bmiCalculator(weight, 1.8) ); 
  }
  
      
      
  function bmiCalculator(weight,height) {
  var bmi = Math.round(weight/(height*height)); 
  return bmi;
  }
  var mybmi = yourbmi(65);
  console.log(mybmi);
  