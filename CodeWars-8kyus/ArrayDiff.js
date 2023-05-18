/*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/
/*
//Method 1 - Using Splice()
function arrayDiff(a, b) {
 if(b.length==0 || a.length==0)
    return a;
  for(let i = 0 ; i < a.length ; i++){
    for(let j = 0 ; j < b.length ; j++){
      if( a[i] == b[j] ){
        a.splice(i,1);
        i--;
      }
    }
  }
  return a;
}
*/
  
/*
//Method 2 - Using indexOf()
function arrayDiff(a, b) //a, b be the array of each inserted
{
    let  returnArray=[];//array that save the return answer
  
  for (var i=0;i<a.length;i++){
      if(b.indexOf(a[i])<0)// if the b array didn’t include a[I] element, push a[I] into the returnArray.
{
         returnArray.push(a[i]);
         }
    }
  return returnArray;
}
*/

arrayDiff([1,2], [1]);
arrayDiff([-2,-18,9,-1,8,9,5,1,4],[-2,-18,9,-1,8,9,5]);
arrayDiff([-2,-15,1,-12,9,-11,6,16,8,16,0,-15,-1,5,-14],[-2,-15,1,-12,9,-11,6,16,8])
