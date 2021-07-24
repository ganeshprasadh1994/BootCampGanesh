var numarray =[2,4,3,5,8,6,1,9]
var oddnum = function(){
    for(var i=0;i<numarray.length;i++)
    {
        if(numarray[i]%2==0)
        {
            console.log(numarray[i]);
        }
    }
}
oddnum();