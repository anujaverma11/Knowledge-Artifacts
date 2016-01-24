/*
Challenge 2:
Implement a function that calculates the nth Fibonacci number iteratively and then recursively.

Iterative:
Time Complexity: O(n)
Space Complexity: O(1)

Recursive:
Time Complexity: NA
Space Complexity: NA
*/

function nthFibonacci(n){
    var result;

    function searchFib(index){
        console.log(index);
        if(index<2){
            return index;
        }
        else {

            return searchFib(index-2) + searchFib(index-1);
        }
    }
    result = searchFib(n);
    return result;

}

nthFibonacci(5)