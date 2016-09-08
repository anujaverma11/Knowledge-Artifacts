// Input: [3, 5, 1, 4, 7, 6, 2]
// Output:[1, 2, 3, 4, 5, 6, 7]

var joinArrays = function(arr1, arr2){
  var p1 = 0;
  var p2 = 0;
  var result = [];

  if(arr1 === undefined){
    return arr2;
  }
  else if(arr2 === undefined){
    return arr1;
  }

  while(arr1(p1) !== undefined && arr2(p2) !== undefined){
    if(arr1[p1] <= arr1[p2]){
      result.push(arr1[p1])
      p1++;
    } else {
      result.push(arr2[p2])
      p2++;
    }
  }

  return result;
}

var mergeSort = function(){

}
