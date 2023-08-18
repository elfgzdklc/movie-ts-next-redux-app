import React, {Dispatch, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../store/movieSlice"

const MovieList: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const movies = useSelector((state: any) => state.data)
    const status = useSelector((state: any) => state.status);
    const error = useSelector((state: any) => state.error);

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <h6>Movie List</h6>
            <ul>
                {movies && movies.map((i: any, index: any) => (
                    <li key={index}>{i.movie}</li>
                ))}
            </ul>
        </>
    )
}
export default MovieList;