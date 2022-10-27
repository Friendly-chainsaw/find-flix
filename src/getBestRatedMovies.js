/**
 * Returns an object with the best rates movies by page.
 * @param {number} page the id for the movie we want the info
 * @return {object} returns an object with the best rates movies by page.
 */
async function getBestRatesMovies(page){
    const response = await fetch(`${BASE_URL}/tv/top_rated?api_key=${config.api_key}&language=en-US&page=${page}`);
    const data = response.json();

    const result = {"title" : data.title, "plug-summary": data.overview, "picture": data.poster_path, "rating": data.vote_average};
    return result;
}
