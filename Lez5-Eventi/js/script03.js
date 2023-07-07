let formLogin = document.querySelector("#formLogin")


function login(){
    //la funzione di login registrerà l'utente in local o session storage

    let username=document.querySelector("#username").value;

    if (username.trim()=""){
        event.defaultPrevented();//metodo di event
        console.log(event);
    }
}


formLogin.addEventListener("submit",login)