async function displayBestMovies(page){
    const result = await getBestRatesMovies(page);
    console.log(result);

    const body = document.getElementById("card-div");
    body.innerHTML = ""

    for(let i = 0; i< result.length; i++){

        const newCard = document.createElement("div");
        newCard.classList.add("card");
        var img = document.createElement('img');
        if (result[i].backdrop_path === null) {
            img.src = "./logosAndIcons/qualityLogo.png";
            img.classList.add("card-image-findflix-base");
        } else {
            img.src = `${config["image_base_url"]  + result[i].backdrop_path}`;
            img.classList.add("card-image");
        }
        newCard.appendChild(img);
        var cardText = createText("h2", result[i].name)
        cardText.classList.add("card-text")
        newCard.appendChild(cardText);

        body.appendChild(newCard);
    }

}

var elements = document.getElementsByClassName("pagination-number");

function getNumber(event) {
    console.log(event.target.innerHTML)
    const number = Number(event.target.innerHTML);
    displayBestMovies(number);
  }

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', (e) => getNumber(e));
}
