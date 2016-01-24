// Problem 3:
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Time Complexity: NA (but should try for O(n))
// Space Complexity: O(1)

// Example:
// "A man, a plan, a canal: Panama" is a palindrome.
// "race a car" is not a palindrome.
// var string = "A man, a plan, a canal: Panama";

var string = "race a car";

string = string.replace(/\W/g,'').toUpperCase();
string = string.split("");
var midString = parseInt(string.length/2);
var palindrome = true;
for(var i=0;i<=midString;i++){
    if(string[i]!=string[(string.length-1)-i]){
        palindrome = false;
        //console.log(string[i]+i+"**"+((string.length-1)-i+string[(string.length-1)-i]));

    }
}
if (palindrome===true){
    console.log("Its a Palindrome!!!");
}