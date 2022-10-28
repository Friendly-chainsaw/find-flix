/**
 * Returns an array of movie objects with movie information.
 * @param {number} page the page we want to display
 * @return {Array} returns an array of movie objects with movie information
 */
async function getUncoming(page){
    const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${config.api_key}&language=en-US&page=${page}`);
    const data = await response.json();
    return data.results;
}
