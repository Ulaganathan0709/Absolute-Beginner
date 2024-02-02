/* You are given three numbers A, B & C. Print the largest amongst these three numbers.

Input Description:
Three numbers are provided to you.

Output Description:
Find and print the largest among the three

Sample Input :
1
2
3
Sample Output :
3 */

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
  const A = userInput[0];
  const B = userInput[1];
  const C = userInput[2];
 if (A >= B && A >= C) 
 {
    console.log(A);
  } 
  else if (B >= A && B >= C) 
  {
    console.log(B);
  } else 
  {
    console.log(C);
  }

  //end-here
});