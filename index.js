import client from './src/baseClient/baseClient.js';

async function main(){

    //baseClient usage example:
    let pokeClient = new client();
    let pokemonsToFetch = ["pikachu", "charmander", 7, "bulbasaur", 2];
    let berriesToFetch = ["oran", "cheri", "sitrus"];
    pokeClient.getPokemonDataInXSeconds({nameList: pokemonsToFetch, timeInSeconds: 10});
    pokeClient.getBerryDataInXSeconds({nameList: berriesToFetch, full: false, timeInSeconds: 8});

    pokeClient.on("pokemon_fetched", (pokedata)=>{

        let {name, id, uuid} = pokedata
        console.log("I GET INFO!! => ", `Name: ${name}, info: ${id}, uuid: ${uuid}`);
    })

    pokeClient.on("berry_fetched", (berrydata)=>{

        let {name, id, uuid} = berrydata
        console.log("I GET INFO!! => ", `Name: ${name}, info: ${id}, uuid: ${uuid}`);
    })
    
}

main();
