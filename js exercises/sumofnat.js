function natural()
{           
var i, sum, n;
sum=0;
n=Number(document.getElementById("number").value);

       for(i=0; i<n; i++)
       {
           sum= sum + i;
       }
       document.getElementById("answer").value=sum;
}