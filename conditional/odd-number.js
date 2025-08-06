// Sum of all even number from 51 to 85
let sum = 0;
let evenNumber = [];
for (let i = 51; i <= 85; i++) {
  if (i % 2 === 0) {
    evenNumber.push(i);
    sum += i;
  }
}
console.log(`Even Numbers From 51 to 85 are: ${evenNumber} .`);
console.log("The sum of those Even numbers is: ", sum);
