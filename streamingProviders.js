async function getStreamingProviders(movie_id)
{
    if(movie_id){
        try{
            const response = await fetch(`${BASE_URL}/movie/${movie_id}/watch/providers?api_key=${config.api_key}`);
            const data = await response.json();
            console.log(data?.results)
            return data?.results;
        } catch(err){
            console.log(err);
            return "Something happen, please try again later!";
        }
    }
}
