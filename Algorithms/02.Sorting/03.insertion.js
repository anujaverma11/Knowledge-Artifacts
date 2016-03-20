 /*************************************************************************
  *    Insertion sort is a simple sorting algorithm that builds the final *
  *     sorted array (or list) one item at a time.                        *
  *                                                                       *
  *    Time Complexity: O(n^2) (Quadratic)                                *
  *    Space Complexity: O(1) (Constant)                                  *
  *************************************************************************/

 /**********************************************************************
  *  Problem: Insertion Sort                                           *
  *                                                                    *
  *  Prompt: Given an unsorted array of numbers,                       *
  *          return a sorted array using insertion sort.               *
  *                                                                    *
  *  Input:  An unsorted array                                         *
  *  Output: A sorted array                                            *
  *                                                                    *
  *  Example: input = [3,9,1,4,7] , output = [1,3,4,7,9]               *
  *                                                                    *
  *  What are the time and auxilliary space complexity?                *
  *                                                                    *
  **********************************************************************/

var insertionSort = function(work){

  var compareAndShift = function(indexToCompare){
    while (indexToCompare > 0 && work[indexToCompare] < work[indexToCompare-1]){
      var temp = work[indexToCompare];
      work[indexToCompare] = work[indexToCompare-1];
      work[indexToCompare-1] = temp;
      indexToCompare--;
    }
  }

  for (var i = 0; i < work.length; i++){
    compareAndShift(i);
  }

  return work;
}

// insertionSort([5, 4, 3, 2, 1, 1, 1]);