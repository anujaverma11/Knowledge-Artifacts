// Problem 2:
// Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Time Complexity: O(n)
// Space Complexity: N/A

// Eg.
// [1,2,3,4,1] => true
// [1,2,3,4] => false


var arrOfInts = [1,2,3,4];
var duplicateExists = false;

for(var i=0;i<arrOfInts.length;i++){
    for(j=0;j<arrOfInts.length;j++){
        if(i!==j && arrOfInts[i]===arrOfInts[j]){
        duplicateExists = true;
        }
    }
}
console.log(duplicateExists);
