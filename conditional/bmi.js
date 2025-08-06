let weightKg = 70;
let heightMeter = 1.75;
const bmi = weightKg / (heightMeter * heightMeter);
const bmiResult = bmi.toFixed(2);

if (bmiResult < 18.5) {
  console.log("You are underweight");
} else {
  if (bmiResult >= 18.5 && bmiResult <= 24.9) {
    console.log("You are Normal");
  } else if (bmiResult >= 25 && bmiResult <= 29.9) {
    console.log("You are overweight");
  } else {
    console.log("You are obese");
  }
}
