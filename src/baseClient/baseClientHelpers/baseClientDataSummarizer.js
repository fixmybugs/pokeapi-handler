import { v4 as uuidv4 } from 'uuid';

export default function summarize(data, type, fullData = false){

    let summary = {}
    let uuid = uuidv4();
    if(!fullData){
      return Object.freeze({...data, uuid});
    } else {
      if(type === "pokemon"){
          summary = {
              abilities: data.abilities,
              base_experience: data.base_experience,
              height: data.height,
              weight: data.weight,
              name: data.name,
              id: data.id,
              uuid: uuid
          }
      }else if(type === "berry"){
          summary = {
              name: data.name,
              id: data.id,
              growth_time: data.growth_time,
              max_harvest: data.max_harvest,
              natural_gift_power: data.natural_gift_power,
              size: data.size,
              smoothness: data.smoothness,
              uuid: uuid
          }
        } else {
          throw new Error("type must be either 'pokemon' or 'berry'");
        }
    }

    return Object.freeze(summary);

}

//example of the form of {data}

/*{
  abilities: [
    { ability: [Object], is_hidden: false, slot: 1 },
    { ability: [Object], is_hidden: true, slot: 3 }
  ],
  base_experience: 112,
  forms: [
    {
      name: 'pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon-form/25/'
    }
  ],
  game_indices: [
    { game_index: 84, version: [Object] },
    { game_index: 84, version: [Object] },
    { game_index: 84, version: [Object] },
  ],
  height: 4,
  held_items: [
    { item: [Object], version_details: [Array] },
    { item: [Object], version_details: [Array] }
  ],
  id: 25,
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/25/encounters',
  moves: [
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
  ],
  name: 'pikachu',
  order: 35,
  past_types: [],
  species: {
    name: 'pikachu',
    url: 'https://pokeapi.co/api/v2/pokemon-species/25/'
  },
  sprites: {
    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
    back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png',
    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png',
    back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png',
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png',
    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png',
    front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png',
    other: {
      dream_world: [Object],
      home: [Object],
      'official-artwork': [Object]
    },
    versions: {
      'generation-i': [Object],
      'generation-ii': [Object],
      'generation-iii': [Object],
      'generation-iv': [Object],
      'generation-v': [Object],
      'generation-vi': [Object],
      'generation-vii': [Object],
      'generation-viii': [Object]
    }
  },
  stats: [
    { base_stat: 35, effort: 0, stat: [Object] },
    { base_stat: 55, effort: 0, stat: [Object] },
    { base_stat: 40, effort: 0, stat: [Object] },
    { base_stat: 50, effort: 0, stat: [Object] },
    { base_stat: 50, effort: 0, stat: [Object] },
    { base_stat: 90, effort: 2, stat: [Object] }
  ],
  types: [ { slot: 1, type: [Object] } ],
  weight: 60
}
*/