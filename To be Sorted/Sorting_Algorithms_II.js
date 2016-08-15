 /**********************************************************************
  *                          Homework VI                               *
  *                                                                    *
  *  Problem: Quicksort                                                *
  *                                                                    *
  *  Prompt: Given an unsorted array of numbers,                       *
  *          return a sorted array using Quicksort sort.               *
  *                                                                    *
  *  Input:  An unsorted array                                         *
  *  Output: A sorted array                                            *
  *                                                                    *
  *  Example: input = [3,9,1,4,7] , output = [1,3,4,7,9]               *
  *                                                                    *
  *  What are the time and auxilliary space complexity?                *
  *                                                                    *
  **********************************************************************/


  function quickSort(input){
 if (input.length<1)
    {
        return input;
    }
    var pivotIndex=parseInt(input.length/2);
    var pivot = input[pivotIndex];
    var before = [];
    var after = [];

    for(var i=0;i<input.length;i++)
        {
            if (i!==pivotIndex)
            {
                if(input[i]<pivot)
                    {before.push(input[i]);}
                else
                    {after.push(input[i]);}
            }
        }

        return quickSort(before)+pivot+quickSort(after);
}

input = [9,8,0,4,7,2,8,0,9,2,0,3];
quickSort(input);




  /**********************************************************
   *             Highly Recommended Extra Credit            *
   *                                                        *
   *  Problem: Bubble Sort                                  *
   *                                                        *
   *  Prompt: Given an unsorted array of numbers,           *
   *          return a sorted array using bubble sort.      *
   *                                                        *
   *  Input: An unsorted array                              *
   *  Output: A sorted array                                *
   *                                                        *
   *  Example: input = [8,3,2,10] output = [2,3,8,10]       *
   *                                                        *
   *  What are the time and auxilliary space complexity?    *
   *                                                        *
   **********************************************************/

function bubbleSort(input){
    // console.log(input);
    var swtch = false;
    for(var i=0;i<input.length-1;i++)
        {
            if (input[i]>input[i+1])
            {
               temp = input[i+1];
               input[i+1] = input[i];
               input[i] = temp;
               swtch = true;
            }
        }
        if (swtch===true)
            {
                return bubbleSort(input);
            }
        else
            {
                return input;
            }
}

input = [9,8,0,4,7,2,8,0,9,2,0,3];
bubbleSort(input);
