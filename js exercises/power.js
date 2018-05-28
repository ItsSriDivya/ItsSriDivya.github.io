function power()
{
  var i, n, result;
  n= parseInt(document.getElementById("number").value);
  for(i=0; Math.pow(2,i)<=n;i++)
    {
      result=i;
    }
    document.getElementById("answer").value=result;
}