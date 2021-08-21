function getCountryName(){
    var select =document.getElementById("list");
    var newres =document.createElement("option");
    newres.text=document.getElementById("text");
    select.add(newres);
}