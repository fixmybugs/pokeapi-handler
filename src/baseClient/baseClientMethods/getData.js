async function fetchData({ nameList, fetchMethod, eventName, emitter }) {
    for (let name of nameList) {
        let data = await fetchMethod({ name: name });
        emitter.emit(eventName, data);
    }
}

function getDatainXseconds({ nameList, timeInSeconds, fetcherId, eventName, fetchMethod, emitter }) {

    if (timeInSeconds < 3) throw new Error("{timeInSeconds} must not be less than 3");

    fetcherId = setInterval(fetchData, timeInSeconds * 1000, { nameList: nameList, fetchMethod: fetchMethod, eventName: eventName, emitter: emitter });

}

export { getDatainXseconds }