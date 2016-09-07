/*
Challenge 1:
Reverse a String recursively.

Time Complexity: O(n)
Space Complexity: O(n)
*/

var string = "anuja";

string = string.split("");
var revstring=[];

for(var i=0;i<string.length;i++){
    revstring.unshift(string[i]);
}
console.log(revstring.join(""));

/**
 * Problem 1: Reverse a String
 *
 * Given a single input string, write a function that reverses
 * the string recursively.
 *
 * What is the time and auxiliary space complexity of your solution?
 *
 * ex: strReverse('abc');
 *     => 'cba'
 **/

function reverse (str) {
    if (str === "") {
        return "";
    } else {

        return reverse(str.substr(1)) + str.charAt(0);
    }
}

reverse('anuja');