const BASE_URL = config.api_base_url;
const API_KEY = config.api_key;
/*
window.addEventListener("load", (event) => {
    const URLparams = URLSearchParams(window.location.search);
    const searchQuery = URLparams.get("searchQuery")

    if (searchQuery !== undefined) {
        searchMovies(searchQuery, 1);
        const searchBar = document.getElementById("query")
        searchBar.value = searchQuery;
    }
})
*/
function createErrorMessage(errorMessage) {
  const para = document.createElement("p");
  const node = document.createTextNode(errorMessage);
  para.setAttribute("id", "error");
  para.appendChild(node);
  const element = document.getElementById("movies");
  element.appendChild(para);
  setTimeout(() => {
    document.getElementById("error").remove();
  }, 1000);
}

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
      const streamingProviders = await getStreamingProviders(
        data[i].id,
        getLocale()
      );
      displayStreamingServices(
        streamingProviders["flatrate"],
        data[i].title,
        data[i].id
      );
    }
  } catch (error) {
    createErrorMessage("Oops! Try another keyword of phrase");
  }
  return data;
}

function activateSearch(type) {
  if (type === "static") {
    if (document.getElementById("search")) {
      document.getElementById("search").addEventListener("click", function () {
        const str = document.getElementById("query").value;
        if (str === null || str.match(/^ *$/) !== null) {
          createErrorMessage("Oops! The search bar appears to be empty.");
        } else {
          searchMovies(str, 1);
        }
      });
    }
  } else if (type === "dynamic") {
    document.getElementById("query").addEventListener("keydown", function () {
      if (document.getElementById("query").value.length != 0) {
        // doesn't allow app to query the api unless the text box is !empty.
        searchMovies(document.getElementById("query").value, 1);
      } else {
        let movieID = document.querySelector("#movies");
        movieID.innerHTML = "";
      }
    });
  }
}

activateSearch("static");

// document.getElementById("form").addEventListener("active", () => {
//   document.getElementById("form").classList.toggle("formAnimation")
// })

// document.querySelector("#query").addEventListener("focus", () => {
// document.getElementById("mainSection").classList.toggle("moveUp");
// });
