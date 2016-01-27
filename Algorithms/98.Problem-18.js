/**********************************************************************
  *  Problem 1: Max Consecutive Sum                                    *
  *                                                                    *
  *  Prompt: Given an array of integers find the sum of consecutive    *
  *          values in the array that produces the maximum value.      *
  *                                                                    *
  *  Input:  Unsorted array of positive and negative integers          *
  *  Output: Integer (max consecutive sum)                             *
  *                                                                    *
  *  Time Complexity: O(n)                                             *
  *  Auxiliary Space Complexity: O(1)                                  *
  *                                                                    *
  *  Example: input = [6, -1, 3, 5, -10]                               *
  *           output = 13 (6 + -1 + 3 + 5 = 13)                        *
  *                                                                    *
  **********************************************************************/


input =[6,-1,3,5,-10];
var maxSum = input[0];
var resultMax = input[0];


for (var i=1;i<input.length;i++){
    console.log(input[i]);
    maxSum = Math.max(input[i],maxSum+input[i]);
    resultMax = Math.max(maxSum,resultMax);
}

console.log(resultMax);