var currentValue=0;
var displayResult=false;
var calc=document.getElementById("Calc");
function clr(){
    calc.value=" ";
}
function display(value){
    calc.value +=value;
    
}
function calculation(){
     var result=eval(calc.value);
   
    calc.value=result;
}

