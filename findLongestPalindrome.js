function findLongestPalindrome(longString){
  longestSubString = '';
  for(var i=0;i<longString.length;i++){
    for(var j=longString.length-1;j>=i;j--){

      if(isPalindrome(longString,i,j) === true){

        subString = longString.substr(i, j-i+1);
        if(longestSubString.length < subString.length){
          longestSubString = subString
        }

      }

    }
  }
  return longestSubString;

}

function isPalindrome(longString,i,j){
  for (;i<=j;i++,j--){
    if(longString[i]!=longString[j]){
      return false
    }
  }
  return true
}


// tabajffa
// 01234567
// 76543210

var longString = "tabajffz" //"aba"
var longString1 = "tabajffa" //"aba"
findLongestPalindrome(longString);
