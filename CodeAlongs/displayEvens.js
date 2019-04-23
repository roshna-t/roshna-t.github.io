

function compute(){
    
 var startNum = document.forms["displayEvens"]["startNum"].value;
var endNum = document.forms["displayEvens"]["endNum"].value;    
    
    
document.getElementById("startingNumber").innerHTML = startNum;
 document.getElementById("endingNumber").innerHTML = endNum;  
    
    
    return false;
}


function validateItems(){
    
    
    var startNum = document.forms["displayEvens"]["startNum"].value;
    var endNum = document.forms["displayEvens"]["endNum"].value;
    var step = document.forms["displayEvens"]["step"].value; 
    
        
if (startNum == "" || isNaN(startNum)){
    alert("Starting number must be filled with a number.");
    document.forms["displayEvens"]["startNum"].focus();
    return false;
}
if (endNum == "" || isNaN(endNum)){
    alert("Ending number must be filled with a number.");
    document.forms["displayEvens"]["endNum"].focus();
    return false;
}
if (step == "" || Number(step)<=0){
  alert("Step must be a positive number.");      
}
    if (endNum == "" || Number(endNum)<= Number(startNum)){
        alert("Ending number must be less than or equal to the starting number");
    }
     
    //Computation 
    
  var text = ""
    
    for ( var i= Number(startNum); i <=Number(endNum); i= i+ Number(step)){
        if (i % 2 == 0){
            //document.write(i + ', ');
            text += i + " ";
        }
    }
 /*   
i++
i = i + 1
*/
    document.getElementById("startingNumber").innerText = text;
return false;

}