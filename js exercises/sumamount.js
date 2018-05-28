function sumamount()
{
    var n =document.getElementById("array").value
    var i, sum=0;
    var x= JSON.parse(n);
    for(i in x)
    {
       sum=sum+x[i];
    
    }
    document.write(sum);
}