import axios from "axios";

const apiUrl = import.meta.env.VITE_DEV_API;

export async function fetchSignUp(dataform) {
    try {
        const response = await axios.post(`${apiUrl}/signup`, dataform);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}
export async function fetchSignIn(dataform) {
    try {
        const response = await axios.post(`${apiUrl}/signin`, dataform);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}
