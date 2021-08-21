// var res=(a,b)=>{
//     var res=20;
//     return a*b;
// };
// console.log(res(12,13));

// var arr=[{
//     name:"john",
//     marks: 60
// },{
//     name:"alice",
//     marks:70
// }];
// var arr2=arr.map((ele)=>{
//     ele.marks=ele.marks +10;
//     return ele;
// }
// );
// console.log(arr2);

// var arr=[1,2,3,4];
// var res=arr.filter((ele)=>ele%2==0);
// console.log(res);

// var student=[{
//     name:"alex",
//     marks:65
// },{
//     name:"bob",
//     marks:70
// },{
//     name:"mary",
//     marks:75
// },{
//     name:"John Doe",
//     marks:85
// }];
// var res=student.filter((ele)=>ele.marks>65).map((ele)=>ele.name);
// console.log(res);

var arr=[1,2,3,4];
let sum=arr.reduce((accumulator,ele)=>accumulator+ele);
console.log(sum);
