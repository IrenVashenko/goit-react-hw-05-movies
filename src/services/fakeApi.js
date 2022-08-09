import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '2755fba3e929303148b2d926b9a7bf84';
axios.defaults.params = { api_key: API_KEY };

export const getTrandingAPI = async () => {
    try {
        const response = await axios.get(`/trending/movie/day`);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
};

export const getMoviesAPI = async (id) => {
    try {
        const response = await axios.get(`/movie/${id}`);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
};

export const getSearchMoviesAPI = async (query) => {
    const { data } = await axios.get(`/search/movie?query=${query}`);

    return data.results;
};

export const getCastAPI = async (movieId) => {
    const { data } = await axios.get(`/movie/${movieId}/credits`);

    return data;
};

export const getReveiwsAPI = async (movieId) => {
    const { data } = await axios.get(`/movie/${movieId}/reviews`);

    return data;
};


