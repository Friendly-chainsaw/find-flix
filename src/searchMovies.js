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
    boxes.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
      console.log(data);
      const streamingProviders = getStreamingProviders(data[i].id, getLocale());
      displayStreamingServices(
        streamingProviders["flatrate"],
        data[i].title, data[i].id);
    }
  } catch (error) {
    const para = document.createElement("p");
    const node = document.createTextNode(
      "Oops! Try a different keyword or phrase!"
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

// document.getElementById("query").addEventListener("keydown", function () {
//   if (document.getElementById("query").value.length != 0) {
//     // doesn't allow app to query the api unless the text box is !empty.
//     searchMovies(document.getElementById("query").value, 1);
//   } else {
//     let movieID = document.querySelector("#movies");
//     movieID.innerHTML = "";
//   }
// });