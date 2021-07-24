var palarr = ['12321','12433','98094','98789']
var findpal = function(){
    for(var i=0;i<palarr.length;i++)
    {
        let checkpal = '';
        let reversepal = '';
        checkpal = [...palarr];
        reversepal = checkpal.reverse();
        let count = 0;
        for(var i=0;i<checkpal.length;i++)
        {
            if(checkpal[i]==reversepal[i])
            {
                count++;
            }
        }
        if(count==checkpal.length)
        {
            console.log(palarr[i]);
        }
    }
}
findpal();