var arr=[1,5,4,3,6,5,2,4]
var duplicatenum=function(){
    for(var i=0;i<arr.length;i++)
    {
        for(var j=0;j<i;j++)
        {
            if(a[j]==a[i])
            {
                for(var k=i;k<arr.length;k++)
                {
                    arr[k]=arr[k+1];
                }
            }
        }
    }
    console.log(arr);
}
duplicatenum();