//Fetch per le categorie

const URLCategorie = "https://dummyjson.com/products/categories";


fetch(URLCategorie)
    .then(data => {
        return data.json()
    })
    .then(response => {
        console.log(response);

        creaSelect(response);


        selectCategorie.addEventListener("change", function () {
            mostraProdotti("ciao")
        })


    })


//richiamo le categorie x inserirle nella barra delle categorie


let selectCategorie = document.querySelector("#selectCategorie")

/**
 * 
 * @param {Array} listaCategorie 
 */
function creaSelect(listaCategorie) {

    listaCategorie.forEach(categoria => {
        let optCategoria = document.createElement("option");
        optCategoria.innerHTML = categoria; //stampo la singola categoria
        optCategoria.setAttribute("value", categoria) //<option>value="nomeCategoria">nomeCategoria</option>

        selectCategorie.appendChild(optCategoria);

        // optCategoria.addEventListener("click",function(){
        //     console.log("ciao")
        //     mostraProdotti(categoria);
        // })
    });

    selectCategorie.addEventListener("change", function () {
        mostraProdotti(this.value);
    })

}

let demo = document.querySelector("#demo")

function mostraProdotti(categoria) {
    console.log(categoria)

    // costruire una nuova then che richiama i prodotti filtrati di una categoria, vedere la documentazione in dummyJSON

    //richiamo l end point dell' api delle categorie
    fetch(`https://dummyjson.com/products/category/${categoria}`)
        .then(data => {
            return data.json();
        })
        .then(response => {
            demo.innerHTML = "";

            response.products.forEach(prodotto => {
                // demo.innerHTML +=`<li> ${prodotto.title} - ${prodotto.brand} - ${prodotto.price} € 
                // <img src="${prodotto.thumbnail}"> </li>`
                demo.innerHTML += `
            <div class="col-4">
            <div class="card">
              <div class="card-body">
              <img class='card-img-top' src="${prodotto.thumbnail}"> 
                <h3 class="card-title">${prodotto.title}</h3>
                <p class="card-text">${prodotto.brand}</p>
                <p class="card-text">${prodotto.price} Piero Pelù</p>
                <button onclick='mettiNelCarrello'(${prodotto.id})'
                class="btn btn-primary" data-id='${prodotto.id}'>Compra</button>
              </div>
            </div>
          </div>`


            })
        })
}



function mettiNelCarrello(id){
    console.log(id);
}