/**
 * Returns an array of objects with the best rates movies by page.
 * @param {number} page the id for the movie we want the info
 * @return {object} returns an array of objects with the best rates movies by page.
 */
 async function getBestRatesMovies(page){
    const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${config.api_key}&language=en-US&page=${page}`);
    const data = await response.json();
    return data.results;
}
