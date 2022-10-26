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

        const boxes = document.querySelectorAll(".movie");
        boxes.forEach((box) => {
            box.remove();
        });
        for (let i = 0; i < data.length; i++) {
            const para = document.createElement("p");
            const dataID = data[i].id;
            getStreamingProviders(dataID);
            const node = document.createTextNode(data[i].original_title);
            para.setAttribute("class", "movie");
            para.appendChild(node);
            const element = document.getElementById("movies");
            element.appendChild(para);
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
    console.log(data);
    return data;
}

document.getElementById("search").addEventListener("click", function () {
    searchMovies(document.getElementById("query").value, 1);
});




//document.getElementById("query").addEventListener("keydown", function () {
//    searchMovies(document.getElementById("query").value, 1);
//});
