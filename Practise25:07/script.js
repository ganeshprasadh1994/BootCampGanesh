// //Arrray Destructuring
// // let arr=['John','Doe'];
// // let[fname,lname]=arr;
// // console.log(fname);
// // console.log(lname);
// // console.log(arr);

// //Along with Split
// let[fname,lname]="John Doe".split(' ');
// console.log(fname+" "+lname);

// let[a,b,c]="abc";

let student={};
[student.fname,student.lname]="John Doe".split(" ");
console.log(student.fname);
console.log(student.lname);n 