/*
Challenge 2:
Given an array of size n, find the majority element. The majority element is the element that appears more than n/2 times.

You may assume that the array is non-empty and the majority element always exist in the array.

Time Complexity: O(n)
Space Complexity: O(n)

Example:
[1,2,2] => 2
[1,2,3,3,3] => 3
*/

//var array=["Audi", "Audi", "Jaguar", "Outback", "Outback", "Civic", "Civic", "Civic", "Audi","Civic"];
var array=[1,2,3,3,3];
var arrayToList = {};


for(var i=0;i<array.length;i++){
    var value = 1;
    if (arrayToList[array[i]]===undefined){
    arrayToList[array[i]] = value;
    }
    else{
        arrayToList[array[i]]++;
    }
}
console.log(arrayToList);
var max = 0;
for(prop in arrayToList){
  if(arrayToList[prop]>max){
      max = arrayToList[prop];
      majority=prop;
  }
}
console.log(majority);