//qua posso scrivere e richiamare gli scritp e si guardano e si vedono e sanno il contenuto che hanno
//bisogna imparare a blindare le cose. in java bisogna incapsularle. bisogna imparare a proteggersi.

console.log(somma4+somma3);


//boolean
let presenza = false;

//char --> String 
let genere ='m';


//ora che ho finito di cazzeggiare voglio manipolare il codice
//recupoero il tag p id="numStud" per poter scriverci dentro
//buona prassi per recupare un pezzo html è usare una costante
let numStud =document.getElementById("numStud"); //<p id="numStud"></p>

console.log(numStud);

//let partecipanti=16;

let partecipanti= prompt ("Quanti studenti sono presenti oggi?");
//scrivo dentro numStud. tecnicamente mnodifico la proprietà testuale di numStud
numStud.textContent = "Num Studenti Presenti: "+partecipanti;


