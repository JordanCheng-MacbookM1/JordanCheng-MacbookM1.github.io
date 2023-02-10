/**
Task
zipWith ( or zip_with ) takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
The function value is one new array.

If the arrays are of unequal length, the output will only be as long as the shorter one.
(Values of the longer array are simply not used.)

Inputs should not be modified.

Examples
zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both forms are valid
zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both are functions
Input validation
Assume all input is valid.


 */
function zipWith(fn,a0,a1) {
  
  let returnArray=[];                                     //create a blank array to return
  for (let i = 0; i < a0.length && i < a1.length; i++) {  //make sure the they are all calaulate with 2 elements
    
    returnArray.push(fn(a0[i],a1[i]));                    //push each answer into returnArray
    console.log(returnArray);
  }
  return returnArray;                                     //return the answer
}
