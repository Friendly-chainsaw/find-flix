/**
 * Returns an object with movie information.
 * @param {number} movie_id the id for the movie we want the info
 * @return {object} returns an object with movie information
 */
async function getAllMovieInfoById(movie_id){
    if(movie_id){
        try{
            const response = await fetch(`${BASE_URL}/movie/${movie_id}?api_key=${config.api_key}&language=en-US`);
            const data = await response.json();
            console.log("data", data)
            const result = {"title" : data.title, "plug-summary": data.overview, "picture": data.poster_path, "rating": data.vote_average, "release": data.release_date};
            return result;
        } catch (err){
            console.log(err);
            return "Something happen, please try again later!";
        }

    }
}


async function getMovieName(movie_id){
    if(movie_id){
        try{
            const response = await fetch(`${BASE_URL}/movie/${movie_id}?api_key=${config.api_key}&language=en-US`);
            const data = await response.json();
            return data.title;
        } catch (err){
            console.log(err);
            return "Something happen, please try again later!";
        }

    }
}
