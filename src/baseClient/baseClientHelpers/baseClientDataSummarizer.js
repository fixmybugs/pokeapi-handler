import { v4 as uuidv4 } from 'uuid';

export default function summarize({data, type, fullData = false}) {

  let uuid = uuidv4();

  if (!fullData) return Object.freeze({ ...data, uuid });

  if (type === "pokemon") {
    return Object.freeze({
      abilities: data.abilities,
      base_experience: data.base_experience,
      height: data.height,
      weight: data.weight,
      name: data.name,
      id: data.id,
      uuid: uuid
    });
  }

  if (type === "berry") {
    return Object.freeze({
      name: data.name,
      id: data.id,
      growth_time: data.growth_time,
      max_harvest: data.max_harvest,
      natural_gift_power: data.natural_gift_power,
      size: data.size,
      smoothness: data.smoothness,
      uuid: uuid
    });
  }

  throw new Error(" { type } param must be either 'pokemon' or 'berry'");
}


