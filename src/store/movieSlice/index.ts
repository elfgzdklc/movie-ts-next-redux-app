import {createSlice, createAsyncThunk, Slice} from "@reduxjs/toolkit";
import api from "@/services/util/axiosConfig"
import {AxiosResponse} from "axios";

interface Movie {
    id: number;
    movie: string;
}

interface MovieState {
    movies: Movie[];
}

const initialState: MovieState = {
    movies: [],
}

export const fetchMovies= createAsyncThunk('movies/fetchMovies', async () => {
    const response: AxiosResponse = await api.get('/movies');
    return response;
})

const moviesSlice: Slice<MovieState, {}, "movies"> = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state: any, action) => {
            state.movies = action.payload
        })
    }
})

export default moviesSlice.reducer;