/*************************************************************************
  *    Finding the least available value in the array and swaping it with*
  *    the current position. This will be done one swap at a time.       *
  *                                                                      *
  *    Time Complexity: O(n^2) (Quadratic)                               *
  *    Space Complexity: O(1) (Constant)                                 *
  *************************************************************************/

 /**********************************************************
   *  Problem: Selection Sort                               *
   *                                                        *
   *  Prompt: Given an unsorted array of numbers,           *
   *          return a sorted array using Selection sort.   *
   *                                                        *
   *  Input: An unsorted array                              *
   *  Output: A sorted array                                *
   *                                                        *
   *  Example: input = [8,3,2,10] output = [2,3,8,10]       *
   *                                                        *
   *  What are the time and auxilliary space complexity?    *
   *  What is the best case time complexity?                *
   *                                                        *
   **********************************************************/


var arr = [8,3,2,10];

function selectionSort(arr){


  for(var i=0;i<arr.length;i++){
    var min = arr[i];
    var index = 0;
    for(var j=i;j<arr.length;j++){
      if(arr[j]<min){
          min=arr[j];
          index = j;
      }
    }
    if(index>0){
        var temp = arr[i];
        arr[i]=min;
        arr[index]=temp;
    }

  }
  console.log(arr);

}

selectionSort(arr);