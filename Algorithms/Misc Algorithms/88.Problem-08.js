Challenge 1:
Implement the Array method “splice.”  Splice has up to three parameters:
start: Index at which to start change of the array
deleteCount: How many items you want to delete from the array, beginning at the start index.  If no deleteCount is given, then delete all items in the array.  If deleteCount is zero, delete nothing from the array.
itemN: Item you want to add to the array at the start index.  If no itemN is given, then you won’t be adding anything to the array.  (You will be adding itemN to the array even if deleteCount is zero)

Input: start[, deleteCount, itemN]
Output: An array containing the spliced elements of the array

Time Complexity: O(n)
Space Complexity: O(n)

Example:
arr = [1,2,3,4,5];
arr.splice(0,1,10); // [1]
console.log(arr); // [10,2,3,4,5]

arr = [1,2,3,4,5];
arr.splice(1,0,10); // []
console.log(arr); // [1,10,2,3,4,5]
