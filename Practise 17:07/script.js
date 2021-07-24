const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

function elem (userInput)
{
    return userInput[0];
}
function elem (userInput,length)
{
    if(length>0)
    {
        var arr=[];
        if(length<userInput.length)
        {
            for(var i=0;i<length;i++)
            {
                arr[i]=userInput[i];
            }
        }
        else{
            for(var i=0;i<userInput.length;i++)
            {
                arr[i]=userInput[i]);
            }
        }
        return arr;
    }
    else{
        return [];
    }
}

api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10&appid=d127ade8af147ab922b01d6c5ae7da8;