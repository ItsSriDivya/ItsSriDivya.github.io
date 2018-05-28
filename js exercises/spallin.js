var arr=[];
var rev=" ";
function add(words)
{
    arr.push(words);
    document.getElementById("input").value="";
}
function spallin()
{

    for(var i=0;i<arr.length;i++)
        {
            if(arr[i].split("").reverse().join("")==arr[i])
                {
                    document.write(arr[i]+ "\t");
                }
        }
        
}
