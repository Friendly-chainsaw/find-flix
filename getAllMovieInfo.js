async function getAllMovieInfoById(movie_id){
    if(movie_id){
        try{
            const response = await fetch(`${BASE_URL}/movie/${movie_id}?api_key=${config.api_key}&language=en-US`);
            const imageResponse = await fetch(`${BASE_URL}/movie/${movie_id}/images?api_key=${config.api_key}&language=en-US`);

            // search for the Movie image by id in case data.poster_path is not the correct path

            // const data = await response.json();
            // const image = await imageResponse.json();
            // const result = {"title" : data.title, "plug-summary": data.overview, "picture": image.backdrops[0].file_path, "rating": data.vote_average};

            const result = {"title" : data.title, "plug-summary": data.overview, "picture": data.poster_path, "rating": data.vote_average};
            return result;
        } catch (err){
            console.log(err);
            return "Something happen, please try again later!";
        }

    }
}
