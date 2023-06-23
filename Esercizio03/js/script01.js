// Funzione costruttore

function Item(todo, data) {

    // proprietà 
    this.todo = todo;
    this.data = data;
}

listaTodos = []


//non mi serve il .value

let todoItem = document.getElementById("todoItem");
let data = document.getElementById("data");
let btnAgg = document.getElementById("btnAgg");
let listaItem = document.getElementById("listaItem")
//.value lo metto nella funzione perché devo dare tempo all utente di scrivere qualcosa, clickare sul pulsante e poi si vola


function aggiungi() {
    //Dario dice di richiamta let todoItem e let data direttamente nella funciont. cosi da non dichiarare troppe variabili da dover richiamare.
    let todo = todoItem.value;
    let dataTodo = data.value;

    //funzione chiamata sul pulsante e gli passo il value
    //let miaTodo = new Item(todo, dataTodo);

    listaTodos.push(miaTodo); //ho aggiunto la mia piccola cosa da fare


    let dataCorretta = new Date(data)
    let giorno = dataCorretta.getDay()
    let mese = dataCorretta.getMonth()
    let anno = dataCorretta.getFullYear();

    let dataDaStampare = giorno + "/" + mese + "/" + anno;

    let miaTodo = new Item(todoItem, dataDaStampare);
    listaItem.push(miaTodo);

}


//funzione legata al pulsante
function stampa() {
    listaItem.innerHTML = "";
    //aggiungi(); //richiamo il metodo

    listaTodos.forEach(
        /**
         * 
         * @param {Item} item 
         */

        (item) => {
            listaItem.innerHTML += "<li>" + item.todo + "-" + item.data + "</li>"
        });

}

function pulisci() {
    document.getElementById("todoItem").value = ""
    document.getElementById("data").value = ""
}

function controlla() {
    //check di todoitem e data
    document.getElementById("todoItem").value;
    document.getElementById("data").value;

    if (todoItem == "" || data == "") {
        demo.innerHTML = "Guarda che c'è qualcosa che non va"
    } else {
        aggiungi();
    }
}




btnAgg.addEventListener("click", function () {
    if (controlla()) {
        stampa()
        aggiungi()
        pulisci();
    }

})








//fare la lista delle cose da fare e aggiungere la data vicina.