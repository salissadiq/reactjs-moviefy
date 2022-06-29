
const apiConfig = {
    baseURL: "https://api.themoviedb.org/3/",
    apiKey: "c4c280d26e224d318aef255c06cc9c9d",
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}
export default apiConfig