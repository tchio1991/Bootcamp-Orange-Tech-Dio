const pokeApi = {}

function convertPokenApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokenApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 20) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
    return fetch(url)
        .then((response) => response.json())
        .then((jsonbody) => jsonbody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailrequests) => Promise.all(detailrequests))
        .then((pokemonDetails) => pokemonDetails)

}