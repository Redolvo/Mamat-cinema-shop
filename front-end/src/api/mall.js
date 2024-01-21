import axios from "axios";

const apiUrl = import.meta.env.VITE_DEV_API;

export const getMalls = async () => {
    try {
        const response = await axios.get(`${apiUrl}/get-malls`);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
};
