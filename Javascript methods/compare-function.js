// Conditional statements:

const compare = () => {
  const ask = msg => parseInt(prompt(msg));

  let input1 = ask("Enter first input");
  let input2 = ask("Enter second input");

  while (isNaN(input1) || isNaN(input2)) {
    alert("Inputs must be numbers, try again.");
    input1 = ask("Enter first input");
    input2 = ask("Enter second input");
  }

  if (input1 < input2) return alert("First input is smaller");
  else if (input1 > input2) return alert("Second input is smaller");
  else return alert("Inputs are equal");
};

compare();
