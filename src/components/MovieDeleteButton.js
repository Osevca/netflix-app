import "./MovieDeleteButton.css"

const MovieDeleteButton = (props) => {
    return (
        <button className="movie-delete-button" onClick={props.deleteMovies}>Vymazat film</button>
    )
}

export default MovieDeleteButton