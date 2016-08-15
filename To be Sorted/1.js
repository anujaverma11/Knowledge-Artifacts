
    console.log(input);
    var lengthofString = input[1].length;
    var lengthofPattern = input[2].length;
    var bigString = input[1];
    var pattern=input[2];
    //console.log(pattern);
    //noOfAstrix = pattern.split("*").length-1;
    lengthofwildcard = lengthofPattern - 1;
    var occurance=0;
    var charsCompared = 1;
    for(var j=0;j<lengthofString;j++)
        {
            if(charsCompared<4)
            for(var i=0;i<lengthofPattern;i++)
                {
                    if(bigString[i]===pattern[j]&&bigString[i]==="*")
                       charsCompared++
                    else{
                    charsCompared = 1;
                    i = 0;
                    }
                }
            if(charsCompared===4)
                {
                    occurance++;
                    i=0;
                }

        }
        return occurance;


*********************************************

process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    input = input.split("\n");
    var patternCount = 0;
    var str = input[1];
    var pattern = input[2];
    var lastI = 0;

    if(pattern.length>str.length){
        return patternCount;
    }

    for(var i=0;i<str.length;i++){
        lastI=i;
        for(var j=0;j<pattern.length;j++){
            if(str[lastI]!==pattern[j] && pattern[j] !== '*'){
                break;
            }
            lastI++;
        }
        if(j === pattern.length){
           patternCount++;
        }

    }
    console.log(patternCount);

});
