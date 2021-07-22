const hoursHandEl = document.querySelector(".hour-hand");
const secondsHandEl = document.querySelector(".seconds-hand")
const minuteHandEl = document.querySelector(".minute-hand");

// After loading page, hours, minutes and seconds will be set accordingly
let now = new Date();
hoursHandEl.style.transform = `rotate(${timeToDegrees(now.getHours(), "hours")}deg)`;
secondsHandEl.style.transform = `rotate(${timeToDegrees(now.getSeconds())}deg)`; 
minuteHandEl.style.transform = `rotate(${timeToDegrees(now.getMinutes())}deg)`;

function setDate () {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    secondsHandEl.style.transform = `rotate(${timeToDegrees(seconds)}deg)`;
    if (seconds == 0) {
        minuteHandEl.style.transform = `rotate(${timeToDegrees(minutes)}deg)`;
    }
    if (minutes == 0) {
        hoursHandEl.style.transform = `rotate(${timeToDegrees(hours, "hours")}deg)`;
    }
}
function timeToDegrees (time, type) {
    switch (type) {
        case "hours":
            if (time > 12 ) {
                return ((time - 12) / 12) * 360 + 90;
            } else {
                return (time / 12) * 360 + 90;
            }
        default: 
            return (time / 60) * 360 + 90;
    }
}
setInterval(setDate, 1000);

