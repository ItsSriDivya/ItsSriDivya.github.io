function fact()
{
  var i, fact, n;
  fact=1;
  n= Number(document.getElementById("number").value);
  if(n<0 || n==NULL)
    document.write("error");
  for(i = 1; i <= n; i++)
  {
    fact = fact * i;
  }
  document.getElementById("answer").value=fact;
}