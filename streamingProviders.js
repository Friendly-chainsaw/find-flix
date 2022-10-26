const BASE_URL = config.api_base_url;
const API_KEY = config.api_key;

function getStreamingProviders(movie_id){
    fetch(`${BASE_URL}/movie/${movie_id}/watch/providers`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return [];
    })
    .catch(err => {
        console.log(err);
    });
}


module.exports = getStreamingProviders;
