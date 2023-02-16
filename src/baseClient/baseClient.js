import eventEmitter from 'events';
import getPokemon from './baseClientMethods/getPokemon.js';
import getBerry from './baseClientMethods/getBerry.js';
import { getDatainXseconds } from './baseClientMethods/getData.js';


export default class baseClient extends eventEmitter {

    constructor() {
        super()
        this.pokemonFetcherId;
        this.berryFetcherId;
    }

    async getPokemon({ name, fullData }) {
        return await getPokemon({ name: name });
    }

    async getBerry({ name, fullData }) {
        return await getBerry({ name: name, fullData: fullData });
    }


    getPokemonDataInXSeconds({ nameList, timeInSeconds }) {

        //nameList form example: ["pikachu", "charmander", "squirtle"] @array
        //timeInSeconds  form example: 8  @number

        getDatainXseconds({
            nameList: nameList,
            timeInSeconds: timeInSeconds,
            fetcherId: this.pokemonFetcherId,
            eventName: "pokemon_fetched",
            fetchMethod: this.getPokemon,
            emitter: this
        });

    }

    getBerryDataInXSeconds({ nameList, timeInSeconds }) {

        //nameList form example: ["oran", "sitrus", "lum"] @array
        //timeInSeconds  form example: 8  @number

        getDatainXseconds({
            nameList: nameList,
            timeInSeconds: timeInSeconds,
            fetcherId: this.berryFetcherId,
            eventName: "berry_fetched",
            fetchMethod: this.getBerry,
            emitter: this
        });

    }

    stopFetchData() {
        clearInterval(this.pokemonFetcherId);
        clearInterval(this.berryFetcherId);
    }


}
