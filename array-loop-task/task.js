const colors = ["red", "blue", "green", "yellow", "orange"];
let reverseColor = [];
for (let i = 0; i < colors.length; i++) {
  reverseColor.unshift(colors[i]);
}
console.log(reverseColor);
