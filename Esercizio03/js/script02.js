let oraEsatta = document.getElementById("oraEsatta");

//quando fa il minuto toglie lo zero. usiamo l operatore ternario
setInterval(() => {

    let oraNow = new Date();
//operatorio ternaio ha lo scopo di dare una risposta booleana

//è minore di 10? se si metti zero se no lascia vuoto
    let ora = (oraNow.getHours()<10?"0":"")+ oraNow.getHours();
    let min = (oraNow.getMinutes()<10?"0":"")+oraNow.getHours();
    let sec = (oraNow.getSeconds()<10?"0":"")+oraNow.getHours();

    oraEsatta.innerHTML = ora + ":" + min + ":" + sec;

}, 1000);