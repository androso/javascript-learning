// // Get the elements we're gonna use (days, hours, minutes, seconds)
// I think we'll have a setInterval here that calls the following function every second?
// We get the current time on client's computer
// We get the end time
// We substract the start time from the end time using milliseconds unit
// those milliseconds we then convert into seconds, minutes, hours and days
// We'll need then to limit those units: seconds and minutes ceiled to 60
    // hours ceiled to 24
// We append those numbers to timer__unit

const timerDay = document.querySelector(".timer__day");
const timerHour = document.querySelector(".timer__hour");
const timerMin = document.querySelector(".timer__min");
const timerSec = document.querySelector(".timer__sec");


function getTimeDifference (currentTime, endTime) {
    let leftTime = endTime - currentTime;

    let seconds = Math.floor(leftTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    // seconds = seconds - (minutes * 60);
    // minutes = minutes - (hours * 60);
    // hours = hours - (days * 24);
    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
    return {
        leftDays: days,
        leftHours: hours,
        leftMin: minutes,
        leftSec: seconds
    }
}

let interval = setInterval(()=> {
    let currentTime = new Date();
    let endTime = new Date("August 3, 2021, 19:55:00");        
    let timeDiffObject = getTimeDifference(currentTime, endTime);
    
    timerDay.textContent = timeDiffObject.leftDays
    timerHour.textContent = timeDiffObject.leftHours;
    timerMin.textContent = timeDiffObject.leftMin;
    timerSec.textContent = timeDiffObject.leftSec;
}, 1000)    
