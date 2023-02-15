import fetch from 'node-fetch';
import endpoints from '../baseClientHelpers/baseClientEndpoints.js';
import dataSummary from '../baseClientHelpers/baseClientDataSummarizer.js';

export default async function getBerry({name, fullData}){

    let endpoint
    if (typeof name === 'string'){
        endpoint = endpoints.berryByName(name);
    }
    else if (typeof name === 'number'){
        endpoint = endpoints.berryById(name);
    }

    let requestParams = {
        method: 'get'
    }
    let apiResponse = await fetch(endpoint, requestParams);
    let data =  await apiResponse.json();

    const berrySummary = dataSummary(data, 'berry', fullData);

    return berrySummary;

}