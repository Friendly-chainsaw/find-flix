const displayResult = document.getElementById("providers");
let movieName;

async function displayLocationsForVisualize(movie_id){
    const location = getLocale();
    movieName =  await getMovieName(movie_id);

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

      console.log(`https://image.tmdb.org/t/p/w500${arrayProviders[i].logo_path}`, arrayProviders[i].logo_path);

      switch(arrayProviders[i].logo_path){
        //amazon
        case "/5NyLm42TmCqCMOZFvH4fcoSNKEW.jpg":
          addClick(newStreamingServiceImage, `https://www.amazon.com/s?k=${movieName.replaceAll(" ","+")}&i=instant-video`)
        break;
        //apple
        case "/peURlLlr8jggOwK53fJ5wdQl05y.jpg":
          addClick(newStreamingServiceImage, `https://tv.apple.com/search?term=${movieName.replaceAll(" ","%20")}`)
        break;
        //google play
        case "/tbEdFQDwx5LEVr8WpSeXQSIirVq.jpg":
          addClick(newStreamingServiceImage, `https://play.google.com/store/search?q=${movieName.replaceAll(" ","%20")}`)
        break;
        //sky
        case "/2pCbao1J9s0DMak2KKnEzmzHni8.jpg":
          addClick(newStreamingServiceImage, `https://www.sky.com/new-search?q=${movieName.replaceAll(" ","%20")}`)
        break;
        //chili
        case "/cksgBjTHV3rzAVaO2zUyS1mH4Ke.jpg":
          addClick(newStreamingServiceImage, `https://uk.chili.com/search?q=${movieName.replaceAll(" ","+")}`)
        break;
        // microsoft
        case "/shq88b09gTBYC4hA7K7MUL8Q4zP.jpg":
          addClick(newStreamingServiceImage, `https://www.microsoft.com/en-gb/search/explore?q=${movieName.replaceAll(" ","+")}`)
        break;
        //youtube
        case "/oIkQkEkwfmcG7IGpRR1NB8frZZM.jpg":
          addClick(newStreamingServiceImage, `https://www.youtube.com/results?search_query=${movieName.replaceAll(" ","+")}`)
        break;
        // Rakuten Tv
        case "/5GEbAhFW2S5T8zVc1MNvz00pIzM.jpg":
          addClick(newStreamingServiceImage, `https://rakuten.tv/uk/search?q=${movieName.replaceAll(" ","%20")}`)
        break;
      }

      displayResult.appendChild(newStreamingServiceImage);
    }
  }
}

function createText(textHTML, text) {
  const result = document.createElement(textHTML);
  text.innerHTML = text;
  return result;
}

function addClick(element, url){
  element.addEventListener('click', () => {
    window.open(url, '_blank');
  });
}
