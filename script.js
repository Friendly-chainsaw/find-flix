const config = {
    api_key: "5dcfa53a01aa624d368df66c96439139",
    api_base_url: "https://api.themoviedb.org/3/",
    image_base_url: "https://image.tmdb.org/t/p/w1280",
};

const BASE_URL = config.api_base_url;
const API_KEY = config.api_key;

async function searchMovies(searchKeyWord, page) {
    let data = [];
    try {
        const response = await fetch(
            `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-GB&query=${searchKeyWord}&page=${page}&include_adult=false`
        );
        const responseData = await response.json();
        data = responseData?.results;

        const boxes = document.querySelector("#movies");
        for (let item of boxes.children) {
            item.remove();
        }
        for (let i = 0; i < data.length; i++) {
            console.log(data)
            getStreamingProviders(data[i].id)
            displayStreamingServices(["netflix", "apple tv", "amazon prime", "paramount+", "youtube"], data[i].title)
        }
    } catch (error) {
        const para = document.createElement("p");
        const node = document.createTextNode(
            "Oops! Try a different keyword or phrase :)"
        );
        para.setAttribute("id", "error");
        para.appendChild(node);
        const element = document.getElementById("movies");
        element.appendChild(para);
        setTimeout(() => {
            document.getElementById("error").remove();
        }, 1000);
    }
    return data;
}

document.getElementById("search").addEventListener("click", function () {
    searchMovies(document.getElementById("query").value, 1);
});




//document.getElementById("query").addEventListener("keydown", function () {
//    searchMovies(document.getElementById("query").value, 1);
//});
