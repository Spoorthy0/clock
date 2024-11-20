
/*
function updateClock(){
    const date=new Date();
    console.log(date)
    let hours=date.getHours();
    const meri= hours>=12 ? "PM" : "AM";
    hours=hours % 12 ||12
    hours=date.getHours().toString().padStart(2,0);
    let minutes=date.getMinutes().toString().padStart(2,0);
    let sec=date.getSeconds().toString().padStart(2,0);
    const Time=`${hours}:${minutes}:${sec} ${meri}`;
    console.log(Time)
    document.getElementById("clock").textContent=Time
}
updateClock();
setInterval(updateClock)
*/

const clock=document.getElementById("clock")
let timer=null;
let startTime=0;
let elapsedTime=0;
let isRunning=false;


function Start(){
    if(!isRunning){
        startTime=Date.now()-elapsedTime;
        timer=setInterval(update,10);
        isRunning=true;
    }
    

}

function Stop(){
    if(isRunning){
    clearInterval(timer);
    elapsedTime=Date.now()-startTime;
    isRunning=false;
    }

}

function Reset(){
    clearInterval(timer);
    startTime=0;
    elapsedTime=0;
    isRunning=false;
    clock.textContent="00:00:00:00"

}

function update(){
    const currentTime=Date.now()
    elapsedTime=currentTime-startTime;

    let hours=Math.floor(elapsedTime / (1000 * 60 * 60))
                //here to convert ms we are using 1000*60sec*60min
                let minutes=Math.floor(elapsedTime / (1000 * 60)%60)
                let seconds=Math.floor(elapsedTime / 1000 % 60)
                let milliseconds=Math.floor(elapsedTime % 1000 /10)

    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    milliseconds=String(milliseconds).padStart(2,"0");

clock.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`
}
