import responseMovies from '../mocks/results.json'
import withoutResults from '../mocks/noresults.json'


export default function useMovies() {
    const movies = responseMovies.Search
    const mappedMovies = movies?.map(movie =>({
        id: movie.imdbID,
        tittle: movie.Title,
        year: movie.Year,
        image: movie.Poster
      }))
    return mappedMovies
}