"use strict";
let hour = document.querySelector("#hours");
let minute = document.querySelector("#minutes");
let second = document.querySelector("#seconds");
let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");

setInterval(() => {
    let date = new Date();
    //.....................ANALOG CLOCK.............
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrotate = 30 * hr + min / 2;
    let mrotate = 6 * min + sec / 10;
    let srotate = 6 * sec;

    hour.style.transform = `rotate(${hrotate}deg)`;
    minute.style.transform = `rotate(${mrotate}deg)`;
    second.style.transform = `rotate(${srotate}deg)`;
    //...............DIGITAL CLOCK................. 

    box1.innerHTML = `${date.getHours()} hours`;
    box2.innerHTML = `${date.getMinutes()} minutes`;
    box3.innerHTML = `${date.getSeconds()} seconds`;
    box4.innerHTML = `Date : ${date.toDateString()} `;
}, 1000);

let date = new Date();

console.log(date)



