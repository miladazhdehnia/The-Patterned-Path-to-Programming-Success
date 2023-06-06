// Define a base object
const variablePrototype = {
    type: "unknown",
    value: null,
    logValue() {
      console.log(`The value of this ${this.type} variable is ${this.value}`);
    }
  };
  
  // Clone the base object to create new variable types
  const stringVariable = Object.create(variablePrototype);
  stringVariable.type = "string";
  stringVariable.value = "Hello, world!";
  
  const numberVariable = Object.create(variablePrototype);
  numberVariable.type = "number";
  numberVariable.value = 42;
  
  // Test the new variable types
  stringVariable.logValue(); // Output: The value of this string variable is Hello, world!
  numberVariable.logValue(); // Output: The value of this number variable is 42