// function solution(A){
//     var P;
//     var Q;
//     var R;
//     pqrArray=[];

//     for(var i=0;i<=A.length;i++){
//         P = i
//         for(var j=i+1;i<=A.length;i++){
//             if(A[j-1]>A[j]){
//                 Q = j;
//             }
//             else if(A[j-1]<=A[j]){

//             }
//         }
//     }

// }



function solution(A) {
    var depth = [];
    for(var i=0;i<A.length;i++){
        var P = i;
        var mid = P+1;
            for(var j=P+2;j<=A.length;j++){
                var Q = j;
                if(A[P]<A[mid] && A[mid]>A[Q]){
                    console.log(A[P]+" "+A[mid]+" "+A[Q]);
                    depth.push(Math.min(A[P]-A[Q],A[mid]-A[Q]));

                }
            }
    }

    console.log(depth);
    }

// function solution(input) {
//     var depth = 0;
//     var P = 0;
//     var Q = -1;
//     var R = -1;

//     for (var i = 1; i < input.length; i++) {
//         console.log(input[P]+" "+Q+" "+R);
//         if (Q < 0 && input[i] >= input[i-1]) {
//             Q = i-1;
//         }

//         if ((Q >= 0 && R < 0) && (input[i] <= input[i-1] || i + 1 === input.length)) {
//             if (input[i] <= input[i-1]) {
//                 R = i - 1;
//             } else {
//                 R = i;
//             }
//             depth = Math.max(depth, Math.min(input[P]-input[Q], input[R]-input[Q]));
//             P = i - 1;
//             Q = R = -1;

//         }
//     }

//     if (depth === 0) {
//       depth = -1;
//     }

//     return depth;
// };

A=[0,1,3,-2,0,1,0,-3,2,3];
solution(A);