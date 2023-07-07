let studente ={
    nome:"Piero",
    cognome:"Pelu",
    matricola:2047
}



let btn= document.querySelector("#btn")

//trasformo oggetto in JSON
function caricaStud(){

//per poter salvare in local o session storage
//devo trasformarlo in JSON(oggetto in String)

let studJSON=JSON.stringify(studente);

//il setItem(chiave:string,valore:string)
localStorage.setItem("Studente",studJSON)

}
btn.addEventListener("click",caricaStud)


let btnOut=document.querySelector("#btnOut")

function logOut(){
    localStorage.removeItem("Studente")
}

btnOut.addEventListener("click",logOut)