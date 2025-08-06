let sum = 0;
let i = 81;
while (i <= 131) {
  if (i % 2 === 1) {
    sum = sum + i;
  }
  i++;
}
console.log(`Sum of odd numbers from (81-131) is: `, sum);
