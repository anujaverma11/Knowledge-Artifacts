/**
  *                       Problem I: Find Max Value
  *
  *  Prompt: Given a list of integers, find the max value contained in the list.
  *
  *  Input: A list (array)
  *  Ouput: An integer (max value)
  *
  *  Example:
  *
  *    Input: [1,9,3,4,5]
  *    Output: 9
  **/

/*ITERATIVE*/

var arr = [1,9,3,4,5];
var max = 0;

for(var i=0;i<arr.length;i++){
  console.log(arr[i]);
  if (max < arr[i]){

    max = arr[i];
  }
}

console.log(max);

/*RECURSIVE*/

var arr = [1,9,3,4,5];


function maximum (arr){
  var maxim = 0;

  function traverse(max, count){
    if (count === arr.length){
      maxim = max;
      return;
    }

    if (max < arr[count]){
      max=arr[count];
    }

    count++;

    traverse(max, count)
  }

  traverse(0,0);

  return maxim;

}



maximum(arr);