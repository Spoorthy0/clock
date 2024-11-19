

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