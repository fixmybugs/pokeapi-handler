import eventEmitter from 'events';
import getPokemon from './baseClientMethods/getPokemon.js';


export default class baseClient extends eventEmitter{

    constructor(){
        super()
        this.setIntervalId;
    }
    
    async getPokemon({name}){
        return await getPokemon({name: name});
    }

   
   

    getPokemonDataInXSeconds({nameList, timeInSeconds}){

         //nameList form example: ["pikachu", "charmander", "squirtle"] @array
         //timeInSeconds  form example: 8  @number

        if(timeInSeconds < 3) throw new Error("{timeInSeconds} must not be less than 3");

        this.setIntervalId = setInterval(async()=>{  
            
            for(let index = 0; index < nameList.length; index ++){

                let pokeInfo = await this.getPokemon({name: nameList[index]})
                this.emit("pokemon_fetched", pokeInfo);
            }

        }, timeInSeconds * 1000);

    }

    stopFetchPokemonData(){
        clearInterval(this.setIntervalId);
    }

}

