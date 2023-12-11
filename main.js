var displayResult=false;
var currentDisplay="0";
var calc=document.getElementById("Calc");
function clr(){
    displayResult=false;
    currentDisplay="0"
    updated()
}
function display(value){
    if(displayResult||currentDisplay==="0"){
        currentDisplay=value;
    }else{
        currentDisplay+=value
    }
    displayResult=false
    updated()
    
}
 function updated() {
    calc.value=currentDisplay;
}
function calculation(){
    var result=eval(currentDisplay);
    calc.value=result;
    displayResult=true;
}

