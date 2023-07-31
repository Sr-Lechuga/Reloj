"use strict";

const addZeros = n => {
    return n.toString().length < 2 ? "0".concat(n) : n;
}
const refreshTime = () =>{
    const time = new Date();
    let hours = addZeros(time.getHours());
    let minutes = addZeros(time.getMinutes());
    let seconds = addZeros(time.getSeconds());

    document.querySelector(".hours").textContent = hours;
    document.querySelector(".minutes").textContent = minutes;
    document.querySelector(".seconds").textContent = seconds;
}

refreshTime()
/* Deprecated */
setInterval(refreshTime,1000);

