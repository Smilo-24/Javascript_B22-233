var btnInvia = document.querySelector("#btnInvia")

let elCarResidui = document.querySelector("#carResidui");

let elDemo=document.querySelector("#demo")

let elMessaggio = document.querySelector("#messaggio")


btnInvia.addEventListener("click",function(){
    stampaMessaggio();
});

elMessaggio.addEventListener("keyup")

function stampaMessaggio(){
    let testoInserito, carRes,counter;

    testoInserito = document.querySelector("#messaggio").value;

    elDemo.innerHTML="<p>" + testoInserito + "</p>"
    

}




function contaCar(){

    let testoInserito = document.querySelector("#messaggio")
    
    let counter = ( 128 - testoInserito.lenght);

    elCarResidui.innerHTML=counter;

    if(counter<=0){

        let msg=document.querySelector("#messaggio").value;
        elMessaggio.value=msg;
        
        //el messaggio. set attribute ( " disabled " , true ) 

    }






}