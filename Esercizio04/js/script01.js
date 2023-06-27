 // Array contenente le classi di colore, 6 stringhe

 let colore = ['rosso', 'verde', 'blu', 'giallo', 'arancione', 'viola'];

 // variabile che tiene traccia dell'indice del colore corrente.
 let coloreAttuale = 0;

 // Funzione per cambiare il colore del cerchio
 //viene eseguita ogni volta che faccio click nel cerchio.
 function cambiaColore() {
    //ottengo riferimento all elemento del cerchio
    //assegnazione
     let strobo = document.getElementById('strobo');
     //rimuovo il colore corrente dall elemento strobo
     strobo.classList.remove(colore[coloreAttuale]);
     // Incrementa l'indice del colore corrente
     //l operatore modulo garantisce che l indice rimanga all interno dell array
     coloreAttuale = (coloreAttuale + 1) % colore.length;
    //aggiungo la nuova classe di colore corrente.
     strobo.classList.add(colore[coloreAttuale]);
 }

 // Aggiungi l'evento click al cerchio
 let stroboCerchio = document.getElementById('strobo');
 stroboCerchio.addEventListener('click', cambiaColore);


 //in sintesi:
//lo script gestisce il cambio di colore del cerchio dello strobo al click. Ogni volta che viene fatto clic sul cerchio, la funzione cambiaColore viene eseguita. La funzione rimuove la classe di colore corrente dall'elemento strobo, incrementa l'indice del colore corrente e aggiunge la nuova classe di colore all'elemento strobo. In questo modo, il cerchio cambia colore ciclicamente tra le classi di colore definite nell'array colore.