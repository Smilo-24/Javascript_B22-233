//OBJ BUILT IN

//DOM = Document Object Model

let documento = document;
console.log(documento)

//Stringhe

let stringa1="Ciao come stai? Io ho caldo!!!!"


let numCar=stringa1.length

console.log(numCar)

console.log(stringa1.toUpperCase());

//passo uno start e un end-
//passo un indice di inizio e fine
//taglia dall indice 2 all indice 18
//stringhe sono come gli array, partono da zero
let subStr = stringa1.substring(2,18)
console.log(subStr)

//crea un array
//splitta una stringa in base a un pattern (in questo caso lo spazio)
let split = stringa1.split(" ");
console.log(split)


//riassemblo l'array in stringa
//il .join lo applico solo agli array
let join =split.join("_")
console.log(join)

let colori=["blue","green","red","orange"]

let joinCol=colori.join("pippo")
console.log(joinCol)




//indexOf () restituisce l indice della prima occorrenza
let search1 = stringa1.indexOf("stai")
console.log(search1)

let search2 = stringa1.indexOf("Smiloooo")
console.log(search2)// mi da come risultato -1 (tipo errore, tipo non esiste nel array quindi da un numero tipo -1)


//inclueds vale 
let search3= stringa1.includes("caldo");
console.log(search3)

let search4=stringa1.includes("Smilo");
console.log(search4)//false


/**********************MATH************************/ 

let a=Math.abs(-20);
console.log(a)

let b= Math.sqrt(9)
console.log(b)

let c=math.pow(8,2)
console.log(c)


//random()

let numRand = Math.random()
console.log(numRand)


//round 
//arrotonda all'intero superiore se supera 0.5 
//arrotonda all'intero inferiore se è sotto 0.5

let numRound=Math.round(8.7)
console.log(numRound)

//Ceil arrotonda all intero superiore. anche se fosse .1
let numCeil= Math.ceil(5.33) //questo diventa 6

let numFloor= Math.floor(5.33)//questo diventa 5


console.log(numCeil)
console.log(numFloor)



///////////////////////DATE////////////////////
//DATE -> MOLTO INUTILI NELLA PROGRAMMAZIONE POICHé OGNI LINGUAGGIO HA LE SUE DATE
//IN JS SI USANO LIBRERIE: LA PIà FAMOSA è MOMENT JS


let oggi= new Date()
console.log(oggi)
console.log(oggi.getHours());
console.log(oggi.getFullYear)
console.log(oggi.getDate())
console.log(oggi.getMonth())



let mioNome="Smilo"
//posso concatenare i metodi
let nomeInv= mioNome.split("").reverse().join("")
console.log(nomeInv)