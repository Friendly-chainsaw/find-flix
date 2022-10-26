const config = {
    api_key: "5dcfa53a01aa624d368df66c96439139",
    api_base_url: "https://api.themoviedb.org/3/",
    image_base_url: "https://image.tmdb.org/t/p/w1280",
};

const BASE_URL = config.api_base_url
const API_KEY = config.api_key

const fetch = require('isomorphic-fetch')


// Returns an object with the buy, rent, and streaming providers of a given movie and and a given region
async function getStreamingProviders(movie_id, regionID)
{
    if(movie_id){
        try{
            var finalFormat = {}
            const response = await fetch(`${BASE_URL}/movie/${movie_id}/watch/providers?api_key=${config.api_key}`)
            const data = await response.json()
            return data.results[regionID]
        } catch(err){
            console.log(err)
            return "Something happen, please try again later!"
        }
    }
}
