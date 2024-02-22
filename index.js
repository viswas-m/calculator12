let firstNum="";
let secondNum="";
let operator="";

function appendNumber(n)
{
    if(operator === ""){
        firstNum+=n;
        document.getElementById('result').value=firstNum;
    }
    else{
        
        secondNum+=n;
        document.getElementById('result').value=secondNum;
    }

}

function setOperator(x){
operator=x;

}

function clearScreen(){
firstNum="";
secondNum="";
operator='';
document.getElementById('result').value='';

}
function calculate(){
   let result;
   switch(operator){
    case '+':
        result=parseInt(firstNum)+parseInt(secondNum);
        break;
    case '-':
        result=parseInt(firstNum)-parseInt(secondNum);
        break;
    case '*':
        result=parseInt(firstNum)*parseInt(secondNum);
        break;
    case '/':
        result=parseInt(firstNum)/parseInt(secondNum);
        break;
   }
   document.getElementById('result').value=result;
}