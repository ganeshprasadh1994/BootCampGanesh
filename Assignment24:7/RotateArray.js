var arr=[1,2,3,4,5,6];
var nooftimes = 3;
var arrlength = arr.length;
var rotatearray=function(){
    for(var i=0;i<nooftimes;i++)
    {
        var temp = arr[0];
        for(var j=1;j<arrlength;j++)
        {
            arr[i-1]=a[i];
        }
        arr[arrlength-1]=temp;
        console.log(arr);
    }
}
rotatearray();