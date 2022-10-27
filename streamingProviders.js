async function getStreamingProviders(movie_id, regionID)
{
    if(movie_id){
        try{
            const response = await fetch(`${BASE_URL}/movie/${movie_id}/watch/providers?api_key=${config.api_key}`)
            const data = await response.json()
            if (data.results[regionID] === undefined) {
                return {}
            }
            return data.results[regionID]
        } catch(err){
            console.log(err)
            return "Something happen, please try again later!"
        }
    }
}
