function showPokemon(pokemonName) {
    var card = document.getElementById('pokemon-card');
    var titleElement = document.getElementById('pokemon-title');
    var imageElement = document.getElementById('pokemon-image');
    var imageElement2 = document.getElementById('pokemon-image2');
    var descriptionElement = document.getElementById('pokemon-description');

    titleElement.textContent = pokemonName;
    imageElement.src = `images/${pokemonName.toLowerCase()}.png`;
    imageElement2.src = `images/${pokemonName.toLowerCase()}_2.png`;
    descriptionElement.textContent = "Descrizione del Pokemon.";

    card.style.display = 'block';
}

function hidePokemon() {
    var card = document.getElementById('pokemon-card');
    card.style.display = 'none';
}