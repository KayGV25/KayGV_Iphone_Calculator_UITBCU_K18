let strNum  = '';
let calculated = 0;
let temp = 0;
const allow = ['0','1','2','3','4','5','6','7','8','9','.'];
operator = '';

function ShowNumIn(strInNum){
    document.getElementById("InNum").innerHTML = strInNum;
}
function NumberInput(strInNum){
    strNum+=strInNum;
    ShowNumIn(strNum);
}
function C(){
    strNum='';
    ShowNumIn(strNum);
}
function AC(){
    strNum='';
    calculated = 0;
    ShowNumIn(strNum);
    document.getElementById("HaveCalc").innerHTML = ' ';
}
function PosNeg(){
    if(strNum[0]=='-' || strNum[1]=='-') {strNum = strNum.slice(1);}
    else{strNum = '-' + strNum;}
    ShowNumIn(strNum);
}
function Plus(){
    temp = parseFloat(strNum);
    strNum = '';
    document.getElementById("HaveCalc").innerHTML = temp;
    document.getElementById("InNum").innerHTML = strNum;
    operator = '+';
    console.log(operator);
}
function Minus(){
    temp = parseFloat(strNum);
    strNum = '';
    document.getElementById("HaveCalc").innerHTML = temp;
    document.getElementById("InNum").innerHTML = strNum;
    operator = '-';
    console.log(operator);
}
function Multiply(){
    temp = parseFloat(strNum);
    strNum = '';
    document.getElementById("HaveCalc").innerHTML = temp;
    document.getElementById("InNum").innerHTML = strNum;
    operator = 'x';
    console.log(operator);
}
function Divide(){
    temp = parseFloat(strNum);
    strNum = '';
    document.getElementById("HaveCalc").innerHTML = temp;
    document.getElementById("InNum").innerHTML = strNum;
    operator = '/';
    console.log(operator);
}
function Mod(){
    temp = parseFloat(strNum);
    strNum = '';
    document.getElementById("HaveCalc").innerHTML = temp;
    document.getElementById("InNum").innerHTML = strNum;
    operator = '%';
    console.log(operator);
}
function Equal(){
    if(operator == '+'){
        calculated = temp + parseFloat(strNum);
    }
    if(operator == '-'){
        calculated = temp - parseFloat(strNum);
    }
    if(operator == 'x'){
        calculated = temp * parseFloat(strNum);
    }
    if(operator == '/'){
        calculated = temp / parseFloat(strNum);
    }
    if(operator == '%'){
        calculated = temp % parseFloat(strNum);
    }
    temp = calculated;
    console.log(typeof temp)
    strNum = String(temp);
    if(strNum=='NaN'){
        strNum='';
    }
    if(calculated=='NaN'){
        calculated='';
    }
    document.getElementById("HaveCalc").innerHTML = calculated;
    document.getElementById("InNum").innerHTML = strNum;
}

document.addEventListener("keydown",function(key){
    if(key.key == "Backspace"){
        C();
    }
    else if(allow.includes(key.key)){
        strNum += key.key;
        ShowNumIn(strNum);
    }
})