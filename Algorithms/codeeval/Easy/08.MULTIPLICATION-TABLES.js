/*
Print out the grade school multiplication table upto 12*12.

INPUT SAMPLE:

There is no input for this program.

OUTPUT SAMPLE:

Print out the table in a matrix like fashion, each number formatted to a width of 4 (The numbers are right-aligned and strip out leading/trailing spaces on each line). The first 3 line will look like:

1   2   3   4   5   6   7   8   9  10  11  12
2   4   6   8  10  12  14  16  18  20  22  24
3   6   9  12  15  18  21  24  27  30  33  36
*/


var width = 4;
for (i=1; i<=12; i++)
    {newarray = [];
        for (j=1;j<=12;j++)
            {
                newarray.push((new Array(width).join(' ') + i*j).substr(-width));

            }
     console.log(newarray.join(' '));
    }

/*How can I create a Zerofilled value using JavaScript?

 zeroFilled = ('000' + x).substr(-3)
For arbitrary width:

 zeroFilled = (new Array(width).join('0') + x).substr(-width)
As per comments, this seems more accurate:

lpad = function(s, width, char) {
    return (s.length >= width) ? s : (new Array(width).join(char) + s).slice(-width);
}
*/