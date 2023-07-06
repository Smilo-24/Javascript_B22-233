//Fetch
// Noi diamo solo vita alle richieste e si divino in Get e Post principalmente. L'insieme di queste righe da vita al CRUD sfruttando le righe di richiesta
// get ricevo Dati,  Post li invio
// Head passo delle informazioni 
//Con java progetto le chiamate per un API. Useremo PostMAN più avanti .


//FETCH 
const URL = "https://reqres.in/api/users" //endpoint


//Metodo che sto applicando è il metodo GET
fetch(URL)
    //di default è GET
    //Tutto ciò che succede fuori dal then è già successo
    .then(data => {
        return data.json()
    }) //gestisco i dati
    .then(response => { //ti prometto che gestisco quei dati
        console.log(response);
        //console.log(response.data[0].first_name)

        nomePrimaPersona = response.data[0].first_name;

        console.log("Il nome della prima persona è:" + nomePrimaPersona)

        stampaNellaPagina(response.data);

    })


let demo = document.querySelector("#demo");


function stampaNellaPagina(listaDiPersone) {
    listaDiPersone.forEach(persona => {
        demo.innerHTML += `<li>${persona.first_name}${persona.last_name}      
        <img src ='${persona.avatar}'>"</li>`
    });
}

