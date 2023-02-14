import fetch from 'node-fetch';
import endpoints from '../baseClientHelpers/baseClientEndpoints.js';

export default async function getPokemon({name}){

    if(typeof name != 'string') throw new Error('The {name} parameter must be a string with the name pokemon'); 

    let requestParams = {
        method: 'get'
    }
    let apiResponse = await fetch(endpoints.pokemon(name), requestParams);
    let data =  await apiResponse.json();

    //use baseClientDataSummarizer here 

    return data;

}