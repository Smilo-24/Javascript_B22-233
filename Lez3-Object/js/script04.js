//notazione con funzione costruttore

//maiuscole costruttori, minuscole funzioni
function Studente(nome, cognome, corso, presenza, matricola) {

    this.nome = nome;
    this.cognome = cognome;
    this.corso = corso;
    this.presenza = presenza;
    this.matricola = matricola;

    //dichiarazione del metodo toString 
    //alt+96= ` -> in questo modo la stringa la concateno col dollaro
    this.toString = function () {
        // let descrizione="nome e cognome "+this.nome+""+this.cognome;

        //stesso modo di scrivere.

        let descrizione = `Nome e Cognome : ${this.nome} ${this.cognome} <br>
        Corso Frequentato: ${this.corso}<br>
        Matricola: ${this.matricola}`;

        return descrizione;
    }

}


function segnaAssenza(studente) {
    !studente.presenza
}


let studente1 = new Studente("Piero", "Pelu", "Tecn Programm", true, 1);

console.log(studente1.toString());


let demo = document.getElementById("demo")

demo.innerHTML = studente1.toString();



let classe = [
    new Studente("Anna", "Bianchi", "Tecn Prog", true, 1),
    new Studente("Mario", "Bros", "Tecn Prog", true, 2),
    new Studente("Paolo", "Bonoles", "Tecn Prog", true, 3),
    new Studente("Gennaro", "Gattuso", "Tecn Prog", true, 4),
    new Studente("Maria", "Selafuma", "Tecn Prog", true, 5),
    new Studente("Orso", "Bianco", "Tecn Prog", true, 6),
]


classe.forEach(studente => {
    demo.innerHTML += `<div class='dimDiv'> ${studente.toString()}
   </div>`

});