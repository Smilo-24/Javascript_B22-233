//recuper i tag p di html
let etaStudente = document.getElementById('etaStudente');
let avviso = document.getElementById('avviso');

//creo le variabili
//il prompt è un po' come lo scanner
let anno= 2023 ;
let etaS=prompt("Inserisci la tua età"); 
let anno1=anno - etaS;

//creo l if che è la logica per capire l età
if(etaS < 23){
    // alert("Non puoi accedere alla pagina");
    avviso.textContent = "Sei un Millenial ";
    etaStudente.textContent= "Sei nato nel : " + anno1;
    etaStudente.setAttribute("class","txtBlue");
}

else {
    //"stampo" il valore delle variabili nei tag recuperati
    avviso.textContent = "Sei nato negli anni 90 o ti avvicini ai dinosauri";
    etaStudente.textContent= "Età: " + anno1; 
    etaStudente.setAttribute("class","txtGreen");  
}

