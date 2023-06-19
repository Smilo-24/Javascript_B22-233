//Oggetto con notazione letterale e con proprietà già definite{}


let studente = {
    //dichiaro le proprietà
    nome: "Smilo",
    cognome: "NotSmilo",
    matricola: 123,
    promosso: true,


    //dichiaro un metodo

    superaEsame: function () {
        //console.log('hai superato l\'esame');
        return "hai superato l'esame"
    },

    //forma compatta
    presentati() { //this fa riferimento al contenitore più vicino

        //console.log("Ciao mi chiamo " + this.nome)
        let presentazione ="Ciao mi chiamo"+ this.nome;
        return presentazione;
        //return da una stringa. ora bisogna intercettarlo.. how?!



    },

    assegnaMaterie(mat1,mat2){
        let elencoMaterie=[mat1,mat2];

        if(mat1==""||mat2==""){
            return "non hai assegnato una materia"
        }else{
            return elencoMaterie;
        }
    }


}


//accedo alle prop

console.log(studente.nome)
console.log(studente.cognome)
console.log(studente.matricola)

//studente.presentati()

document.getElementById();


//intercetto la presentazione dello studente
console.log(studente.presentati());

console.log(studente.superaEsame());

console.log(studente.assegnaMaterie("java","angular"))