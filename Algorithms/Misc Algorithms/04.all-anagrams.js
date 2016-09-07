/**
 * Problem 2: All Anagrams
 *
 * Given a single input string, write a function that produces
 * all possible anagrams of a string and outputs them as an array.
 * Be sure that there are no duplicates in your return array.
 *
 * What is the time complexity of your solution?
 *
 * ex: allAnagrams('abc');
 *     => ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
 *
 **/

 str = "b";
console.log(str.slice(0, 2) + str.slice(2 + 1));
console.log("=====");

        var allAnagrams = function(string) {

          var uniqueOutput = {};

          (function anagram(ana, str) {
            if (str === '') {
              uniqueOutput[ana] = 1;
            }
            //recursive call for the length of the anagram.
            for (var i = 0; i < str.length; i++) {

              anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
              console.log("i= "+i+" ana= "+ana+"    str= "+str);
            }
          })('', string);
          console.log(uniqueOutput)
          return Object.keys(uniqueOutput);
        };

        var anagrams = allAnagrams('abc');
        console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]


