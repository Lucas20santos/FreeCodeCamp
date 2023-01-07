var counterVal = parseInt(document.getElementById("count-el").innerHTML);
   
function incrementar() 
{
     counterVal++
    if(counterVal > 10)
    {
        counterVal = 0
    }
    document.getElementById("count-el").innerHTML = counterVal.toString()
}

function decremento() {
    counterVal--;
    if(counterVal < 0)
    {
        counterVal = 10;
    }
    document.getElementById("count-el").innerHTML = counterVal;
}
  