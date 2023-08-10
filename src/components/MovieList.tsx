import React, {Dispatch, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from "../store/movieSlice"

const MovieList: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const movies = useSelector((state: any) => state.movies)
    const getMovieList = () => {
        dispatch(fetchMovies())
    }
    useEffect(() => {
        getMovieList()
    }, [])

    return (
        <>
            <h6>Movie List</h6>
            <ul>
                {movies.map((i: any, index: any) => (
                    <li key={index}>{i.movie}</li>
                ))}
            </ul>
        </>
    )
}
export default MovieList;