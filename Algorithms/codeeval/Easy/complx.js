/*********************************************************************
 *                     Pair Programming I                            *
 *                                                                   *
 *  Instructions: List the Time and Space complexity of each         *
 *                of the following functions in the space provided   *
 *                                                                   *
 *********************************************************************/

/**
* Problem 1:
*  Time Complexity: O(1)
*  Auxiliary Space Complexity: O(1)
**/

function isThereCat(object) {

  while(object['cat']) {
    console.log("There is cat!");
    delete object['cat'];
  }
  console.log("There is no cat!");
};


/**
* Problem 2:
*  Time Complexity:
*  Auxiliary Space Complexity:
**/

function powerOfThrees(int) {
  var result = [];          //T O(1) S O(1)
  var count = 1;            //T O(1) S O(1)
  var temp = 1;             //T O(1) S O(1)

  while(count <= 3) {       //T O(1)
    temp *= int;                  //T O(1) S O(1)
    result.push(temp);            //T O(1) S O(1)
    count++;                      //T O(1) S O(1)
  }

  return result; //T O(1)
};

/**
* Problem 3:
*  Time Complexity: O(m*n)
*  Auxiliary Space Complexity: O(m*n) because it is creating that number of elements.
**/

function intersectionPoints(array1, array2) {
  var result = []; //T O(1) //S O(1)
  var points;      //T O(1) //S O(1)

  for (var i = 0; i < array1.length; i++) {  //T O(m) //S O(n)
    for (var j = 0; j < array2.length; j++) { //T O(n) //S O(n)
      if (array1[i] === array2[j]) {          //T O(n)
        points = [i, j];                            //T O(1) //S O(1)
        result.push(points);                        //T O(n) //S O(n)
        points = [];                                //T O(1) //S O(1)
      }
    }
  }

  return result;
};

/**
* Problem 4:
*  Time Complexity: T O(n^2)
*  Auxiliary Space Complexity: S O(1)
**/

function findDuplicate(collection) {
  var len = collection.length; //T O(1)
  var currItem;                //T O(1)

  for (var i = 0; i < len; i++) {   //T O(n)
    currItem = collection[i];

    for (var j = 0; j < len; j++) {  //T O(n)
      if (j !== i) {
        if (currItem === collection[j]) {
          return true;
        }
      }
    }
  }
  return false;
};




/**
* Problem 5:
*  Time Complexity:
*  Auxiliary Space Complexity:
**/

function nthFibonacci (n) {
  var result = [0,1]; //T O(1)

  for(var i = 1; i < n; i++) { //T O(n)
    result[i+1] = result[i] + result[i-1]; //T O(n)
  }

  return result[n];
};


/************************
 *     Extra Credit     *
 ************************/

/**
 * Extra Credit 1:
 *
 * Problem: Refactor findDuplicates to find all repeating elements in O(n) time complexity
 *          What is the auxiliary space complexity of your solution?
 *
 *          Auxiliary Space Complexity:
 **/


/**
 * Extra Credit 2:
 *  Time Complexity:
 *  Auxiliary Space Complexity:
 **/

function nthFibonacci(n){
  var result;

  function searchFib(index){
    if(index < 2){
      return index;
    } else {
      return searchFib(index-2) + searchFib(index-1);
    }
  }

  result = searchFib(n);
  return result;
};