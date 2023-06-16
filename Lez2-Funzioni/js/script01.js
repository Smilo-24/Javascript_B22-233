//dichiaro la funzione 

function saluta(){
    //voglio scrivere in console
    console.log("Ciao MARIOOOOO!!!!")
}


//richiamo la funzione
saluta();

//il richiamo della funzione è totalmente indipendente dalla dichiarazione
saluta2();

function saluta2(){
console.log("Ciao a tutti")
}


function presentati(){
    let nomeUser="Piero";
    console.log("il mio nome utente è"+nomeUser)
}

function salutaTutti(){
    let nomeUser="Andonio"
    console.log("Ciao a tutti da "+nomeUser)
}

//Variabile globale
var nomeDocente="pasquale"

presentati();
salutaTutti();
console.log(nomeUser)


let demo=document.getElementById("demo")

function spedisciInPausa(){
    let studenti ="La classe intera"
    console.log(studenti+" va in pausa!!!!!!")
 demo.innerHTML=studenti + " va in pausa"
}

///////////////////



function getArea(){
    let altezza = 13;
    let larghezza= 5;

    let area= altezza *  larghezza;

    return area;
}
//parzialmente intercettata
console.log(getArea());

//salvo il valore di restituzione della funzione in una variabile
let area=getArea();
console.log(area)

//posso ichiamare una funzione dall'interno di un altra funzione ancora
function getVolume(){

    let aea = getArea();
    let profondita = 8;

    let volume= area * profondita;
    return volume;
}

let volume=getVolume();
console.log("il volume è "+volume)