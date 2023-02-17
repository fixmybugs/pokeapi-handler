
const validTypes = ["pokemon", "berry"];

export default function getDataInXSeconds({ context, nameList, timeInSeconds, type, fullData}) {

    if (timeInSeconds < 3) throw new Error("{timeInSeconds} must not be less than 3");
    if(!validTypes.includes(type)) throw new Error(`{${type}} is not a valid parameter`);

    const dataRequesters = {

        //here we are accessing the methods of "baseClient" because "context" contains "this"
        "pokemon": context.getPokemon,
        "berry": context.getBerry 
    }

    const events = {
        "pokemon": "pokemon_fetched",
        "berry": "berry_fetched"
    }

    let makeRequest = async (element) => {

        let request = dataRequesters[type];
        let responseData = await request({name: element, fullData: fullData});
        context.emit(events[type], responseData);

    }

    let startFetchData = async () => {
        nameList.forEach(makeRequest);
    }

    let timeInMiliseconds = timeInSeconds * 1000;

    let fetcherId = setInterval(startFetchData, timeInMiliseconds);
    
    return fetcherId;
}