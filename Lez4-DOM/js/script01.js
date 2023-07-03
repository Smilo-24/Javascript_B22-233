let listaPokemon = [{
        nome: "Pikachu",
        // Rendireizzazione senza fare .././ ma solo ./
        img: "./img/pikachu.jpg",
        tipo: "elettrico",
        descrizione: "Se lo tocchi ci resti secco. 220V 14A"
    },
    {
        nome: "Bulbasaur",
        img: "./img/bulbasaur.jpg",
        tipo: "erba",
        descrizione: "Un Pokemon che cressce a vista d'occhio"
    },
    {
        nome: "Charmender",
        img: "./img/charmender.jpg",
        tipo: "fuoco",
        descrizione: "Chiamata ai pompieri incorporata"
    },
];

//elementi statici, fermi, l'utente non interagise
let listaPoke = document.querySelector("#listaPoke")
let cardPoke = document.querySelector("#cardPoke")

/**
 * Forzatura 
 * @param {listaPokemon[]} pokemons 
 */
function mostraLista(pokemons) {
    pokemons.forEach(pokemon => {
        let li = document.createElement("li");
        li.textContent = pokemon.nome;

        let pulsMostra = document.createElement("button");
        pulsMostra.textContent = "MostraCard";
        pulsMostra.addEventListener("click",function(){
            mostraSingolaCard(pokemon)
        });
        li.appendChild(pulsMostra);
        listaPoke.appendChild(li); //lista UL
    });
}

//gli devo passare un pokemon
/**
 * 
 * @param {listaPokemon[i]} pokemon 
 */
function mostraSingolaCard(pokemon){
console.log(pokemon)

let card=`
<h2>${pokemon.nome} </h2>
<img src="${pokemon.img}">
<p>${pokemon.descrizione}</p>
<p>${pokemon.tipo}</p>;
`
//gli passo i valori
cardPoke.innerHTML=card;

}

mostraLista(listaPokemon);