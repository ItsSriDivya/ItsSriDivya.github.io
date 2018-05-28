function fizzbuzz(){
    var i, n;
    n=Number(document.getElementById("number").value);
    
        for(i=1; i<=n; i++)
        {
            if(i%3 ==0)
                document.write("\tfizz");
            else if(i%5 == 0)
                document.write("\tbuzz");
            else
                document.write("\t"+ i);
        }
     
    }