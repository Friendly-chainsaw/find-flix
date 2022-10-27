const displayResult = document.getElementById("providers");

async function displayLocationsForVisualize(movie_id){
    const location = getLocale();

    const providers = await getStreamingProviders(movie_id, location);

    if(providers){
        displayResult.classList.add("visualize-info");

        displayResult.appendChild(createText("h1", await getMovieName(movie_id)));

        if(!providers.buy && !providers.flatrate && !providers.rent){

            displayResult.appendChild(createText("h2", "Sorry! No information available for this film!"));

        } else {
            if(providers.buy.length > 0){

                displayResult.appendChild(createText("h2", "Buy"));
                getProviders(providers.buy);
            }

            if(providers.flatrate.length > 0){

                displayResult.appendChild(createText("h2", "Stream"));
                getProviders(providers.flatrate);
            }

            if(providers.rent.length > 0){
                displayResult.appendChild(createText("h2", "Rent"));
                getProviders(providers.rent);
            }
        }
    }
}

async function getProviders(arrayProviders) {
  if (arrayProviders) {
    for (let i = 0; i < arrayProviders.length; i++) {
      const newStreamingServiceImage = document.createElement("img");
      newStreamingServiceImage.classList.add("providers");

      newStreamingServiceImage.src = `https://image.tmdb.org/t/p/w500${arrayProviders[i].logo_path}`;
      displayResult.appendChild(newStreamingServiceImage);
    }
  }
}

function createText(textHTML, text) {
  const result = document.createElement(textHTML);
  text.innerHTML = text;
  return result;
}
