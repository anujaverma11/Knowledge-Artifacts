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
    var fibonacci = [0,1];

    function searchFib(index){

        if(index>n){
            return index;
        }
        fibonacci[index] = fibonacci[index-2]+fibonacci[index-1];
        console.log(fibonacci)
        searchFib(index+1)
    }
    searchFib(2);
    return fibonacci[n];
}


console.log(nthFibonacci(10))


// [ 0, 1, 1 ]
// [ 0, 1, 1, 2 ]
// [ 0, 1, 1, 2, 3 ]
// [ 0, 1, 1, 2, 3, 5 ]
// [ 0, 1, 1, 2, 3, 5, 8 ]
// [ 0, 1, 1, 2, 3, 5, 8, 13 ]
// [ 0, 1, 1, 2, 3, 5, 8, 13, 21 ]
// [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
// [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
// 55
