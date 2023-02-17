
export default function stopFetchData(fetchersIds){
    
    fetchersIds.forEach( (id) => {
        clearInterval(id); //clearInterval function still works because it's globally available
    });
    
}