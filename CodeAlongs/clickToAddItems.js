function clearErrors() {
    for(var loopCounter = 0;
       loopCounter < document.forms["numberFun"].elements.length;
        loopCounter++) {
        if(document.forms["numberFun"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
            
            document.forms["numberFun"].elements[loopCounter].parentElement.className = "form-group";
        }
    }      
}
function resetForm() {
    clearErrors();
    document.forms["numberFun"]["num1"].value = "";
    document.forms["numberFun"]["num2"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["numberFun"]["num1"].focus();
}
function validateItems() {
    clearErrors();
    var num1 = document.forms["numberFun"]["num1"].value;
    var num2 = document.forms["numberFun"]["num2"].value;
    if (num1 == "" || isNaN(num1)) {
        alert("Num 1 must be filled in with a number.");
        document.forms["numberFun"]["num1"]
        .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num1"].focus();
        return false;
    }
    if (num2 == "" || isNaN(num2)) {
        alert("Num2 must be filled in with a number.");
        document.forms["numberFun"]["num2"]
        .parentElement.clasName = "form-group has-error"
        document.forms["numberFun"]["num2"].focus();
        return false;  
    }
    document.getElementById("results").style.display = "block";
    document.getElementById("submitButton").innerText = "Recalculate";
    document.getElementById("addResult").innerText = Number(num1) + Number(num2);
    document.getElementById("subtractResult").innerText = num1 - num2;
    document.getElementById("multiplyResult").innerText = num1 * num2;
    document.getElementById("divideResult").innerText = num1 / num2;
    //we are returning false so that the form doesn't submit
    //and so that we can see the results
    return false;
}
//What happens when you leave num1 and num2 empty?
//you get a alert that says "num1 must be filled in with a number"
//What happens if you enter 0 for num2?How does JavaScript handle the divide by zero situation?
//if you enter 0 for num2 you get infinity as the output