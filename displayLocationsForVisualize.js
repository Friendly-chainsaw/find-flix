const displayResult = document.getElementById("providers");

async function displayLocationsForVisualize(movie_id){
    const location = getLocale();

    const providers = await getStreamingProviders(movie_id, location);

    if(providers){
        displayResult.classList.add("visualize-info");

        const movieName = document.createElement("h1");
        movieName.innerHTML = await getMovieName(movie_id);
        displayResult.appendChild(movieName);

        const buy = document.createElement("h2");
        buy.innerHTML = "Buy";
        displayResult.appendChild(buy);

        getProviders(providers.buy);

        const stream = document.createElement("h2");
        stream.innerHTML = "Stream";
        displayResult.appendChild(stream);

        getProviders(providers.flatrate);

        const rent = document.createElement("h2");
        rent.innerHTML = "Rent";
        displayResult.appendChild(rent);

        getProviders(providers.rent);
    }

}


async function getProviders(arrayProviders){

    if(arrayProviders){
        for(let i = 0; i < arrayProviders.length; i++){
            const newStreamingServiceImage = document.createElement("img");
            newStreamingServiceImage.classList.add("providers");

            newStreamingServiceImage.src = `https://image.tmdb.org/t/p/w500${arrayProviders[i].logo_path}`;
            displayResult.appendChild(newStreamingServiceImage);
        }
    }
}

function createText(textHTML, text){
    const result = document.createElement(textHTML);
    text.innerHTML = text;
    return result;
}
