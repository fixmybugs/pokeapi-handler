import client from './src/baseClient/baseClient.js';

async function main(){

    //baseClient usage example:
    let pokeClient = new client();
    let pokemonsToFetch = ["pikachu", "charmander", "squirtle"];
    pokeClient.getPokemonDataInXSeconds({nameList: pokemonsToFetch, timeInSeconds: 10});

    pokeClient.on("pokemon_fetched", (pokedata)=>{

        let {name, id} = pokedata
        console.log("I GET INFO!! => ", `Name: ${name}, info: ${id}`);
    })
    
}

main();
