// Write a function that takes two strings as arguments and returns a string containing only the characters found in both strings. Write 2 versions – one that is O(n^2) and one that is O(n).

// Time Complexity (first attempt): O(n^2)
// Space Complexity: O(1)

// Time Complexity (second attempt): O(n)
// Space Complexity: O(1)

// Eg:
// input: “abcde”, “cdf”
// Output: “cd”


var string1='abcde';
string1=string1.split("");

var string2='cdf';
string2=string2.split("");
var common = [];
for(var i=0;i<string1.length;i++){
    for(var j=0;j<string2.length;j++){
        if(string1[i]===string2[j]){
            common.push(string1[i]);

        }
    }
}
common = common.join('');
console.log(common);