// STRING PERMUTATIONS
// SPONSORING COMPANY: Houghton Mifflin Harcourt

// CHALLENGE DESCRIPTION:

// Write a program which prints all the permutations of a string in alphabetical order. We consider that digits < upper case letters < lower case letters. The sorting should be performed in ascending order.

// INPUT SAMPLE:

// Your program should accept a file as its first argument. The file contains input strings, one per line.

// For example:

// hat
// abc
// Zu6
// OUTPUT SAMPLE:

// Print to stdout the permutations of the string separated by comma, in alphabetical order.

// For example:
// aht,ath,hat,hta,tah,tha
// abc,acb,bac,bca,cab,cba
// 6Zu,6uZ,Z6u,Zu6,u6Z,uZ6

var allAnagrams = function(string) {
    var uniqueOutput = {};
    (function anagram(ana, str) {
      if (str === '') {
        uniqueOutput[ana] = 1;
      }
      for (var i = 0; i < str.length; i++) {
        anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
        }
    })('', string);
      return Object.keys(uniqueOutput);
};



var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var anagrams = allAnagrams(line);
        anagrams.sort();
        console.log(anagrams.toString());
    }
});