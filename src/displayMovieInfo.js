window.addEventListener("load", (event) => {
  handleDisplayingInfo();
});
async function handleDisplayingInfo() {
<<<<<<< HEAD


    const URLparams = new URLSearchParams(window.location.search);
    const movieID = URLparams.get("movieID")

    const movieInfo = await getAllMovieInfoById(movieID)
    const movieProviders = await getStreamingProviders(movieID)
    console.log("movieInfo", movieInfo)

    const backButton = document.querySelector("#backbutton")
    backButton.setAttribute("onclick", "history.go(-1); return false;")

    createFlippableImage(movieInfo)
    displayLocationsForVisualize(movieID)
    //displayBuyRentStreamInfo(movieProviders)
=======
  const URLparams = new URLSearchParams(window.location.search);
  const movieID = URLparams.get("movieID");

  const movieInfo = await getAllMovieInfoById(movieID);
  const movieProviders = await getStreamingProviders(movieID);
  console.log("movieInfo", movieInfo);

  const backButton = document.querySelector("#backbutton");
  backButton.setAttribute(
    "onclick",
    `location.href='./index.html?movieID=${movieID}'`
  );

  createFlippableImage(movieInfo);
  displayLocationsForVisualize(movieID);
  //displayBuyRentStreamInfo(movieProviders)
>>>>>>> 66fa2bdd4e9ab7a3d373b3cfe733cb403656f644
}

function createFlippableImage(movieInfo) {
  //Adding neccessary divs for flippable image to the DOM

<<<<<<< HEAD
    console.log("movieInfo", movieInfo)
    const imageOuterDiv = document.getElementById("flipImageOuterDivID")
=======
  const imageOuterDiv = document.getElementById("flipImageOuterDivID");
>>>>>>> 66fa2bdd4e9ab7a3d373b3cfe733cb403656f644

  imageOuterDiv.innerHTML = "";

  const imageInnerDiv = document.createElement("div");
  const frontOfImageDiv = document.createElement("div");

  imageInnerDiv.addEventListener("click", (event) => {
    imageInnerDiv.classList.toggle("flipImageAnimation");
  });

  const backOfImageDiv = document.createElement("div");

  imageOuterDiv.appendChild(imageInnerDiv);
  imageInnerDiv.append(frontOfImageDiv, backOfImageDiv);

  imageInnerDiv.classList.add("flipImageInnerDiv");
  frontOfImageDiv.classList.add("flipImageFront", "flipImageFace");
  backOfImageDiv.classList.add("flipImageBack", "flipImageFace");

  //Front of flippable card
  const frontOfImagePicture = document.createElement("img");
  frontOfImagePicture.src = `${config["image_base_url"]}${movieInfo.picture}`;
  frontOfImagePicture.style.width = "400px";
  frontOfImagePicture.style.height = "auto";
  frontOfImagePicture.style.borderRadius = "40px";
  frontOfImageDiv.appendChild(frontOfImagePicture);

  //Back of flippable card
  const backOfImageTitle = document.createElement("h1");
  backOfImageTitle.innerHTML = movieInfo.title;

  const backOfImageRating = document.createElement("h3");
  backOfImageRating.innerHTML = movieInfo.rating;

  const backOfImagePlotSummary = document.createElement("p");
  backOfImagePlotSummary.innerHTML = movieInfo["plug-summary"];

  backOfImageDiv.append(
    backOfImageTitle,
    backOfImageRating,
    backOfImagePlotSummary
  );
}

document.getElementById("flipImageOuterDivID").addEventListener("click", () => {
  document.querySelector("#providers").classList.toggle("blur");
  console.log("hi");
});
