// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million
// (4000000), find the sum of the even-valued terms.

var number1 = 1;
var number2nd = 2;
var febSeq = 0;
var sum = 2;
while (febSeq<4000000)
    {
      febSeq = number1+number2nd;
      number1 = number2nd;
      number2nd = febSeq;
      console.log(febSeq);
      if (febSeq%2 === 0 && febSeq<=4000000)
        {sum+=febSeq}
      }
  console.log(sum)

