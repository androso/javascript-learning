const second = 1000, //1000ms in a s
    minute = second * 60, 
    hour = minute * 60,
    day = hour * 24;

let endDate = new Date("August 10, 2021, 9:13:00");

let interval = setInterval( () => {
    let startDate = new Date();
    if (endDate < startDate) {
        clearInterval(interval);
        alert('invalid end date');
        return; 
    }
    let leftTime = endDate - startDate;
    
    let lDays = Math.floor(leftTime / day);
    if (lDays < 10) {
        document.querySelector(".timer__day").innerHTML = "0" + lDays;    
    } else {
        document.querySelector(".timer__day").textContent = lDays;
    }
    
    let lHours = Math.floor(leftTime / hour) % 24;
    if (lHours < 10) {
        document.querySelector(".timer__hour").textContent = "0" + Math.floor(leftTime / hour) % 24;    
    } else {
        document.querySelector(".timer__hour").textContent = lHours;
    }
    
    let lMins = Math.floor(leftTime / minute) % 60;
    if (lMins < 10) {
        document.querySelector(".timer__min").textContent = "0" + Math.floor(leftTime / minute) % 60;
    } else {
        document.querySelector(".timer__min").textContent = lMins;
    }

    let lSec = Math.floor(leftTime / second) % 60;
    if (lSec < 10) {
        document.querySelector(".timer__sec").textContent = "0" + Math.floor(leftTime / second) % 60;
    } else {
        document.querySelector(".timer__sec").textContent = lSec;
    }
    // When the timer reaches 0
    if (leftTime <= 1000) {        
        clearInterval(interval);
        return;
    }
}, 0)