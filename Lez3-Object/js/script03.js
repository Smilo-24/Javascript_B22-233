let studente = {
    //dichiaro le proprietà
    nome: "Smilo",
    cognome: "NotSmilo",
    matricola: 123,
    promosso: true,
    corso: "", //non è definito. creo un metodo per definirlo


    //dichiaro un metodo

    superaEsame: function () {
        //console.log('hai superato l\'esame');
        return "hai superato l'esame"
    },

    //forma compatta
    presentati() { //this fa riferimento al contenitore più vicino

        //console.log("Ciao mi chiamo " + this.nome)
        let presentazione = "Ciao mi chiamo" + this.nome;
        return presentazione;
        //return da una stringa. ora bisogna intercettarlo.. how?!
    },
    //creo un metodo per definire quel corso
    assegnaCorso(corso) {
        this.corso = corso; //persistenza momentanea quindi il valore viene trattenuto finché la nostra pagina è attiva

        return "Hai appena assegnato " + corso + " allo studente " + this.nome;
    }


}

/*
//non ho un corso assegnato
console.log(studente.corso)
//ora lo assegno e gli passo il corso 
console.log(studente.assegnaCorso("Tecniche di programmazione"))
//ora il corso è assegnato
console.log(studente.corso)
*/

//get element by id sono fermi, costanti da riempire
let nome = document.getElementById("nome")
let cognome = document.getElementById("cognome")
let corso = document.getElementById("corso")
const BTN=document.getElementById("btn")//recupero i pezzi di html con const solitamente

//dato che questo fa schifo gli faccio una function
/*
nome.innerHTML="nome: "+ studente.nome;
cognome.innerHTML="cognome: "+studente.cognome;
corso.innerHTML="corso: " +studente.corso;
*/


function stampaInfo() {
    nome.innerHTML = "nome: " + studente.nome;
    cognome.innerHTML = "cognome: " + studente.cognome;

    if (studente.corso == "") {
        corso.innerHTML = "corso: non ancora assegnato"
    } else {
        corso.innerHTML = "corso: " + studente.corso;
    }

}

function assegnaCorso(){
    let nomeCorso = document.getElementById("nomeCorso").value;
    //assegno nome corso allo studente
    studente.assegnaCorso(nomeCorso)
    stampaInfo();
}

BTN.addEventListener("click",assegnaCorso);
stampaInfo();