import eventEmitter from 'events';
import getPokemon from './baseClientMethods/getPokemon.js';
import getBerry from './baseClientMethods/getBerry.js';
import getDataInXSeconds from './baseClientMethods/getDataInXSeconds.js';
import stopFetchData from './baseClientMethods/stopFetchData.js';

export default class baseClient extends eventEmitter {

    constructor() {
        super()
        this.pokemonFetcherId;
        this.fetchersIds = [];
    }

    async getPokemon({ name, fullData }) {
        return await getPokemon({ name: name });
    }

    async getBerry({ name, fullData }) {
        return await getBerry({ name: name, fullData: fullData });
    }

    getDataInXSeconds({ nameList, timeInSeconds, type, fullData }) {

        let parameters = {
            context: this, //this contains the entire context of baseClient
            nameList: nameList,
            timeInSeconds: timeInSeconds,
            type: type,
            fullData: fullData
        };

        let fetcherId = getDataInXSeconds(parameters);
        this.fetchersIds.push(fetcherId);

    }

    stopFetchData() {
        stopFetchData(this.fetchersIds);
        this.fetchersIds = [];
    }


}
