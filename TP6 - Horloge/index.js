const debug = 0;

function clock() {
    // Variables temps
    const date = new Date();
    const heure = (date.getHours() % 12);
    const minute = date.getMinutes();
    const seconde = date.getSeconds();

    // Variables temps en degres
    const heureDeg = heure * 30;
    const minuteDeg = minute * 6;
    const secondeDeg = seconde * 6;

    // Variables qui met a jour la rotation des aiguilles
    const heureEl = document.getElementById('heure').style.transform = `rotate(${heureDeg}deg)`;
    const minuteEl = document.getElementById('minute').style.transform = `rotate(${minuteDeg}deg)`;
    const secondeEl = document.getElementById('seconde').style.transform = `rotate(${secondeDeg}deg)`;
    
    // Debug console
    if (debug) {
        console.log(date);
        console.log(heure);
        console.log(minute);
        console.log(seconde);
        console.log(heureDeg);
        console.log(minuteDeg);
        console.log(secondeDeg)
    };

};

// Intervalle fonction clock sur 1s
setInterval(clock, 1000);