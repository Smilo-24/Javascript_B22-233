
//funzioni parametriche cioè funzioni con firma piena
//funzione con parametri definiti


function calcolaArea(altezza, larghezza) {
    let area = altezza * larghezza;

    return area;
}


function calcolaVolume(profondita) {
    
    //sto richiamando una funzione passando dei parametri 
    let area = calcolaArea(10, 5) // 50

    let volume = area * profondita

    return volume;

}


let volume=calcolaVolume(6) // 50 * 6 = 300


console.log(volume)