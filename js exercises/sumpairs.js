function sumofpairs() {
     var arr = document.getElementById("array").value.split(" ").map(function(item)
     {
         return parseInt(item,10);
     });
     var  i, j, input;
     input = parseInt(document.getElementById("number").value)
     
     for (i = 0; i < arr.length; i++) {
         
        for (j = i+1; j < arr.length; j++) {
            
            if (arr[i]+arr[j] == input)
                 document.write(arr[i] + "\t" + arr[j] + "<br>");
         }

    }
    
}