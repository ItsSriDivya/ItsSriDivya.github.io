function multiples(){
    var i, sum=0, n;
    n=Number(document.getElementById("number").value);
    
        for(i=1; i<n; i++)
        {
            if(i%3 ==0 || i%5 == 0)
                sum=sum+i;
            if(i%3 ==0 && i%5 == 0)
                sum=sum-i;
        }
        document.getElementById("answer").value=sum;
    }