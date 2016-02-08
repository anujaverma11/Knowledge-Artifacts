arr=[6,3,9,2,7,1];

function bubbleSort(arr){
    var swap = false;
    for(var i=0;i<=arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            temp = arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
            swap = true;
        }
        console.log(i);
        if (swap===true && i===arr.length-1){
        i = -1;
        swap = false;
        }
    }


    console.log(arr);
}

bubbleSort(arr);