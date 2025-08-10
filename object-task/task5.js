let myObjects = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};
for (const keyName in myObjects) {
  console.log(`key : ${keyName} | type: ${typeof myObjects[keyName]}`);
}
