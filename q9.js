/* You are provided with two numbers. Find and print the smaller number.

Input Description:
You are provided with two numbers as input.

Output Description:
Print the small number out of the two numbers.

Sample Input :
23 1
Sample Output :
1 */

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  const N = userInput[0].split(' ');
  const A = N[0];
  const B = N[1];
  if (A>B)
  {
      console.log(B);
  }
  else if (B>A)
  {
      console.log(A);
  }

  //end-here
});