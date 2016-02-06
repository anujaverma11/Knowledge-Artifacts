 /**********************************************************************
  *                          Homework II                               *
  *                                                                    *
  *  Prompt: Given a set S, return the power set P(S), which is        *
  *          a set of all subsets of S.                                *
  *                                                                    *
  *  Input:  A String                                                  *
  *  Output: An Array with the power set of the input string           *
  *                                                                    *
  *  Example: S = "abc", P(S) = ['', 'a', 'b','c','ab','ac','bc','abc']*                                                               *
  *                                                                    *
  *  Note: There should not be any duplicates in the power set         *
  *        ('ab' and 'ba' are considered the same), and it will always *
  *        begin with an empty string ('')                             *
  *                                                                    *
  **********************************************************************/

var powerSetRec = function(str){
  var results = [];

  var traverse = function(build, depth){
    if (depth === str.length){
      results.push(build);
      return;
    } else {
      traverse(build, depth+1);
      traverse(build+str[depth], depth+1);
    }

  }

  traverse("", 0);
  return results;
}



var powerSetIterative = function(input){
  var counter = 0;
  var work = [""];

  while (counter < input.length){
    var temp = [];

    for (var i = 0; i < work.length; i++){
      temp.push(work[i]);
      temp.push(work[i] + input[counter]);
    }
    work = temp;
    counter++;
  }

  return work;
}

console.time('ITER: ')
powerSetIterative('agrkbjawgrbhkagwrb')
console.timeEnd('ITER: ');

console.time('REC: ')
powerSetRec('agrkbjawgrbhkagwrb')
console.timeEnd('REC: ');