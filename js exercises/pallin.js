function pallin()
{

var l = 0, str;
str=document.getElementById("myText").value;
var h = str.length-1;

// Keep comparing characters while they are same
while (h > l)
{
    if (str[l++] != str[h--])
    {
        pal= 0;
    }
    else
        pal=1;
}
if(pal==0)
    document.write("false");
else
    document.write("true");
}
