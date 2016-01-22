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
