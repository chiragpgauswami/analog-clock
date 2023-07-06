const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    let hour = hh+(mm/12);

    document.querySelector('#hr').style.transform = `rotateZ(${hour}deg)`;
    document.querySelector('#mn').style.transform = `rotateZ(${mm}deg)`;
    document.querySelector('#sc').style.transform = `rotateZ(${ss}deg)`;
})