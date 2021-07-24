var numarr=[12,45,11,97,54,29]
var primenum = function(){
    for(var i=0;i<numarr.length;i++)
    {
        var count = 0;
        for(var j=1;j<=numarr[i];j++)
        {
            if(numarr[i]%2==0)
            {
                count++;
            }
        }
        if(count==2)
        {
            console.log(numarr[i]);
        }
    }
}
primenum();