//modalità di scrivere in javascript
//remembeR: i tipi esistono ma non sono dichiarati

let mioNome="Dario"; //string

var mioCognome="Mennillo";


let corso ='Javascript'

let annoCorrente=2023; //number

let presenza = true; //boolean

console.log("ciao " +mioNome+" " + mioCognome + ". Corso "+corso)


//prompt fa una domanda e stocka una variabile+ risposta
//il super object di js è il window : tutto il browser

let nomeUser= prompt('come ti chiami?');

console.log("ciao utente "+nomeUser)



//scrivo all'interno di saluto in recap.html
//Recuper la porzione di html

let saluto = document.getElementById("saluto")


//scrivo all'interno di saluto

saluto.textContent="benvenuto " + nomeUser;


