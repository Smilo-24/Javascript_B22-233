//document è tutto l html e css.
//recupero i tag p di html
//id e variabile hanno lo stesso nome e non danno confusione a js
let nomeStudente = document.getElementById("nomeStudente");
let cognomeStudente = document.getElementById('cognomeStudente');
let etaStudente = document.getElementById('etaStudente');
let presenzaStudente = document.getElementById('presenzaStudente');
let avviso = document.getElementById('avviso');

//creo le variabili
//il prompt è un po' come lo scanner

// let nomeS = "Simone";
let nomeS = prompt("Inserisci il tuo nome");
// let cognomeS ="Capuano";
let cognomeS =prompt("Inserisci il tuo cognome");
// let etaS=25;
let etaS=prompt("Inserisci la tua età"); 
//esercizio:creare la variabile che mi dica se sono presente o no
//quindi: creo id in html, creo il get element by id creo la variabile presenzaS
//aggiungo all if la variabile presenzaS che viene salvata.
let presenzaS= prompt("Presente?");

//"stampo" il valore delle variabili nei tag recuperati
//textContent modifica il testo di un elemento tramite la manipolazione del suo id
// nomeStudente.textContent= "Nome: " + nomeS;
// cognomeStudente.textContent= "Cognome: " + cognomeS;
// etaStudente.textContent= "Età: " + etaS;


/**
 *
 * if(condizione){
 * esegui se true
 * }else{
 * esegui se false
 * }
 */


if(etaS < 18){
    // alert("Non puoi accedere alla pagina");
    avviso.textContent = "Non puoi iscriverti come studente."
}else{
    //"stampo" il valore delle variabili nei tag recuperati
    nomeStudente.textContent= "Nome: " + nomeS;
    cognomeStudente.textContent= "Cognome: " + cognomeS;
    etaStudente.textContent= "Età: " + etaS;
    if ( presenzaS == "true"){
        presenzaStudente.setAttribute("class","txtGreen");
    }else{
        presenzaStudente.setAttribute("class","txtRed")
    }
    presenzaStudente.textContent = "Presente: " +presenzaS;

}


