//Rest Countires API to print Country Name and Lat,Long
var request1 = new XMLHttpRequest();
request1.open('GET','https://restcountries.eu/rest/v2/all',true);
request1.send();
request1.onload=function(){
    var data=JSON.parse(this.response);
    //console.log(data);
    for(var i=0;i<data.length;i++)
    {
        try
        {
            var name=data[i].name;
            var lang=data[i].latlng;
            //console.log(name+" "+lang);
            if(lang.length===0) throw new Error("Longitude Not Found!");
            weatherdata(name,...lang);
        }
        catch(e){
            console.log("Invalid Coordinates of a country:"+ name + " - " + e.message);
        }
    }
}
//Function for Printing Current Temperature
function weatherdata(name,lat,long){
    var request2 = new XMLHttpRequest();
    var url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=0d127ade8af147ab922b01d6c5ae7da8';
    request2.open('GET',url,true);
    request2.send();
    request2.onload=function(){
        var res=JSON.parse(this.response);
        console.log(`${name} : ${res.main.temp}`);
    }

}

//ab922b01d6c5ae7api.openweathermap.org/data/2.5/weather?lat=35&lon=255&appid=0d127ade8af147ab922b01d6c5ae7da8;
//api.openweathermap.org/data/2.5/find?lat=lat&lon=long&appid=d127ade8af147ab922b01d6c5ae7da8;