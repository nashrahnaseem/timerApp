const start =document.getElementById("start");
const stop =document.getElementById("stop");
const reset =document.getElementById("reset");
const number =document.getElementById("number");
const result =document.getElementById("result");
var timerVar;
var liveNumber;
var temp;
var flag=0;
start.onclick=()=>{
  if(flag ==0){
    liveNumber=number.value;
  timerVar=setInterval(timer, 1000);
  }
  else{
    timerVar=setInterval(timer, 1000);
  }
  
}

reset.onclick=()=>{
  clearInterval(timerVar)
  result.innerHTML="";
}

function timer(){
  temp = liveNumber--;
  result.innerHTML=temp;
  if(temp == 0){
    clearInterval(timerVar)
  }
}

stop.onclick=()=>{
  clearInterval(timerVar)
  flag++;
}