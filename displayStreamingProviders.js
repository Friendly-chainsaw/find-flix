
//List of temporary streaming services for testing purposes
const streamingServices = {
    "netflix": "icons8-netflix-desktop-app.svg",
    "amazon prime": "icons8-amazon-prime-video.svg",
    "disney+": "icons8-disney-plus.svg",
    "paramount+": "icons8-paramount-plus.svg",
    "apple tv": "icons8-apple-tv.svg",
    "youtube": "icons8-youtube.svg",
}

//Displays the available streaming services within the search bar functionality
//param(retrievedStreamingServices List, movieTitle string)
function displayStreamingServices(retrievedStreamingServices, movieTitle) {
    const searchResult = document.createElement("div");
    searchResult.classList.add("theSearchDiv")
    const title = document.createElement("p")
    title.innerHTML = movieTitle
    searchResult.appendChild(title)
    const iconDiv = document.createElement("div");
    iconDiv.classList.add("theItemDiv")
    for (let i = 0; i < retrievedStreamingServices.length; i++) {
        const newStreamingServiceImage = document.createElement("img")
        console.log(retrievedStreamingServices[i])
        console.log(streamingServices[retrievedStreamingServices[i]])
        newStreamingServiceImage.src = `./svgIcons/${streamingServices[retrievedStreamingServices[i]]}`
        newStreamingServiceImage.classList.add("streamingServiceIcon")
        iconDiv.appendChild(newStreamingServiceImage)
    }

    searchResult.appendChild(iconDiv)
    const movies = document.getElementById("movies");
    movies.appendChild(searchResult);
}
