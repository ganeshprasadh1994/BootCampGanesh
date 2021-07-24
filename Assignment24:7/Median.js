var arr1=[1,3,5,7];
var arr2=[2,4,6,8];
var medianarr=function(){
    var combarr= arr1 + arr2;
    var temp = 0;
    var arrlen=combarr.length;
    for(var i=0;i<arrlen;i++)
    {
        for (var j=i+1;j<arrlen;j++)
        {
            if(combarr[i]>combarr[j])
            {
                temp = combarr[i];
                combarr[i] = combarr[j];
                combarr[j] = temp;
            }
        }
    }
    var medfind = arrlen % 2;
    if(medfind != 0)
    {
        console.log("Median: "+combarr[arrlen/2]);
    }
    else
    {
        var mediannum = (combarr[arrlen/2] + combarr[(arrlen/2)-1] / 2);
        console.log("Median: "+mediannum);
    }
    
}
medianarr();