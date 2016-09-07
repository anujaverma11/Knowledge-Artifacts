// CHALLENGE DESCRIPTION:

// Write a program which determines the sum of the first 1000 prime numbers.

// INPUT SAMPLE:

// There is no input for this program.

// OUTPUT SAMPLE:

// Print to stdout the sum of the first 1000 prime numbers.

// 3682913

var sumOfPrime = 0;
var counter = 1;
var number = 2;
while (counter <= 1000)
    {
        if (isPrime(number))
          {
              sumOfPrime += number;
              counter++;

          }
        number++;
    }
    console.log(sumOfPrime);


function isPrime(value) {
    for(var index = 2; index < value; index++) {
        if(value % index === 0) {
            return false;
        }
    }
    return true;
}
