import axios from "axios";

const apiUrl = import.meta.env.VITE_DEV_API;

export const getAllFilms = async () => {
    try {
        const response = await axios.get(`${apiUrl}/get-films`);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
};
export const getFilmsFilter = async (data) => {
    try {
        const response = await axios.get(
            `${apiUrl}/get-films-filter-bioskop`,
            data
        );
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
};
export const getMovieDetail = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/get-films/${id}`);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
};
