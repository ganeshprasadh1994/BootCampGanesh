var request1 = new XMLHttpRequest();
request1.open('GET','https://restcountries.eu/rest/v2/all',true);
request1.send();
request1.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);
    let counasia = data.filter((ele) => ele.region=='Asia');
    console.log(counasia);
    
    let counpop = data.filter((ele) => ele.population<200000);
    console.log(counpop);

    let councurrency = data.filter((ele) =>{
        for (var i in ele.currencies){
            if(ele.currencies[i].code==='USD'){
                return true;
            }
        }
    });
    console.log(councurrency);

    let totalpop = data.reduce((acc,cv) => acc+cv.population,0);
    console.log(totalpop);
}