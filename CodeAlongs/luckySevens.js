var initialBet=0;
var currentCash;
var totalRolls = 0;
var maxAmount = 0;
var maxDiceRoll = 0;

function validateItems(){
    
    var startBet = parseInt(document.getElementById("bet").value);
    
    
    currentCash = startBet;
    initialBet = startBet;
    
if (startBet == "" || isNaN(startBet) || startBet<=0)   
{
    alert ("Starting bet must be a number and not negative");  
}
    
    
    
    while(currentCash !==0){
        rollDice();
    }
    
      if (currentCash == 0){
            alert("Let's see how you did!");
          
            document.getElementById("results").style.display = "block";
            document.getElementById("startBet").innerHTML = initialBet;
            document.getElementById("totalRolls").innerHTML = totalRolls;
            document.getElementById("maxAmount").innerHTML = maxAmount;
 document.getElementById("rollCountAtHighest").innerHTML = maxDiceRoll;
              
        }
    
    
}
//rolling the dice


function rollDice(){
    var dice1 = Math.floor(Math.random() * 6) +1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    var sum = dice1 + dice2;

    
//    console.log(dice1 + "+" + dice2 + "=" + sum);
    
if (currentCash > maxAmount){
            maxAmount = currentCash;
            maxDiceRoll = totalRolls;
        }
    
    totalRolls ++;
    
    
    
//    console.log("total rolls:" + totalRolls);
    
    if (sum == 7){
        currentCash += 4;
//        console.log("plus:" + currentCash)
    }else {
        currentCash -= 1;   
//        console.log("minus:" + currentCash)
    }
    
    

    
}


//if (Number(startBet) == "" || Number(startBet) <= 0){
//    alert("Starting bet must be more than 0");
//}