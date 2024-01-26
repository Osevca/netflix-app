import "./ReloadMovieButton.css"

const ReloadMovieButton = (props) => {
    return(       
        <button className="movie-reload-button" onClick={props.reloadMovies}>Obnov seznam filmu</button>
    )
}

export default ReloadMovieButton