// // Finding Even Numbers From an Array
// let evenNumber = [];
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumber.push(numbers[i]);
//   }
// }
// console.log(evenNumber);

let evenNumber = [];
const numbers = [12, 98, 5, 41, 23, 78, 46];
for (const number of numbers) {
  if (number % 2 === 0) {
    evenNumber.push(number.trim());
  }
}
console.log("Even Numbers are : ", evenNumber);
