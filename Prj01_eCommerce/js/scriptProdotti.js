//Fetch per le categorie

const URLCategorie = "https://dummyjson.com/products/categories";


fetch(URLCategorie)
.then(data=>{return data.json()})
.then(response=>{
    console.log(response);

    creaSelect(response);


    selectCategorie.addEventListener("change",function(){
        mostraProdotti("ciao")
    })


})


//richiamo le categorie x inserirle nella barra delle categorie


let selectCategorie = document.querySelector("#selectCategorie")

/**
 * 
 * @param {Array} listaCategorie 
 */
function creaSelect(listaCategorie){

    listaCategorie.forEach(categoria=>{
        let optCategoria = document.createElement("option");
        optCategoria.innerHTML=categoria;//stampo la singola categoria
        optCategoria.setAttribute("value",categoria)//<option>value="nomeCategoria">nomeCategoria</option>
        
        selectCategorie.appendChild(optCategoria);

        // optCategoria.addEventListener("click",function(){
        //     console.log("ciao")
        //     mostraProdotti(categoria);
        // })
    });

    selectCategorie.addEventListener("change", function(){
        mostraProdotti(this.value);
    })

}
function mostraProdotti(categoria){
    console.log(categoria)

// costruire una nuova then che richiama i prodotti filtrati di una categoria, vedere la documentazione in dummyJSON

}
