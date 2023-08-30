const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minsEl=document.getElementById('mins');
const secsEl=document.getElementById('secs');
const newYears="1 jan 2024";
function countdown(){
    const newYearsDate=new Date(newYears);
    const currDate=new Date();
    const totatSeconds=(newYearsDate-currDate)/1000;
    const days=Math.floor(totatSeconds/3600/24);
    const hours=Math.floor(totatSeconds/3600)%24;
    const mins=Math.floor(totatSeconds/60)%60;
    const secs=Math.floor(totatSeconds)%60;
    daysEl.innerHTML=days;
    hoursEl.innerHTML=format(hours);
    minsEl.innerHTML=format(mins);
    secsEl.innerHTML=format(secs);
}
function format(time){
return  time<10?`0${time}`:time;
}


countdown();
setInterval(countdown,1000);