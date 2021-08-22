document.body.style.fontFamily="Times New Roman', Times, serif";

var adharno=document.getElementById('adhar');
adharno.innerHTML = '123456789';
var pname=document.getElementById('name');
pname.innerHTML = 'Ram';
var perage=document.getElementById('age');
perage.innerHTML = '24';
var peremail=document.getElementById('email');
peremail.innerHTML = 'ram@ramco.com';
var pcity=document.getElementById('city');
pcity.innerHTML = 'Chennai';
var pcompany=document.getElementById('company');
pcompany.innerHTML = 'RAMCO';
var pcontact=document.getElementById('contact');
pcontact.innerHTML = '9002090020';

var element=document.getElementsByTagName('li');
for (let i=0;i<element.length;i++)
{
    element[i].className="listitem";
}



var pimg=document.createElement('img');
pimg.src="https://www.ramco.com/hubfs/ramco-logo-og-1.jpg";
document.body.appendChild(pimg);

