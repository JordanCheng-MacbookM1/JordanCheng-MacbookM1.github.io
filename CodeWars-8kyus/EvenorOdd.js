/*
Question
Create a function that takes an integer as an 
argument and returns "Even" for even numbers or "Odd" 
for odd numbers.
*/

/*
//Method 1 - Using division and remainder concept

function evenOrOdd(number) {
  if (number % 2 ==0) 
  return `Even`;
  else 
    return `Odd`;
}
*/


/* 
//Method 2 - Using arrow function
const evenOrOdd = n => (n%2) ?  `Odd` :  `Even`;

/*
Since
if(n%2)
`Odd`;
else
`Even`;

可簡寫成

n = (n%2) ?  `Odd` :  `Even`;
*/