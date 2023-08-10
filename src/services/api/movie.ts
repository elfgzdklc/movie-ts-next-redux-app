import api from "@/services/util/axiosConfig";

export const getMovies = async () => {
    try {
        const response = await api.get('/movie')
        return response.data
    } catch (error) {
        console.error('Error geting movies:', error)
        return []
    }
}