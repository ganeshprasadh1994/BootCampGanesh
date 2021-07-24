var numarray=[3,5,2,9,7,1]
var sumarr = function()
{
    var sumarray=0;
    for(var i=0;i<numarray.length;i++)
    {
        sumarray += numarray[i];
    }
    console.log(sumarray);
}
sumarr();