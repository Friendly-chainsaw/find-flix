
//List of temporary streaming services for testing purposes

//Displays the available streaming services within the search bar functionality
//param(retrievedStreamingServices List, movieTitle string)
function displayStreamingServices(retrievedStreamingServices, movieTitle, movieID) {
    console.log(retrievedStreamingServices)
    const searchResult = document.createElement("div");
    searchResult.classList.add("theSearchDiv")
    const title = document.createElement("h3")
    title.innerHTML = movieTitle
    searchResult.appendChild(title)
    searchResult.setAttribute("onclick", `location.href='movieInformation.html?movieID=${movieID}'`)
    if (retrievedStreamingServices !== undefined) {
        const iconDiv = document.createElement("div");
        iconDiv.classList.add("theItemDiv")
        iconDiv.id = movieID
        for (let i = 0; i < retrievedStreamingServices.length; i++) {
            const newStreamingServiceImage = document.createElement("img")
            newStreamingServiceImage.src = `${config["image_base_url"]}${retrievedStreamingServices[i]["logo_path"]}`
            newStreamingServiceImage.classList.add("streamingServiceIcon")
            iconDiv.appendChild(newStreamingServiceImage)
        }
        searchResult.appendChild(iconDiv)
    }
    const movies = document.getElementById("movies");
    movies.appendChild(searchResult);
}
