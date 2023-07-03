let demo = document.querySelector("#demo")

let btnSaluta = document.querySelector("#btnSaluta"); //salvo in una variabile un oggetto html che ha quell id e su questo pulsante monterò l ascoltatore di eventi

btnSaluta.addEventListener("click", saluta)
//non esiste al momento

function saluta() {
    demo.innerHTML = "Ciao, ANIMALEEEEE"

}


//al click faccio partire la funzione saluta
//IMPORTANTE: per richiamare la funzi9one saluta al click sul pulsante non devo utilizzare parentesi rotonde.
btnSaluta.addEventListener("click", saluta)

///////////////////////////////////////////////////////////////////////
//Quando la funzione ha dei parametri devo utilizzare la funzione anonima all'interno dell addEventListener
let btnSalutaStudente = document.querySelector("#btnSalutaStudente")

//parametro nomeStudente che lo richiamo con innethtml
function SalutaStudente(nomeStudente) {
    demo.innerHTML = "Ciao, " + nomeStudente;
}

btnSalutaStudente.addEventListener("click", function () {
    SalutaStudente("Piero Pelù")
});


////////////////////////////////////////////////////////////////////////

let btnSalutaQualcuno = document.querySelector("#btnSalutaQualcuno")
//richiamo il btn senza avere la funzione anonima
btnSalutaQualcuno.addEventListener("click", function () {
    let nomeQualcuno = "Nessuno";
    demo.innerHTML = "Ciao, " + nomeQualcuno;
});



///////////////////////////SALUTA USER Vers.1////////////////////////////

// let btnSalutaUser=document.querySelector("#btnSalutaUser");

// function salutaUser(username){
//     demo.innerHTML = "Ciao " +username;
// }


// btnSalutaUser.addEventListener("click", function(){
//     let username=document.querySelector("#nomeUser").value;

//     salutaUser(username);
// })



///////////////////////////SALUTA USER Vers.2////////////////////////////



// let btnSalutaUser=document.querySelector("#btnSalutaUser");

// btnSalutaUser.addEventListener("click",function(){

// let username=document.querySelector("#momeUser").value;

// if(username==""){
//     demo.innerHTML="Inserisci il tuo nome per farti salutare"
// }else{
//     demo.innerHTML="ciao, " + username;
// }



// })



///////////////////////////SALUTA USER Vers.3////////////////////////////


let btnSalutaUser = document.querySelector("#btnSalutaUser");

//recupero campo 
let username = document.querySelector("#momeUser")//input


function salutaUser(username){
    demo.innerHTML="Ciao, " + username;
}


btnSalutaUser.addEventListener("click",function(){
    let nomeUser=username.value;
    salutaUser(nomeUser)
})
//keyup è quando premi invio
username.addEventListener("keyup",function(){
    if(event.key=="Enter"){
        let nomeUser = username.value;
        salutaUser(nomeUser)
    }
})