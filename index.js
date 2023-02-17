import client from './src/baseClient/baseClient.js';

async function main(){

    //baseClient usage example:

    let pokeClient = new client();

    let pokemonsToFetch = ["pikachu", "charmander", 7, "bulbasaur", 2];
    let berriesToFetch = ["oran", "cheri", "sitrus"];

    pokeClient.getDataInXSeconds({
        nameList: pokemonsToFetch,
        timeInSeconds: 5,
        type: "pokemon",
        fullData: true
    })

    pokeClient.getDataInXSeconds({
        nameList: berriesToFetch,
        timeInSeconds:5,
        type: "berry"
    })


    pokeClient.on("pokemon_fetched", (pokedata)=>{
        let {name, id, uuid} = pokedata
        console.log("I GET INFO!! => ", `Name: ${name}, info: ${id}, uuid: ${uuid}`);
    });

    pokeClient.on("berry_fetched", (berrydata)=>{
        let {name, id, uuid} = berrydata
        console.log("I GET INFO!! => ", `Name: ${name}, info: ${id}, uuid: ${uuid}`);
    });


    //this stops fetchers after 15 seconds
    setTimeout(()=>{
        pokeClient.stopFetchData();
    }, 20*1000)
    
}

main();
