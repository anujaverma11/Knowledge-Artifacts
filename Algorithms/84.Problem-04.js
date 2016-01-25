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