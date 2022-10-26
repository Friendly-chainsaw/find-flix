const streamingServices = {
    "Netflix": "icons8-netflix-desktop-app.svg",
    "Amazon Prime": "icons8-amazon-prime-video.svg",
    "Disney+": "icons8-disney-plus.svg",
    "Paramount+": "icons8-paramount-plus.svg",
    "Apple TV": "icons8-apple-tv.svg",
    "Youtube": "icons8-youtube.svg",
}

function displayStreamingServices(retrievedStreamingServices, movieTitle) {
    const container = document.createElement("div");
    container.classList.add("theItemDiv")
    const title = document.createElement("p")
    title.innerHTML = movieTitle
    container.appendChild(title)
    for (let service in retrievedStreamingServices) {
        const newStreamingServiceImage = document.createElement("img")
        console.log(streamingServices[service])
        newStreamingServiceImage.src = `./svgIcons/${streamingServices[service]}`
        newStreamingServiceImage.classList.add("streamingServiceIcon")
        container.appendChild(newStreamingServiceImage)
    }

    const movies = document.getElementById("movies");
    movies.appendChild(container);
}
