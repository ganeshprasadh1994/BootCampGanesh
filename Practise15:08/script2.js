//Create Element
var para=document.createElement("p");

// Take a new Text
var newText=document.createTextNode("This is my String")
para.appendChild(newText);

var parent = document.getElementById("div1");
var child = document.getElementById("p1");

//Replacing Para with Child
parent.replaceChild(para,child);