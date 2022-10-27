const displayResult = document.getElementById("providers");

async function displayLocationsForVisualize(movie_id){
    const location = getLocale();

    const providers = await getStreamingProviders(movie_id, location);

    if(providers){
        displayResult.classList.add("visualize-info");

        const movieName = document.createElement("h1");
        movieName.innerHTML = await getMovieName(movie_id);
        displayResult.appendChild(movieName);

        if(!providers.buy && !providers.flatrate && !providers.rent){
            const message = document.createElement("h2");
            message.innerHTML = "Sorry! No information available for this film!";
            displayResult.appendChild(message);
        } else {
            if(providers.buy.length > 0){
                const buy = document.createElement("h2");
                buy.innerHTML = "Buy";
                displayResult.appendChild(buy);
                getProviders(providers.buy);
            }

            if(providers.flatrate.length > 0){

                const stream = document.createElement("h2");
                stream.innerHTML = "Stream";
                displayResult.appendChild(stream);
                getProviders(providers.flatrate);
            }

            if(providers.rent.length > 0){
            rent.innerHTML = "Rent";
            displayResult.appendChild(rent);
            getProviders(providers.rent);
        }
    }
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
