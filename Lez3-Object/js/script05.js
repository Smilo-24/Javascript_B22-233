function Studente(nome, cognome, matricola, corso) {

    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
    this.corso = corso;

    this.info = function () {
        let info = this.nome + "" + this.cognome + "- Mat: " + this.matricola + "- Corso" + this.corso;


        // let info=`${this.nome}${this.cognome} - Mat: ${this.matricola}-Corso ${this.corso}`
        return info;

    }
}

//in registra studente prendo il value di tutto
function registraStudente() {

    //recupero i value del form
    let nomeStud = document.getElementById("nomeStud").value
    let cognomeStud = document.getElementById("cognomeStud").value
    let matricolaStud = document.getElementById("matricolaStud").value
    let corso = document.getElementById("corso").value;

    if (nomeStud = "" || cognomeStud == "" || matricolaStud == "" || corso == -1) {
        demo.innerHTML = " Hai compilato in modo sbagliato, controlla bene! "
    } else {


        //creo lo studente passando i valori recuperati
        let mioStudente = new Studente(nomeStud, cognomeStud, matricolaStud, corso)

        console.log(mioStudente)
        classe.push(mioStudente)
        stampa();
        pulisci();
    }
}

function pulisci() {
    //pulisco i campi del form
    // document.getElementById("nomeStud").value=""
    // document.getElementById("cognomeStud").value=""
    // document.getElementById("matricolaStud").value=""
    // document.getElementById("corso").value=""

    //metodo reset si applica sui form per pulire tutti i campi in un colpo solo
    formReg.reset()
}

function stampa() {
    classe.forEach(Studente => {
        demo.innerHTML += "<li>" + Studente.info() + "</li>";
    });
}

let classe = []

let demo = document.getElementById("demo")

let btn = document.getElementById("btn")
//è di tipo jtml input
let formReg = document.getElementById("formReg")


btn.addEventListener("click", registraStudente);