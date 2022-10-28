// async function getLatest() {
//   try {
//     const response = await fetch(
//       `${BASE_URL}/movie/latest?api_key=${API_KEY}&language=en-GB}&include_adult=false`
//     );
//     const responseData = await response.json();
//     return responseData.id;
//   } catch (error) {
//     createErrorMessage("Oops!");
//   }
// }

// const latestID = getLatest().then((response) => {
//   console.log(response);
// });

// 1041412

//rng num range(0,latestID)

function randomID(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

document
  .getElementById("shuffle")
  .setAttribute(
    "onclick",
    `location.href='movieInformation.html?movieID=${randomID(1, 10000)}'`
  );

// displayLocationsForVisualize(randomID(),false);

// window.addEventListener("load", (event) => {
// displayBestMovies(1);
// });
