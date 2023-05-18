/*
Question
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/
//
//Method 1

function solution(str){
   let splitstr =str.split('');
   let restr =[];
  
  for (let i=0; i<splitstr.length;i+=2)
    {
      if(splitstr[i+1])//!! 
      // if (i < splitstr.length - 1)
        {
          restr.push(splitstr[i]+splitstr[i+1]);
        }
      else
        {
          restr.push(splitstr[i]+'_');
        }
    }
  return restr;
}
