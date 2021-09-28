const finalDate = new Date("Dec 31, 2021 23:59:59").getTime();
let x = setInterval(function () {

    let now = new Date().getTime();
    let difference = finalDate - now;
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("countdown_clock").innerHTML = `<div>Днів:<br/> ${days}</div>` + `<div>Годин:<br/> ${hours}</div>` + `<div>Хвилин:<br/> ${minutes}</div>` + `<div>Секунд:<br/> ${seconds}</div>`;

    if (difference < 0) {
        clearInterval(x);
        document.getElementById("countdown_clock").innerHTML = "Школа стартувала";
    }
}, 1000);