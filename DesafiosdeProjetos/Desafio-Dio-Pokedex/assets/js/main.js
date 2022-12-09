const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 10
let offset = 0
const maxRecords = 248

function ConvertPokemonToLi(pokemon) {
    return `
        <li onclick="details(${pokemon.number})" class="pokemon ${pokemon.type}">
            <span class="number">${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                </ol>
                <img src="${pokemon.photo}" alt=${pokemon.name}>
            </div>                
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map(ConvertPokemonToLi).join("")
    })
}

function details(pokemonNumber){
    console.log(pokemonNumber)
    window.location.href = "./details.html";
}

loadPokemonItens(offset,limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsNexPage = offset + limit

    if(qtdRecordsNexPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else{        
        loadPokemonItens(offset, limit)
    }
    
})

