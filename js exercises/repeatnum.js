function repeatnum()
{
    var arr = document.getElementById("array").value.split(" ").map(function(item)
    {
        return parseInt(item,10);
    });
    var i,j ;
    
        for(i=0;i<arr.length-1;i++)
            {
                for(j=i+1;j<arr.length;j++)
                    {
                        if(arr[i]==arr[j])
                            document.write(arr[j] + "\t");
                    }
                    
            }
    
    
}