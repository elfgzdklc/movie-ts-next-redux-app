import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import api from "@/services/util/axiosConfig"
import {AxiosResponse} from "axios";

interface DataState {
    data: any[];
    status: 'idle' | 'loading' | 'failed';
    error: string | null;
}

const initialState: DataState = {
    data: [],
    status: 'idle',
    error: null,
};

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response: AxiosResponse = await api.get('/movies');
    return response.data;
})

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state: any) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state: any, action) => {
                state.status = 'idle';
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state: any, action) => {
                state.status = 'failed';
                state.error = action.error.message || null;
            });
    }
})

export default dataSlice.reducer;