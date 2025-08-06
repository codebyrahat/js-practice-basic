// Odd number 61-100
let odd = [];
let i = 61;
while (i <= 100) {
  if (i % 2 === 1) {
    odd.push(i);
  }
  i++;
}
console.log(`Odd Numbers between (61-100) are: ${odd} .`);
