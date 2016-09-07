/**
* Write a function that acts like "indexOf", in that it
* returns the position of a given string within a
* larger string, and returns -1 if the given string
* is not found.
*
* Two strings are given as arguments. The first
* argument is the smaller string, and the second argument
* is the larger string.
*
* Do not use either "indexOf" or "search" in this function.
*
* Examples:
*
*   substrIndex("Francisco", "San Francisco");
*   => 4
*   substrIndex("abba", "bbbabbaaa")
*   => 3
*   substrIndex("Jose", "San Francisco");
*   => -1
*
* @param {String} needle
* @param {String} haystack
* @return integer
*/
var substrIndex = function(needle, haystack) {
  for (var i=0; i<haystack.Length-needle.Length+1; i++){
            var match = true;
            for (var j=0; j<needle.Length; j++)
            {
                if (haystack[i+j]!==needle[j])
                {
                    match=false;
                    break;
                }
            }
            if (match===true){
                return(i);
            }
        }

        return -1;
    };

substrIndex(needle, haystack);


/**
* Write a function that capitalizes all of the words in
* a sentence.
*
* Examples:
*
*   capitalize("Hello world");
*   => "Hello World"
*
*   capitalize("1st thing");
*   => "1st Thing"
*
*   capitalize("javaScript language");
*   => "JavaScript Language"
*
* @param  {String} sentence
* @return {String}
*/
var capitalize = function(sentence) {

  sentence = sentence.split('');
  for(var i=0;i<sentence.length;i++)
    if(i===0 || sentence[i-1]==' ')
        sentence[i]=sentence[i].toUpperCase();
  sentence=sentence.join('');

  console.log(sentence) ;
};
/**
* Write a function that takes in a sentence as an argument.
* The sentence always contains one comma, which divides
* the sentence into two strings.
*
* The function should return true if the first part of the string
* (the part before the comma) ends with second part of
* the string (the part after the comma).
*
* Examples:
*
*   endsWith("San Francisco,Francisco");
*   => true
*   endsWith("racecar,race");
*   => false
*   endsWith("honey,money");
*   => false
*   endsWith("escargo,go");
*   => true
*   endsWith("Palo Alto,Palo");
*   => false
*   endsWith("Raise.me,me");
*   => true
*
* @param  {String} sentence
* @return {Bool} true or false
*/
var endsWith = function(sentence) {
  // STUB.
  return false;
};
