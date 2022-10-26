function handleDisplayingInfo(movieID) {

    const movieInfo = getAllMovieInfoById(movieID)
    const movieProviders = getStreamingProviders(movieID)

    createFlippableImage(movieInfo)
    //displayBuyRentStreamInfo(movieProviders)
}

function createFlippableImage(movieInfo) {
    const imageOuterDiv = document.createElement("div")
    const imageInnerDiv = document.createElement("div")
    const frontOfImageDiv = document.createElement("div")
    const backOfImageDiv = document.createElement("div")



}
