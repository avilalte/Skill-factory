// Conditional statements:

const compare = () => {
  let input1 = prompt("Enter first input");
  let input2 = prompt("Enter second input");
  const checkNum = (input) => (/^-?\d+$/).test(input);

  while (!checkNum(input1) || !checkNum(input2)) {
    alert("Inputs must be numbers, try again.");
    input1 = prompt("Enter first input");
    input2 = prompt("Enter second input");
  }

  input1 = parseInt(input1);
  input2 = parseInt(input2);

  if (input1 < input2) return alert("First input is smaller");
  else if (input1 > input2) return alert("Second input is smaller");
  else return alert("Inputs are equal");
};

compare();
