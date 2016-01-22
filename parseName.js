    function parseName(recordName,oldName){
        var newName = {
            first: null,
            middle: null,
            last: null
        }
        if(!oldName) {
            if (recordName.indexOf(",")!==-1){
                recordName=name.split(",");
                if(recordName[1].indexOf(" ")!==-1){
                    newName["first"] = oldName[1];
                    newName["last"] = oldName[0];
                }
                else{
                    var temp = recordName[1].split(" ");
                    newName["first"] = temp[0];
                    newName["middle"] = temp[1];
                    newName["last"] = oldName[0];

                }

            return newName;
        }
        else (name.indexOf(".")!==-1)
    }

    input = input.split("\n");
    console.log(input);
    var recordLog={};

    for(var i=1;i<input.length;i++){
        var currRecord=input[i].split(":");
        if(!recordLog[currRecord[1]]){
            var pName = parseName(currRecord[0],undefined);
            recordLog[currRecord[1]] = pName;
        }
        else {
            recordLog[currRecord[1]] = parseName(currRecord[0],recordLog[currRecord[1]]);
        }
    }

    for(var key in recordLog){
        console.log(recordLog[value] + ":" + key);
    }

});