//ARRAY

//any è un suggerimento di typescript (quando passo su studenti mi da questa def.)
let studenti = [
    "Anna",
    "Gennaro",
    "Luca"
    //10,
    //10 è un number e non da un errore poiché è misto. 
    //false
]
//oppure
//let studentii = new Array 

//lista dei voti

let voti = [

    30,
    25,
    16

];

//RISOLVERE IL PROBLEMA DALLA RIGA 24 ALLA RIGA 50

//RECUPER I TAG HTML
let listaStud = document.getElementById("listaStud")
let numPartecipanti = document.getElementById("numPartecipanti");



for (let i = 0; i < studenti.length; i++) {
//Come mai passo voti [i] ? E' per ciclare l'array?
    // if (voti[i] > 18) {
    //     //br per andare a capo oppure mb-3 un margin bottom che ci aiuta a separare i nomi
    //     // listaStud.innerHTML +="<li class='mb-3'>"+studenti[i]+"</li><br>"

    //     listaStud.innerHTML += "<li>" + studenti[i] +" " + voti[i] + "</li>"
    // } else {       
    //     listaStud.innerHTML += "<li class='txtRosso'>" +"Bocciatissimo" + "</li>"
    // }


    // creo variabile votazione
let votazione;
    if(voti[i]<18){
        votazione="esame non superato"
    }else{
        votazione=voti[i]
    }
    listaStud.innerHTML += "<li>" + studenti[i] +" " + votazione + "</li>"
}


//////////////////////////////////////////////////////////////////////////////////////////////////
/*
console.log(studenti)
console.log(studenti[1])
*/

//sostituisco un nome, riassegno una variabile

//studenti[0] = "Luisa";

//alcuni metodi

studenti.sort(); //ordinamento
studenti.reverse(); //per riordinare al contrario
//studenti.find()//trovo nel array la posizione 
//studenti.filter();
studenti.pop() //elimino l ultimo elemento 
studenti.push("Davide") //inserisco un nuovo elemento

let numStud = studenti.length

console.log(studenti);
console.log("sono presenti " + numStud + " studenti")


//recupero il tag ul e stampo i nomi degli studenti uno alla volta


//let listaStud = document.getElementById("listaStud")

//ora devo riempire la lista senza toccare l'html

//la proprietà innerHTML serve a inserire qualcosa nei TAG.

/*
listaStud.innerHTML="<li>"+studenti[0]+"</li>";
                 
//per non scrivere 50 volte la struttura

listaStud.innerHTML +="<li>" +studenti[1] +"</li>";
listaStud.innerHTML +="<li>" +studenti[2] +"</li>";
listaStud.innerHTML +="<li>" +studenti[3] +"</li>";
listaStud.innerHTML +="<li>" +studenti[4] +"</li>";
listaStud.innerHTML +="<li>" +studenti[5] +"</li>";
listaStud.innerHTML +="<li>" +studenti[6] +"</li>";
*/


//ciclo for classico

for (let i = 0; i < studenti.length; i++) {
    //br per andare a capo oppure mb-3 un margin bottom che ci aiuta a separare i nomi

    // listaStud.innerHTML +="<li class='mb-3'>"+studenti[i]+"</li><br>"
    listaStud.innerHTML += "<li class='txtBlue'>" + studenti[i] + "</li>"

}
//foreach si tara sugli array direttamente
/*
studenti.forEach(
    (studente) =>{
        listaStud.innerHTML +="<li class='txtBlue'>"+studenti[i]+"</li>"
    }
)
*/

/*
let numPartecipanti = document.getElementById("numPartecipanti");
numPartecipanti.innerHTML = numStud;
*/

let media =  somma / studenti.length

mediaVoti.innerHTML="Media Voti esame: " +media.toFixed(2);//toFixed decide quante cifre sono importanti la virgola e gli passi un parametro, 2 -8 etc 


