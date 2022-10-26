
//List of temporary streaming services for testing purposes

//Displays the available streaming services within the search bar functionality
//param(retrievedStreamingServices List, movieTitle string)
function displayStreamingServices(retrievedStreamingServices, movieTitle, movieID) {
    const searchResult = document.createElement("div");
    searchResult.classList.add("theSearchDiv")
    const title = document.createElement("h3")
    title.innerHTML = movieTitle
    searchResult.appendChild(title)
    if (retrievedStreamingServices.length !== undefined && retrievedStreamingServices.length !== undefined) {
        const iconDiv = document.createElement("div");
        iconDiv.classList.add("theItemDiv")
        iconDiv.id = movieID
        iconDiv.setAttribute("onclick", "handleDisplayingInfo(id)")
        for (let i = 0; i < retrievedStreamingServices.length; i++) {
            const newStreamingServiceImage = document.createElement("img")
            console.log(retrievedStreamingServices[i])
            console.log(streamingServices[retrievedStreamingServices[i]])
            newStreamingServiceImage.src = `./svgIcons/${streamingServices[retrievedStreamingServices[i]]}`
            newStreamingServiceImage.classList.add("streamingServiceIcon")
            iconDiv.appendChild(newStreamingServiceImage)
        }
        searchResult.appendChild(iconDiv)
    }
    const movies = document.getElementById("movies");
    movies.appendChild(searchResult);
}
