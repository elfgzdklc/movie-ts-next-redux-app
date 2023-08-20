import {createSlice} from "@reduxjs/toolkit";
import {fetchData} from "@/services/api/dataThunk";

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