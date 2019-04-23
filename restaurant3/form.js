function validateItems(){
    var x = document.forms["contactUs"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
    }
    var y = document.forms["contactUs"]["email"].value;
    if (y == "") {
        alert("You must provide an email address");
    }
    var z = document.forms["contactUs"]["phone"].value;
    if (z == ""){
        alert ("You must provide a phone number");
    }
    console.log("im inside validate items");
    
    return false;  
}

