import eventEmitter from 'events';
import getPokemon from './baseClientMethods/getPokemon.js';
import getBerry from './baseClientMethods/getBerry.js';


export default class baseClient extends eventEmitter{

    constructor(){
        super()
        this.setIntervalId;
    }
    
    async getPokemon({name}){
        return await getPokemon({name: name});
    }

    async getBerry({name, fullData}){
        return await getBerry({name: name, fullData: fullData});
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

    getBerryDataInXSeconds({nameList, full, timeInSeconds}){

        //nameList form example: ["oran", "sitrus", "lum"] @array
        //timeInSeconds  form example: 8  @number

       if(timeInSeconds < 3) throw new Error("{timeInSeconds} must not be less than 3");

       this.setIntervalId = setInterval(async()=>{

           for(let index = 0; index < nameList.length; index ++){

               let berryInfo = await this.getBerry({name: nameList[index], fullData: full})
               this.emit("berry_fetched", berryInfo);
           }

       }, timeInSeconds * 1000);

   }

    stopFetchData(){
        clearInterval(this.setIntervalId);
    }

}

