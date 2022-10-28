window.addEventListener("load", (event) => {
    displayUpcomingMovies(1)
})

const handleOnMouseMovePaginationBar = event => {
    const {currentTarget: target} = event;
    const rect = target.getBoundingClientRect(), x = event.clientX - rect.left, y = event.clientY-rect.top;
    document.getElementById("barID").style.setProperty("--mouse-x-bar", `${x-40}px`)
}
const pagination = document.getElementById("paginationView")
pagination.onmousemove = event => handleOnMouseMovePaginationBar(event)

async function displayUpcomingMovies(page) {
    const result = await getUncoming(page);
    const body = document.getElementById("upcomingMoviesContainer");
    body.innerHTML = ""

    document.getElementById("upcomingMoviesContainer").style.setProperty("--count", result.length)

    for(let i = 0; i< result.length; i++){
        const newCard = document.createElement("div");
        console.log(result[i].release_date)
        newCard.setAttribute("onclick", `location.href='movieInformation.html?movieID=${result[i].id}&releaseDate=${result[i].release_date}'`)
        newCard.classList.add("upcomingMovie");
        var img = document.createElement('img');
        if (result[i].backdrop_path === null) {
            img.src = "./logosAndIcons/qualityLogo.png";
            img.classList.add("upcomingMovieImage");
        } else {
            img.src = `${config["image_base_url"]  + result[i].poster_path}`;
            img.classList.add("upcomingMovieImage");
        }
        newCard.appendChild(img);
        let cardText = createText("h3", result[i].title)
        let cardReleaseDate = createText("h5", result[i].release_date)
        let textDiv = document.createElement("div")
        textDiv.classList.add("upcomingMovieTextDiv")

        cardText.classList.add("upcomingMovieTitle")
        cardReleaseDate.classList.add("upcomingMovieReleaseDate")
        textDiv.appendChild(cardText)
        textDiv.appendChild(cardReleaseDate)
        newCard.appendChild(textDiv);
        body.appendChild(newCard);
    }
}

var elements = document.getElementsByClassName("pagination-number");

function getNumber(event) {
    const number = Number(event.target.innerHTML);
    displayUpcomingMovies(number);
  }

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', (e) => getNumber(e));
}
