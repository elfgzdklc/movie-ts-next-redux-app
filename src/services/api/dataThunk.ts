import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "@/services/util/axiosConfig";

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await api.get('/products');
    return response.data;
})